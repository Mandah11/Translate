"use client";

import { useState } from "react";
import {
  Bot,
  CheckCircle2,
  Clock3,
  Download,
  FileClock,
  FileText,
  FolderArchive,
  Languages,
  LibraryBig,
  Sparkles,
  Upload,
} from "lucide-react";

import {
  archiveFiles,
  translationJobs,
} from "@/components/dashboard/dashboard-data";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import {
  DashboardSidebar,
  type SidebarItem,
} from "@/components/dashboard/dashboard-sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const featuredJob = translationJobs[0];

const stageStyles = {
  done: "border-transparent bg-foreground text-background",
  active: "border-foreground/20 bg-background text-foreground",
  pending: "border-foreground/10 bg-muted/40 text-muted-foreground",
} as const;

const reviewBadgeStyles = {
  "Needs review": "border-amber-500/30 bg-amber-500/10 text-amber-700",
  "Edited by admin": "border-emerald-500/30 bg-emerald-500/10 text-emerald-700",
  "Ready to download": "border-sky-500/30 bg-sky-500/10 text-sky-700",
} as const;

const userSidebarItems: SidebarItem[] = [
  {
    id: "upload",
    label: "Upload file",
    icon: Upload,
    meta: "Start",
  },
  {
    id: "library",
    label: "File library",
    icon: FolderArchive,
    meta: `${translationJobs.length}`,
  },
  {
    id: "versions",
    label: "Reviewed files",
    icon: Languages,
    meta: "2",
  },
  {
    id: "archive",
    label: "Archive",
    icon: LibraryBig,
  },
  {
    id: "help",
    label: "Help",
    icon: FileClock,
  },
];

type UserSection = "upload" | "library" | "versions" | "archive" | "help";

export default function UserWorkspacePage() {
  const [activeSection, setActiveSection] = useState<UserSection>("library");

  const sidebarGroups = [
    {
      title: undefined,
      items: userSidebarItems,
    },
  ] as const;

  return (
    <DashboardShell
      activeView="user"
      sidebar={
        <DashboardSidebar
          eyebrow="User panel"
          title="Translation hub"
          description="Main actions and file history are grouped in a simple left menu."
          groups={sidebarGroups}
          activeItem={activeSection}
          onSelect={(id) => setActiveSection(id as UserSection)}
          primaryAction={{
            id: "upload",
            label: "Upload file",
            icon: Upload,
          }}
        >
          <div className="rounded-[1.5rem] border border-foreground/10 bg-background p-4 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted/40 text-foreground">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold">00:15:00</p>
                <p className="text-xs text-muted-foreground">
                  Remaining fast-processing time
                </p>
              </div>
            </div>
            <Button className="mt-4 h-12 w-full rounded-[1.25rem] bg-foreground text-background hover:bg-foreground/90">
              Extend access
            </Button>
          </div>
        </DashboardSidebar>
      }
    >
      {activeSection === "upload" ? <UploadPanel /> : null}
      {activeSection === "library" ? <LibraryPanel /> : null}
      {activeSection === "versions" ? <VersionsPanel /> : null}
      {activeSection === "archive" ? <ArchivePanel /> : null}
      {activeSection === "help" ? <HelpPanel /> : null}
    </DashboardShell>
  );
}

function UploadPanel() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
        <CardHeader className="gap-3">
          <Badge
            variant="outline"
            className="rounded-full border-foreground/15 px-3 py-1"
          >
            Upload + AI translation
          </Badge>
          <CardTitle className="font-display text-3xl tracking-tight">
            Translation launchpad
          </CardTitle>
          <CardDescription className="max-w-2xl text-base leading-relaxed">
            Drag a file in, choose your language direction, and send optional
            notes. When translation finishes, the file stays saved in your
            archive automatically.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-[1.75rem] border border-dashed border-foreground/20 bg-[linear-gradient(135deg,rgba(10,10,10,0.03),transparent_55%)] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-background">
                  <Upload className="h-6 w-6" />
                </div>
                <p className="text-xl font-medium">
                  Drop file here or browse your device
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Supports PDF, DOCX, XLSX, PPTX, and subtitle files.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-foreground/10 bg-background px-4 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    Source
                  </p>
                  <p className="mt-2 text-lg font-medium">English</p>
                </div>
                <div className="rounded-2xl border border-foreground/10 bg-background px-4 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    Target
                  </p>
                  <p className="mt-2 text-lg font-medium">Mongolian</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="file-name">
                File name
              </label>
              <Input id="file-name" defaultValue="Annual_Report_2026.pdf" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="glossary">
                Glossary / style memory
              </label>
              <Input id="glossary" defaultValue="Brand_Glossary_v5.xlsx attached" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="translation-note">
              Translation note
            </label>
            <Textarea
              id="translation-note"
              defaultValue="Please keep investor-facing tone formal. If anything sounds too literal, I may request admin review after the AI draft is ready."
              className="min-h-28"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 rounded-full bg-foreground text-background hover:bg-foreground/90">
              Start AI translation
              <Sparkles className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full border-foreground/15"
            >
              Save as draft
            </Button>
          </div>
        </CardContent>
      </Card>

      <CurrentJobCard />
    </div>
  );
}

