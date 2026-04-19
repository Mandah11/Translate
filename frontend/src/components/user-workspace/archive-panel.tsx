"use client";

import { FolderArchive } from "lucide-react";

import { assetUrl, formatDateTime, type TranslationJob } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { DownloadLinkButton } from "./download-link-button";

export function ArchivePanel({ jobs }: { jobs: TranslationJob[] }) {
  const completedJobs = jobs.filter((job) => job.status === "reviewed" || job.status === "translated");

  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">Saved archive</Badge>
        <CardTitle className="font-display text-3xl tracking-tight">Downloadable history</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {completedJobs.length === 0 ? <p className="text-sm text-muted-foreground">Finished jobs will appear here after translation or review completes.</p> : null}
        {completedJobs.map((job, index) => (
          <div key={job._id}>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/10 bg-muted/40">
                <FolderArchive className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{job.originalFileName}</p>
                <p className="mt-1 text-sm text-muted-foreground">{job.status.replace("_", " ")} · {formatDateTime(job.updatedAt)}</p>
              </div>
              <div className="flex flex-wrap justify-end gap-2">
                <DownloadLinkButton href={assetUrl(job.aiTranslatedFileUrl)} label="AI" />
                {job.reviewedFileUrl ? <DownloadLinkButton href={assetUrl(job.reviewedFileUrl)} label="Reviewed" /> : null}
              </div>
            </div>
            {index < completedJobs.length - 1 ? <Separator className="mt-4" /> : null}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
