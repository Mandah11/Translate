"use client";

import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { TranslationJob } from "@/lib/api";

export function AdminSidebarCard({
  jobs,
  sessionActive,
  onSignOut,
}: {
  jobs: TranslationJob[];
  sessionActive: boolean;
  onSignOut: () => void;
}) {
  return (
    <Card className="rounded-[1.5rem] border-foreground/10 bg-background shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
      <CardContent className="space-y-4 p-4">
        <p className="text-sm font-medium">Queue breakdown</p>
        <div className="grid gap-3">
          <QueueBadge label="Needs review" count={jobs.filter((item) => item.status === "review_requested").length} tone="rose" />
          <QueueBadge label="AI ready" count={jobs.filter((item) => item.status === "translated").length} tone="amber" />
        </div>
        {sessionActive ? (
          <Button variant="outline" onClick={onSignOut} className="w-full rounded-[1.25rem] border-foreground/15">
            Sign out
            <LogOut className="h-4 w-4" />
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}

function QueueBadge({
  label,
  count,
  tone,
}: {
  label: string;
  count: number;
  tone: "rose" | "amber";
}) {
  const toneClass =
    tone === "rose"
      ? "border-rose-500/20 bg-rose-500/5 text-rose-700"
      : "border-amber-500/20 bg-amber-500/5 text-amber-700";

  return (
    <div className={`rounded-[1rem] border p-3 ${toneClass}`}>
      <p className="text-xs uppercase tracking-[0.18em]">{label}</p>
      <p className="mt-2 text-2xl font-medium">{count}</p>
    </div>
  );
}
