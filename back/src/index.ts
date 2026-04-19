import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import fs from "fs";
import fetch from "node-fetch";

import User from "./models/User";
import TranslationJob from "./models/TranslationJob";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 4000);
const mongoUri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/translate";
const uploadDir = path.join(__dirname, "..", "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const timestamp = Date.now();
    const safeName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
    cb(null, `${timestamp}-${safeName}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
});

type AuthenticatedRequest = Request & { user?: any };

async function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const headerUserId = req.headers["x-user-id"];
    const userId = typeof headerUserId === "string" ? headerUserId : req.body.userId;

    if (!userId) {
      return res.status(401).json({ error: "Authentication required (x-user-id header or body.userId)" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ error: "Invalid user" });
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

function adminOnly(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
}

async function translateTextWithGemini(text: string, targetLanguage: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  const modelName = process.env.GEMINI_MODEL ?? "gemini-1.5-flash";

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is required for Gemini translation");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `You are a professional translator. Translate the following text to ${targetLanguage}. Respond with only the translated text, nothing else.\n\nText to translate:\n${text}`,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error ${response.status}: ${errorText}`);
  }

  const data: any = await response.json();
  const translated = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  
  if (!translated) {
    throw new Error("Gemini API returned empty translation");
  }
  
  return String(translated).trim();
}

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(uploadDir));

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", message: "Translate backend is running" });
});

app.post("/api/auth/register", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ error: "fullName, email and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" });
    }

    const user = new User({ fullName, email, password, role: role || "user" });
    await user.save();

    return res.status(201).json({
      message: "User registered",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
});

app.post("/api/auth/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    return res.json({
      message: "Login successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
});

app.post("/api/jobs/upload", upload.single("originalFile"), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;
    const { userId, sourceLanguage, targetLanguage } = req.body;

    if (!file || !userId || !targetLanguage) {
      return res.status(400).json({
        error: "originalFile, userId, and targetLanguage are required",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const fileUrl = `/uploads/${file.filename}`;
    const job = new TranslationJob({
      user: user._id,
      originalFileName: file.originalname,
      originalFileUrl: fileUrl,
      sourceLanguage: sourceLanguage ?? "auto",
      targetLanguage,
      status: "uploaded",
    });

    await job.save();

    return res.status(201).json({ message: "File uploaded and job created", job });
  } catch (error) {
    next(error);
  }
});

app.post("/api/jobs/:id/translate", authenticate, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { sourceText } = req.body;

    if (!sourceText) {
      return res.status(400).json({ error: "sourceText is required for translation" });
    }

    const job = await TranslationJob.findById(id);
    if (!job) {
      return res.status(404).json({ error: "Translation job not found" });
    }

    const translatedText = await translateTextWithGemini(sourceText, job.targetLanguage);
    const translatedFileName = `translated-${job._id}.txt`;
    const translatedFilePath = path.join(uploadDir, translatedFileName);
    fs.writeFileSync(translatedFilePath, translatedText, "utf-8");

    job.aiTranslatedFileUrl = `/uploads/${translatedFileName}`;
    job.status = "translated";
    job.translatedText = translatedText;
    await job.save();

    return res.json({ message: "Translation completed", job });
  } catch (error) {
    next(error);
  }
});

app.get("/api/jobs", async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const jobs = await TranslationJob.find()
      .populate("user", "fullName email role")
      .populate("reviewedBy", "fullName email role")
      .sort({ createdAt: -1 });

    return res.json({ jobs });
  } catch (error) {
    next(error);
  }
});

app.get("/api/admin/jobs", authenticate, adminOnly, async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const jobs = await TranslationJob.find()
      .populate("user", "fullName email role")
      .populate("reviewedBy", "fullName email role")
      .sort({ updatedAt: -1 });

    return res.json({ jobs });
  } catch (error) {
    next(error);
  }
});

app.post("/api/admin/jobs/:id/review", authenticate, adminOnly, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { status, adminNote, reviewedFileUrl } = req.body;

    const allowedStatus = ["review_requested", "reviewed", "translated"];
    if (!allowedStatus.includes(status)) {
      return res.status(400).json({ error: `status must be one of ${allowedStatus.join(", ")}` });
    }

    const job = await TranslationJob.findById(id);
    if (!job) {
      return res.status(404).json({ error: "Translation job not found" });
    }

    job.status = status as typeof job.status;
    job.adminNote = adminNote ?? job.adminNote;
    job.reviewRequested = status === "review_requested";
    job.reviewedBy = req.user?._id ?? job.reviewedBy;
    if (reviewedFileUrl) {
      job.reviewedFileUrl = reviewedFileUrl;
    }

    await job.save();

    return res.json({ message: "Job updated", job });
  } catch (error) {
    next(error);
  }
});

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);
  return res.status(500).json({ error: "Internal server error", details: error.message });
});

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log(`Connected to MongoDB: ${mongoUri}`);
    app.listen(port, () => {
      console.log(`Backend server started on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failure:", err);
    process.exit(1);
  });
