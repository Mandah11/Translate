"use client";

import { Clock3, FileText, Users } from "lucide-react";

import { formatDateTime, type TranslationJob } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { priorityStyles } from "./constants";

export function ReviewsPanel({
  jobs,
  loading,
  selectedJobId,
  onSelect,
}: {
  jobs: TranslationJob[];
  loading: boolean;
  selectedJobId: string | null;
  onSelect: (jobId: string) => void;
}) {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">Human review queue</Badge>
        <CardTitle className="font-display text-3xl tracking-tight">Requests from users</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading ? <p className="text-sm text-muted-foreground">Loading review queue...</p> : null}
        {!loading && jobs.length === 0 ? <p className="text-sm text-muted-foreground">No files are waiting for review right now.</p> : null}
        {jobs.map((item) => (
          <ReviewCard key={item._id} item={item} selected={selectedJobId === item._id} onSelect={onSelect} />
        ))}
      </CardContent>
    </Card>
  );
}

function ReviewCard({
  item,
  selected,
  onSelect,
}: {
  item: TranslationJob;
  selected: boolean;
  onSelect: (jobId: string) => void;
}) {
  const user = typeof item.user === "string" ? null : item.user;
  return (
    <button type="button" onClick={() => onSelect(item._id)} className={`w-full rounded-[1.5rem] border p-5 text-left ${selected ? "border-foreground/20 bg-background" : "border-foreground/10 bg-background/70"}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xl font-medium">{item.originalFileName}</p>
            <Badge variant="outline" className="rounded-full border-foreground/15">{item._id.slice(-6).toUpperCase()}</Badge>
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4" />{user?.fullName ?? "Unknown"} / {user?.email ?? "No email"}</span>
            <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" />Requested {formatDateTime(item.updatedAt)}</span>
            <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4" />{item.sourceLanguage} to {item.targetLanguage}</span>
          </div>
        </div>
        <Badge className={`rounded-full px-3 py-1 ${priorityStyles[item.status]}`}>{item.status.replace("_", " ")}</Badge>
      </div>
      <div className="mt-4 rounded-2xl border border-foreground/10 bg-muted/30 p-4 text-sm leading-relaxed text-muted-foreground">
        {item.translationNote || "No user note attached to this translation job."}
      </div>
    </button>
  );
}
