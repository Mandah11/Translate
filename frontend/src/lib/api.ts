"use client";

export type UserSession = {
  id: string;
  fullName: string;
  email: string;
  role: "user" | "admin";
};

export type TranslationJob = {
  _id: string;
  user: UserSession | string;
  originalFileName: string;
  originalFileUrl: string;
  sourceLanguage: string;
  targetLanguage: string;
  sourceText: string;
  translationNote: string;
  aiTranslatedFileUrl: string | null;
  translatedText: string | null;
  reviewedFileUrl: string | null;
  status: "uploaded" | "translating" | "translated" | "review_requested" | "reviewed";
  reviewRequested: boolean;
  reviewedBy: UserSession | string | null;
  adminNote: string;
  watermarked: boolean;
  signature: string;
  createdAt: string;
  updatedAt: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:4000";

function getHeaders(userId?: string, extra?: HeadersInit) {
  return {
    ...(userId ? { "x-user-id": userId } : {}),
    ...extra,
  };
}

async function parseJson<T>(response: Response): Promise<T> {
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const message =
      payload && typeof payload === "object" && "error" in payload
        ? String(payload.error)
        : "Request failed";
    throw new Error(message);
  }
  return payload as T;
}

export function assetUrl(path?: string | null) {
  if (!path) {
    return null;
  }
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${API_BASE_URL}${path}`;
}

export function formatDateTime(value?: string | null) {
  if (!value) {
    return "Not available";
  }
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export async function login(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return parseJson<{ message: string; user: UserSession }>(response);
}

export async function registerUser(input: {
  fullName: string;
  email: string;
  password: string;
}) {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  return parseJson<{ message: string; user: UserSession }>(response);
}

export async function fetchJobs(userId: string) {
  const response = await fetch(`${API_BASE_URL}/api/jobs`, {
    headers: getHeaders(userId),
    cache: "no-store",
  });

  return parseJson<{ jobs: TranslationJob[] }>(response);
}

export async function uploadJob(input: {
  userId: string;
  file: File;
  sourceLanguage: string;
  targetLanguage: string;
  sourceText: string;
  translationNote: string;
}) {
  const formData = new FormData();
  formData.append("originalFile", input.file);
  formData.append("sourceLanguage", input.sourceLanguage);
  formData.append("targetLanguage", input.targetLanguage);
  formData.append("sourceText", input.sourceText);
  formData.append("translationNote", input.translationNote);

  const response = await fetch(`${API_BASE_URL}/api/jobs/upload`, {
    method: "POST",
    headers: getHeaders(input.userId),
    body: formData,
  });

  return parseJson<{ message: string; job: TranslationJob }>(response);
}

export async function translateJob(input: {
  userId: string;
  jobId: string;
  sourceText?: string;
  addWatermark?: boolean;
}) {
  const response = await fetch(`${API_BASE_URL}/api/jobs/${input.jobId}/translate`, {
    method: "POST",
    headers: getHeaders(input.userId, {
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sourceText: input.sourceText,
      addWatermark: input.addWatermark,
    }),
  });

  return parseJson<{ message: string; job: TranslationJob }>(response);
}

export async function requestReview(userId: string, jobId: string) {
  const response = await fetch(`${API_BASE_URL}/api/jobs/${jobId}/request-review`, {
    method: "POST",
    headers: getHeaders(userId),
  });

  return parseJson<{ message: string; job: TranslationJob }>(response);
}

export async function submitReview(input: {
  userId: string;
  jobId: string;
  adminNote: string;
  reviewedText: string;
}) {
  const response = await fetch(`${API_BASE_URL}/api/admin/jobs/${input.jobId}/review`, {
    method: "POST",
    headers: getHeaders(input.userId, {
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      status: "reviewed",
      adminNote: input.adminNote,
      reviewedText: input.reviewedText,
    }),
  });

  return parseJson<{ message: string; job: TranslationJob }>(response);
}
