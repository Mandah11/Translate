export type TranslationStage = {
  label: string;
  detail: string;
  state: "done" | "active" | "pending";
};

export type TranslationJob = {
  id: string;
  fileName: string;
  sourceLanguage: string;
  targetLanguage: string;
  uploadedAt: string;
  pages: number;
  size: string;
  progress: number;
  aiScore: string;
  reviewStatus: "Needs review" | "Edited by admin" | "Ready to download";
  deliveryStatus: "Translating" | "Queued for human review" | "Delivered";
  stages: TranslationStage[];
  aiPreview: string[];
  editedPreview: string[];
  timeline: string[];
};

export const userSummaryStats = [
  { value: "24", label: "saved files", hint: "Every upload stays in your archive." },
  { value: "03", label: "active translations", hint: "Two AI jobs, one in human review." },
  { value: "92%", label: "avg AI quality", hint: "Based on glossary and formatting checks." },
  { value: "11 min", label: "last turnaround", hint: "Fastest delivery from upload to download." },
] as const;

export const translationJobs: TranslationJob[] = [
  {
    id: "TR-1042",
    fileName: "Annual_Report_2026.pdf",
    sourceLanguage: "English",
    targetLanguage: "Mongolian",
    uploadedAt: "Apr 17, 2026 - 09:14",
    pages: 18,
    size: "4.8 MB",
    progress: 100,
    aiScore: "92/100",
    reviewStatus: "Needs review",
    deliveryStatus: "Queued for human review",
    stages: [
      {
        label: "File uploaded",
        detail: "PDF layout and tables were preserved.",
        state: "done",
      },
      {
        label: "AI translation finished",
        detail: "Terminology memory matched 41 financial terms.",
        state: "done",
      },
      {
        label: "Human review requested",
        detail: "Waiting for admin correction before final delivery.",
        state: "active",
      },
      {
        label: "Final package delivery",
        detail: "Download DOCX, PDF, and bilingual reference file.",
        state: "pending",
      },
    ],
    aiPreview: [
      "AI draft keeps the original section order and financial phrasing while translating headings, notes, and summary tables.",
      "Risk disclosure paragraphs are translated clearly, but the tone still feels a little direct for investor-facing communication.",
      "Detected glossary terms: operating margin, revenue growth, regional expansion, adjusted EBITDA.",
    ],
    editedPreview: [
      "Admin-edited version softens the tone for investor communication and aligns recurring finance terms with your approved glossary.",
      "Headings, captions, and footnotes are normalized for readability, and the executive summary uses more natural Mongolian sentence flow.",
      "Final delivery will include the AI version and the reviewed version as separate downloadable files.",
    ],
    timeline: [
      "09:14 Upload received",
      "09:16 OCR + layout analysis complete",
      "09:21 AI translation completed",
      "09:23 Human review requested by user",
    ],
  },
  {
    id: "TR-1041",
    fileName: "Partner_Onboarding_Guide.docx",
    sourceLanguage: "Korean",
    targetLanguage: "English",
    uploadedAt: "Apr 16, 2026 - 18:30",
    pages: 12,
    size: "1.9 MB",
    progress: 100,
    aiScore: "96/100",
    reviewStatus: "Edited by admin",
    deliveryStatus: "Delivered",
    stages: [
      {
        label: "File uploaded",
        detail: "Document styles detected and mapped.",
        state: "done",
      },
      {
        label: "AI translation finished",
        detail: "All sections translated with glossary support.",
        state: "done",
      },
      {
        label: "Admin editing complete",
        detail: "Formatting and tone revised for onboarding use.",
        state: "done",
      },
      {
        label: "Final package delivery",
        detail: "Ready to download anytime from archive.",
        state: "done",
      },
    ],
    aiPreview: [
      "AI version translated task steps accurately and retained callout boxes from the original guide.",
    ],
    editedPreview: [
      "Admin version improved instruction clarity, simplified UI labels, and corrected partner-facing terminology.",
    ],
    timeline: [
      "18:30 Upload received",
      "18:36 AI translation completed",
      "18:49 Admin review finished",
      "18:51 Download package generated",
    ],
  },
  {
    id: "TR-1040",
    fileName: "Mobile_App_Strings.xlsx",
    sourceLanguage: "Japanese",
    targetLanguage: "Mongolian",
    uploadedAt: "Apr 16, 2026 - 14:12",
    pages: 6,
    size: "860 KB",
    progress: 68,
    aiScore: "89/100",
    reviewStatus: "Ready to download",
    deliveryStatus: "Translating",
    stages: [
      {
        label: "File uploaded",
        detail: "Spreadsheet cells were segmented by product area.",
        state: "done",
      },
      {
        label: "AI translation running",
        detail: "UI strings are being checked for character limits.",
        state: "active",
      },
      {
        label: "Human review request",
        detail: "Optional after AI delivery.",
        state: "pending",
      },
      {
        label: "Final package delivery",
        detail: "XLSX + CSV export will be generated.",
        state: "pending",
      },
    ],
    aiPreview: [
      "Short interface strings are being translated with character-length limits for buttons and navigation labels.",
    ],
    editedPreview: [
      "No admin edits yet. If you request review, edited strings will appear here as a separate version.",
    ],
    timeline: [
      "14:12 Upload received",
      "14:14 Translation memory loaded",
      "14:17 AI batch processing started",
    ],
  },
];

