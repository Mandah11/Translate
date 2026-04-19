"use client";

import { LoaderCircle, ShieldCheck } from "lucide-react";

import { assetUrl, type TranslationJob } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

import { DownloadButton } from "./download-button";

export function QaPanel({
  job,
  loading,
  onSubmit,
}: {
  job: TranslationJob | null;
  loading: boolean;
  onSubmit: (input: { adminNote: string; reviewedText: string }) => Promise<void>;
}) {
  if (!job) {
    return <Card className="rounded-[2rem] border-foreground/10 bg-background/85"><CardContent className="p-8 text-sm text-muted-foreground">Pick a job from the review queue before saving a reviewed file.</CardContent></Card>;
  }

  const reviewCompletion = job.status === "reviewed" ? 100 : job.status === "review_requested" ? 82 : 60;

  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">Review controls</Badge>
        <CardTitle className="font-display text-3xl tracking-tight">Save corrected delivery</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <ChecklistCard progress={reviewCompletion} />
        <form action={(formData) => void onSubmit({ adminNote: String(formData.get("adminNote") ?? ""), reviewedText: String(formData.get("reviewedText") ?? "") })} className="space-y-4">
          <ReviewField name="adminNote" label="Admin correction note" minHeight="min-h-28" defaultValue={job.adminNote || "Adjusted tone, checked glossary consistency, and prepared the final reviewed output for the user."} />
          <ReviewField name="reviewedText" label="Reviewed file contents" minHeight="min-h-40" defaultValue={job.translatedText || job.sourceText} />
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90" disabled={loading}>
              {loading ? <>Saving<LoaderCircle className="h-4 w-4 animate-spin" /></> : "Save reviewed version"}
            </Button>
            <DownloadButton href={assetUrl(job.aiTranslatedFileUrl)} label="Download AI draft" />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function ChecklistCard({ progress }: { progress: number }) {
  const items = [
    "Original file is attached to the job.",
    "AI draft is available for comparison.",
    "Reviewer note will remain visible to the user.",
    "Reviewed file is saved separately from the AI draft.",
  ];
  return (
    <div className="rounded-[1.5rem] border border-foreground/10 bg-muted/30 p-5">
      <p className="mb-4 text-sm font-medium">Release checklist</p>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm">
            <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background"><ShieldCheck className="h-3.5 w-3.5" /></div>
            <span className="leading-relaxed text-muted-foreground">{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm"><span>Review completion</span><span>{progress}%</span></div>
        <Progress value={progress} className="h-2.5 bg-foreground/10" />
      </div>
    </div>
  );
}

function ReviewField({
  name,
  label,
  minHeight,
  defaultValue,
}: {
  name: string;
  label: string;
  minHeight: string;
  defaultValue: string;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium">{label}</p>
      <Textarea name={name} className={minHeight} defaultValue={defaultValue} />
    </div>
  );
}
