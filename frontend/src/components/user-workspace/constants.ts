import type { SidebarItem } from "@/components/dashboard/dashboard-sidebar";
import type { TranslationJob } from "@/lib/api";
import { FileClock, FolderArchive, Languages, LibraryBig, Upload } from "lucide-react";

export const USER_STORAGE_KEY = "translate-user-session";

export const reviewBadgeStyles = {
  uploaded: "border-amber-500/30 bg-amber-500/10 text-amber-700",
  translating: "border-sky-500/30 bg-sky-500/10 text-sky-700",
  translated: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700",
  review_requested: "border-orange-500/30 bg-orange-500/10 text-orange-700",
  reviewed: "border-foreground/15 bg-foreground text-background",
} as const;

export type UserSection = "upload" | "library" | "versions" | "archive" | "help";

export function getUserSidebarItems(jobs: TranslationJob[]): SidebarItem[] {
  return [
    { id: "upload", label: "Upload file", icon: Upload, meta: "Start" },
    { id: "library", label: "File library", icon: FolderArchive, meta: `${jobs.length}` },
    {
      id: "versions",
      label: "Versions",
      icon: Languages,
      meta: `${jobs.filter((job) => job.aiTranslatedFileUrl).length}`,
    },
    {
      id: "archive",
      label: "Archive",
      icon: LibraryBig,
      meta: `${jobs.filter((job) => job.status === "reviewed").length}`,
    },
    { id: "help", label: "Help", icon: FileClock },
  ];
}
