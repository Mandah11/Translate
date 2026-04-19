import type { TranslationJob } from "@/lib/api";
import type { SidebarItem } from "@/components/dashboard/dashboard-sidebar";
import { Bot, Files, LayoutList, MessageSquare, ShieldCheck } from "lucide-react";

export const ADMIN_STORAGE_KEY = "translate-admin-session";

export const priorityStyles = {
  review_requested: "border-rose-500/30 bg-rose-500/10 text-rose-700",
  translated: "border-amber-500/30 bg-amber-500/10 text-amber-700",
  reviewed: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700",
  uploaded: "border-foreground/15 bg-background text-muted-foreground",
  translating: "border-sky-500/30 bg-sky-500/10 text-sky-700",
} as const;

export type AdminSection = "reviews" | "ai" | "qa" | "uploads" | "activity";

export function getAdminSidebarItems(jobs: TranslationJob[], reviewQueue: TranslationJob[], hasPreview: boolean): SidebarItem[] {
  return [
    { id: "reviews", label: "Incoming reviews", icon: LayoutList, meta: `${reviewQueue.length}` },
    { id: "ai", label: "AI preview", icon: Bot, meta: hasPreview ? "Live" : "None" },
    { id: "qa", label: "Correction and QA", icon: ShieldCheck },
    { id: "uploads", label: "All uploads", icon: Files, meta: `${jobs.length}` },
    { id: "activity", label: "Activity", icon: MessageSquare },
  ];
}
