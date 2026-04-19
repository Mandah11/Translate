"use client";

import { assetUrl, type TranslationJob } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { DownloadLinkButton } from "./download-link-button";

export function VersionsPanel({ job }: { job: TranslationJob | null }) {
  if (!job) {
    return (
      <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
        <CardContent className="p-8 text-sm text-muted-foreground">
          Select a job from the library to compare AI and reviewed versions.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">AI vs reviewed output</Badge>
        <CardTitle className="font-display text-3xl tracking-tight">{job.originalFileName}</CardTitle>
        <CardDescription className="text-base">Compare the generated draft with the final reviewed delivery for the selected translation job.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <VersionCard title="AI translated file" description="Generated draft stored by the backend after upload." content={job.translatedText || "AI draft not generated yet."} href={assetUrl(job.aiTranslatedFileUrl)} />
        <VersionCard title="Reviewed file" description="Final reviewed output returned by admin." content={job.adminNote || "No reviewed version yet."} href={assetUrl(job.reviewedFileUrl)} />
      </CardContent>
    </Card>
  );
}

function VersionCard({
  title,
  description,
  content,
  href,
}: {
  title: string;
  description: string;
  content: string;
  href: string | null;
}) {
  return (
    <div className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <DownloadLinkButton href={href} label="Download" />
      </div>
      <div className="rounded-2xl border border-foreground/10 bg-muted/30 p-4 text-sm leading-relaxed text-muted-foreground">
        {content}
      </div>
    </div>
  );
}
