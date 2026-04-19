"use client";

import { Clock3, FileText, Languages } from "lucide-react";

import { assetUrl, formatDateTime, type TranslationJob } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { reviewBadgeStyles } from "./constants";
import { DownloadLinkButton } from "./download-link-button";

export function LibraryPanel({
  jobs,
  selectedJobId,
  loading,
  onPreview,
  onRequestReview,
}: {
  jobs: TranslationJob[];
  selectedJobId: string | null;
  loading: boolean;
  onPreview: (jobId: string) => void;
  onRequestReview: (jobId: string) => Promise<void>;
}) {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">File library</Badge>
        <CardTitle className="font-display text-3xl tracking-tight">Live jobs from the API</CardTitle>
        <CardDescription className="text-base">Every card below is loaded from the backend, not from mock data.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {loading ? <p className="text-sm text-muted-foreground">Loading jobs...</p> : null}
        {!loading && jobs.length === 0 ? <p className="text-sm text-muted-foreground">No jobs yet. Upload your first file from the left menu.</p> : null}
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} selected={selectedJobId === job._id} onPreview={onPreview} onRequestReview={onRequestReview} />
        ))}
      </CardContent>
    </Card>
  );
}

function JobCard({
  job,
  selected,
  onPreview,
  onRequestReview,
}: {
  job: TranslationJob;
  selected: boolean;
  onPreview: (jobId: string) => void;
  onRequestReview: (jobId: string) => void;
}) {
  const progress =
    job.status === "reviewed" ? 100 :
    job.status === "review_requested" ? 85 :
    job.status === "translated" ? 65 :
    job.status === "translating" ? 40 : 15;

  return (
    <div className={`rounded-[1.5rem] border p-5 ${selected ? "border-foreground/20 bg-background" : "border-foreground/10 bg-background/70"}`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xl font-medium">{job.originalFileName}</p>
            <Badge variant="outline" className="rounded-full border-foreground/15">{job._id.slice(-6).toUpperCase()}</Badge>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Languages className="h-4 w-4" />{job.sourceLanguage} to {job.targetLanguage}</span>
            <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" />{formatDateTime(job.createdAt)}</span>
            <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4" />{job.translationNote || "No note attached"}</span>
          </div>
        </div>
        <Badge className={`rounded-full px-3 py-1 ${reviewBadgeStyles[job.status]}`}>{job.status.replace("_", " ")}</Badge>
      </div>
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span>{job.status.replace("_", " ")}</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-foreground/10" />
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button variant="outline" className="rounded-full border-foreground/15" onClick={() => onPreview(job._id)}>Preview versions</Button>
        <Button
          variant="outline"
          className="rounded-full border-foreground/15"
          onClick={() => onRequestReview(job._id)}
          disabled={job.status === "review_requested" || job.status === "reviewed"}
        >
          Request human review
        </Button>
        <DownloadLinkButton href={assetUrl(job.aiTranslatedFileUrl)} label="Download AI draft" />
        {job.reviewedFileUrl ? <DownloadLinkButton href={assetUrl(job.reviewedFileUrl)} label="Download reviewed file" /> : null}
      </div>
    </div>
  );
}
