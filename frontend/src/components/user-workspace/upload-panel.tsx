"use client";

import { LoaderCircle, Sparkles, Upload } from "lucide-react";
import { useState } from "react";

import { type UserSession, translateJob, uploadJob } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function UploadPanel({
  session,
  onCreated,
  onFeedback,
}: {
  session: UserSession;
  onCreated: (jobId: string) => Promise<void>;
  onFeedback: (message: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("No file selected");

  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
        <CardHeader className="gap-3">
          <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">Upload + AI translation</Badge>
          <CardTitle className="font-display text-3xl tracking-tight">Launch a new translation job</CardTitle>
          <CardDescription className="max-w-2xl text-base leading-relaxed">
            Upload the file, attach source text for the current demo translation flow, and create the AI draft right away.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData) => {
              const file = formData.get("originalFile");
              if (!(file instanceof File) || file.size === 0) {
                onFeedback("Please choose a file to upload.");
                return;
              }

              setLoading(true);
              onFeedback("Uploading file and generating AI draft...");
              try {
                const uploadResponse = await uploadJob({
                  userId: session.id,
                  file,
                  sourceLanguage: String(formData.get("sourceLanguage") ?? "auto"),
                  targetLanguage: String(formData.get("targetLanguage") ?? "Mongolian"),
                  sourceText: String(formData.get("sourceText") ?? ""),
                  translationNote: String(formData.get("translationNote") ?? ""),
                });
                const translated = await translateJob({
                  userId: session.id,
                  jobId: uploadResponse.job._id,
                  addWatermark: formData.get("addWatermark") === "on",
                });
                onFeedback(`AI draft ready for ${translated.job.originalFileName}.`);
                await onCreated(translated.job._id);
              } catch (error) {
                onFeedback(error instanceof Error ? error.message : "Upload failed");
              } finally {
                setLoading(false);
              }
            }}
            className="space-y-6"
          >
            <div className="rounded-[1.75rem] border border-dashed border-foreground/20 bg-[linear-gradient(135deg,rgba(10,10,10,0.03),transparent_55%)] p-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-background">
                    {loading ? <LoaderCircle className="h-6 w-6 animate-spin" /> : <Upload className="h-6 w-6" />}
                  </div>
                  <p className="text-xl font-medium">{selectedFileName}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Supported in the backend: PDF, DOCX, XLSX, PPTX, TXT, CSV, SVG, and subtitle files.</p>
                </div>
                <Input name="originalFile" type="file" className="max-w-sm" onChange={(event) => setSelectedFileName(event.currentTarget.files?.[0]?.name ?? "No file selected")} />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Source language" id="sourceLanguage" defaultValue="English" />
              <Field label="Target language" id="targetLanguage" defaultValue="Mongolian" />
            </div>
            <TextBlock id="sourceText" label="Source text for AI draft" required defaultValue="This annual report summarizes revenue growth, product expansion, and regional performance for the last fiscal year." minHeight="min-h-36" />
            <TextBlock id="translationNote" label="Translation note" defaultValue="Keep the investor-facing tone formal and preserve product names in English where needed." minHeight="min-h-28" />
            <label className="flex items-center gap-3 text-sm text-muted-foreground">
              <input type="checkbox" name="addWatermark" className="h-4 w-4" />
              Add translator watermark to the AI draft
            </label>
            <Button className="h-12 rounded-full bg-foreground text-background hover:bg-foreground/90" disabled={loading}>
              {loading ? "Processing..." : "Upload and translate"}
              <Sparkles className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
      <WorkflowCard />
    </div>
  );
}

function Field({ id, label, defaultValue }: { id: string; label: string; defaultValue: string }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium" htmlFor={id}>{label}</label>
      <Input id={id} name={id} defaultValue={defaultValue} />
    </div>
  );
}

function TextBlock({
  id,
  label,
  defaultValue,
  minHeight,
  required,
}: {
  id: string;
  label: string;
  defaultValue: string;
  minHeight: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium" htmlFor={id}>{label}</label>
      <Textarea id={id} name={id} required={required} className={minHeight} defaultValue={defaultValue} />
    </div>
  );
}

function WorkflowCard() {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">Demo workflow</Badge>
        <CardTitle className="font-display text-3xl tracking-tight">What this flow now does</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>1. The file is stored in the backend and attached to your account.</p>
        <p>2. The source text is translated through the API and saved as an AI draft file.</p>
        <p>3. The job appears immediately in the user library and the admin queue when review is requested.</p>
        <p>4. AI and reviewed outputs can be downloaded separately.</p>
      </CardContent>
    </Card>
  );
}