export const archiveFiles = [
  {
    fileName: "Brand_Glossary_v5.xlsx",
    type: "Reference glossary",
    updatedAt: "Apr 15, 2026",
    status: "Pinned for future jobs",
  },
  {
    fileName: "Customer_FAQ_Reviewed.docx",
    type: "Final reviewed file",
    updatedAt: "Apr 14, 2026",
    status: "Downloaded twice",
  },
  {
    fileName: "Press_Release_AI_Draft.docx",
    type: "AI-only output",
    updatedAt: "Apr 12, 2026",
    status: "Stored in archive",
  },
] as const;

export const adminSummaryStats = [
  { value: "14", label: "files in queue", hint: "Across 7 active users." },
  { value: "05", label: "needs correction now", hint: "Requested human review from users." },
  { value: "37 min", label: "avg review SLA", hint: "From request to corrected delivery." },
  { value: "99.1%", label: "delivery accuracy", hint: "Based on reviewer QA checks." },
] as const;

export const adminQueue = [
  {
    ticket: "RV-2201",
    user: "S. Munkhzul",
    company: "BluePeak Capital",
    fileName: "Annual_Report_2026.pdf",
    languagePair: "EN -> MN",
    requestedAt: "09:23",
    priority: "High",
    note: "Please soften investor tone and verify footnotes.",
  },
  {
    ticket: "RV-2200",
    user: "A. Tuvshin",
    company: "Nomad Commerce",
    fileName: "Mobile_App_Strings.xlsx",
    languagePair: "JP -> MN",
    requestedAt: "08:51",
    priority: "Medium",
    note: "Need UI-safe wording for onboarding and subscription flows.",
  },
  {
    ticket: "RV-2199",
    user: "B. Enkhjin",
    company: "Steppe Health",
    fileName: "Patient_Consent_Form.docx",
    languagePair: "EN -> MN",
    requestedAt: "08:14",
    priority: "High",
    note: "Legal tone and medical terminology must stay precise.",
  },
] as const;

export const adminActivity = [
  "BluePeak Capital requested human review for Annual_Report_2026.pdf.",
  "Steppe Health accepted AI translation for two policy files without edits.",
  "Nomad Commerce uploaded a new batch of app strings with glossary memory attached.",
  "Final reviewed package was delivered to Partner_Onboarding_Guide.docx.",
] as const;

export const adminComparison = {
  ai: [
    "AI version preserves the original report structure and tables, but investor-facing phrases are translated too literally in several summary sections.",
    "Footnotes are complete, yet two market-risk paragraphs need softer phrasing to match formal financial communication.",
    "Named entities, numbers, and section titles are already consistent with the uploaded glossary.",
  ],
  edited: [
    "Reviewed version refines the executive summary, softens risk statements, and standardizes repeated financial terminology for native readability.",
    "Footnotes were tightened, table headings were shortened, and formatting was adjusted so the final PDF export remains compact.",
    "The corrected file is now ready to publish separately from the raw AI version in the user workspace.",
  ],
  checklist: [
    "Tone aligned with investor and board communication",
    "Financial glossary terms normalized",
    "Tables and footnotes checked against source layout",
    "Final delivery package marked as reviewed",
  ],
} as const;

export const uploadTableRows = [
  {
    fileName: "Annual_Report_2026.pdf",
    user: "S. Munkhzul",
    stage: "Human review",
    aiVersion: "Available",
    editedVersion: "In progress",
  },
  {
    fileName: "Mobile_App_Strings.xlsx",
    user: "A. Tuvshin",
    stage: "AI translating",
    aiVersion: "68%",
    editedVersion: "Not started",
  },
  {
    fileName: "Partner_Onboarding_Guide.docx",
    user: "K. Enkhtsetseg",
    stage: "Delivered",
    aiVersion: "Stored",
    editedVersion: "Stored",
  },
  {
    fileName: "Patient_Consent_Form.docx",
    user: "B. Enkhjin",
    stage: "Queued",
    aiVersion: "Available",
    editedVersion: "Waiting",
  },
] as const;
