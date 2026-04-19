"use client";

import type { ReactNode } from "react";
import { Bot, CheckCircle2 } from "lucide-react";

import { assetUrl, type TranslationJob } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { DownloadButton } from "./download-button";

export function AiPreviewPanel({ job }: { job: TranslationJob | null }) {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">Active review</Badge>
        <CardTitle className="font-display text-3xl tracking-tight">AI draft and corrected output</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 lg:grid-cols-2">
        <PreviewBlock icon={<Bot className="h-5 w-5" />} title="AI translated version" description="Read-only AI output stored by the translation endpoint." content={job?.translatedText || "Select a translated job to inspect the AI draft."} href={assetUrl(job?.aiTranslatedFileUrl)} />
        <PreviewBlock icon={<CheckCircle2 className="h-5 w-5" />} title="Corrected admin version" description="Final reviewed file that will be returned to the user." content={job?.adminNote || "No reviewed version has been saved yet."} href={assetUrl(job?.reviewedFileUrl)} />
      </CardContent>
    </Card>
  );
}

function PreviewBlock({
  icon,
  title,
  description,
  content,
  href,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  content: string;
  href: string | null;
}) {
  return (
    <div className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/15 bg-background">{icon}</div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="space-y-3 rounded-2xl border border-foreground/10 bg-muted/30 p-4 text-sm leading-relaxed text-muted-foreground">
        <p>{content}</p>
      </div>
      <div className="mt-4">
        <DownloadButton href={href} label="Download file" />
      </div>
    </div>
  );
}
