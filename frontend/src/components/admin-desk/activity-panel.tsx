"use client";

import { MessageSquare } from "lucide-react";

import { formatDateTime, type TranslationJob } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ActivityPanel({ jobs }: { jobs: TranslationJob[] }) {
  const activity = jobs.slice(0, 6).map((job) => {
    const user = typeof job.user === "string" ? job.user : job.user.fullName;
    return `${user} uploaded ${job.originalFileName}. Current stage: ${job.status.replace("_", " ")}. Updated ${formatDateTime(job.updatedAt)}.`;
  });

  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">Live activity</Badge>
        <CardTitle className="font-display text-3xl tracking-tight">Team pulse</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activity.length === 0 ? <p className="text-sm text-muted-foreground">No admin-visible activity yet.</p> : null}
        {activity.map((entry) => (
          <div key={entry} className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                <MessageSquare className="h-4 w-4" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{entry}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