function LibraryPanel() {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge
          variant="outline"
          className="rounded-full border-foreground/15 px-3 py-1"
        >
          File library
        </Badge>
        <CardTitle className="font-display text-3xl tracking-tight">
          Every translation stays visible
        </CardTitle>
        <CardDescription className="text-base">
          Clicking this menu shows only your translation library, not the full page.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {translationJobs.map((job) => (
          <div
            key={job.id}
            className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xl font-medium">{job.fileName}</p>
                  <Badge
                    variant="outline"
                    className="rounded-full border-foreground/15"
                  >
                    {job.id}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Languages className="h-4 w-4" />
                    {job.sourceLanguage} to {job.targetLanguage}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {job.uploadedAt}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {job.pages} pages
                  </span>
                </div>
              </div>

              <Badge
                className={`rounded-full px-3 py-1 ${reviewBadgeStyles[job.reviewStatus]}`}
              >
                {job.reviewStatus}
              </Badge>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>{job.deliveryStatus}</span>
                <span>{job.progress}%</span>
              </div>
              <Progress value={job.progress} className="h-2 bg-foreground/10" />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="outline" className="rounded-full border-foreground/15">
                Preview versions
              </Button>
              <Button variant="outline" className="rounded-full border-foreground/15">
                Request human review
              </Button>
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                Download package
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function VersionsPanel() {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge
          variant="outline"
          className="rounded-full border-foreground/15 px-3 py-1"
        >
          AI output vs reviewed output
        </Badge>
        <CardTitle className="font-display text-3xl tracking-tight">
          Separate versions for users
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">AI translated file</p>
                <p className="text-sm text-muted-foreground">
                  Fast draft for instant preview
                </p>
              </div>
            </div>
            <Button variant="outline" className="rounded-full border-foreground/15">
              Preview AI file
            </Button>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            {featuredJob.aiPreview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/15 bg-background">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Admin reviewed file</p>
                <p className="text-sm text-muted-foreground">
                  Corrected version delivered separately
                </p>
              </div>
            </div>
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              Download reviewed file
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            {featuredJob.editedPreview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ArchivePanel() {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge
          variant="outline"
          className="rounded-full border-foreground/15 px-3 py-1"
        >
          Saved archive
        </Badge>
        <CardTitle className="font-display text-3xl tracking-tight">
          Your uploaded file history
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {archiveFiles.map((item, index) => (
          <div key={item.fileName}>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/10 bg-muted/40">
                <FolderArchive className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{item.fileName}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.type}</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>{item.updatedAt}</p>
                <p className="mt-1">{item.status}</p>
              </div>
            </div>
            {index < archiveFiles.length - 1 ? <Separator className="mt-4" /> : null}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function HelpPanel() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
      <CurrentJobCard />
      <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
        <CardHeader className="gap-3">
          <Badge
            variant="outline"
            className="rounded-full border-foreground/15 px-3 py-1"
          >
            Quick help
          </Badge>
          <CardTitle className="font-display text-3xl tracking-tight">
            What happens after upload?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>1. Your file is uploaded and stored in your workspace.</p>
          <p>2. AI translation runs and creates the first output.</p>
          <p>3. If you request review, admin gets the task instantly.</p>
          <p>4. AI and reviewed outputs stay visible as separate files.</p>
        </CardContent>
      </Card>
    </div>
  );
}

function CurrentJobCard() {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge
          variant="outline"
          className="rounded-full border-foreground/15 px-3 py-1"
        >
          Current workflow
        </Badge>
        <CardTitle className="font-display text-3xl tracking-tight">
          {featuredJob.fileName}
        </CardTitle>
        <CardDescription className="text-base">
          Your latest file is translated by AI and waiting for admin correction.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-[1.5rem] border border-foreground/10 bg-muted/30 p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Delivery status
              </p>
              <p className="mt-2 text-xl font-medium">{featuredJob.deliveryStatus}</p>
            </div>
            <Badge
              className={`rounded-full px-3 py-1 ${reviewBadgeStyles[featuredJob.reviewStatus]}`}
            >
              {featuredJob.reviewStatus}
            </Badge>
          </div>
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{featuredJob.progress}%</span>
            </div>
            <Progress value={featuredJob.progress} className="h-2.5 bg-foreground/10" />
          </div>
        </div>

        <div className="space-y-3">
          {featuredJob.stages.map((stage) => (
            <div
              key={stage.label}
              className="flex items-start gap-4 rounded-[1.25rem] border border-foreground/10 bg-background/70 p-4"
            >
              <div
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${stageStyles[stage.state]}`}
              >
                {stage.state === "done"
                  ? "OK"
                  : stage.state === "active"
                    ? "Now"
                    : "..."}
              </div>
              <div>
                <p className="font-medium">{stage.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {stage.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
