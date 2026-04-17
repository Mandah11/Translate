"use client";

import { useState } from "react";
import {
  Bot,
  CheckCircle2,
  Clock3,
  FileText,
  Files,
  LayoutList,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";

import {
  adminActivity,
  adminComparison,
  adminQueue,
  uploadTableRows,
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

const priorityStyles = {
  High: "border-rose-500/30 bg-rose-500/10 text-rose-700",
  Medium: "border-amber-500/30 bg-amber-500/10 text-amber-700",
} as const;

const adminSidebarItems: SidebarItem[] = [
  {
    id: "reviews",
    label: "Incoming reviews",
    icon: LayoutList,
    meta: `${adminQueue.length}`,
  },
  {
    id: "ai",
    label: "AI preview",
    icon: Bot,
    meta: "AI",
  },
  {
    id: "qa",
    label: "Correction and QA",
    icon: ShieldCheck,
  },
  {
    id: "uploads",
    label: "All uploads",
    icon: Files,
    meta: `${uploadTableRows.length}`,
  },
  {
    id: "activity",
    label: "Activity",
    icon: MessageSquare,
  },
];

type AdminSection = "reviews" | "ai" | "qa" | "uploads" | "activity";

export default function AdminDeskPage() {
  const [activeSection, setActiveSection] = useState<AdminSection>("reviews");

  const sidebarGroups = [
    {
      title: undefined,
      items: adminSidebarItems,
    },
  ] as const;

  return (
    <DashboardShell
      activeView="admin"
      sidebar={
        <DashboardSidebar
          eyebrow="Admin panel"
          title="Review menu"
          description="Review, uploads, and activity are grouped in a clean left menu."
          groups={sidebarGroups}
          activeItem={activeSection}
          onSelect={(id) => setActiveSection(id as AdminSection)}
          primaryAction={{
            id: "reviews",
            label: "Incoming reviews",
            icon: LayoutList,
          }}
        >
          <div className="rounded-[1.5rem] border border-foreground/10 bg-background p-4 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
            <p className="text-sm font-medium">Queue breakdown</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-[1rem] border border-rose-500/20 bg-rose-500/5 p-3">
                <p className="text-xs uppercase tracking-[0.18em] text-rose-700">
                  High priority
                </p>
                <p className="mt-2 text-2xl font-medium">
                  {adminQueue.filter((item) => item.priority === "High").length}
                </p>
              </div>
              <div className="rounded-[1rem] border border-amber-500/20 bg-amber-500/5 p-3">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-700">
                  Medium priority
                </p>
                <p className="mt-2 text-2xl font-medium">
                  {adminQueue.filter((item) => item.priority === "Medium").length}
                </p>
              </div>
            </div>
          </div>
        </DashboardSidebar>
      }
    >
      {activeSection === "reviews" ? <ReviewsPanel /> : null}
      {activeSection === "ai" ? <AiPreviewPanel /> : null}
      {activeSection === "qa" ? <QaPanel /> : null}
      {activeSection === "uploads" ? <UploadsPanel /> : null}
      {activeSection === "activity" ? <ActivityPanel /> : null}
    </DashboardShell>
  );
}

function ReviewsPanel() {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge
          variant="outline"
          className="rounded-full border-foreground/15 px-3 py-1"
        >
          Human review queue
        </Badge>
        <CardTitle className="font-display text-3xl tracking-tight">
          Requests from users
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {adminQueue.map((item) => (
          <div
            key={item.ticket}
            className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xl font-medium">{item.fileName}</p>
                  <Badge
                    variant="outline"
                    className="rounded-full border-foreground/15"
                  >
                    {item.ticket}
                  </Badge>
                </div>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {item.user} / {item.company}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    Requested {item.requestedAt}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {item.languagePair}
                  </span>
                </div>
              </div>
              <Badge
                className={`rounded-full px-3 py-1 ${priorityStyles[item.priority]}`}
              >
                {item.priority}
              </Badge>
            </div>

            <div className="mt-4 rounded-2xl border border-foreground/10 bg-muted/30 p-4 text-sm leading-relaxed text-muted-foreground">
              {item.note}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function AiPreviewPanel() {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge
          variant="outline"
          className="rounded-full border-foreground/15 px-3 py-1"
        >
          Active review
        </Badge>
        <CardTitle className="font-display text-3xl tracking-tight">
          AI draft and admin correction
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">AI translated version</p>
              <p className="text-sm text-muted-foreground">
                Read-only reference visible to admin
              </p>
            </div>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            {adminComparison.ai.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/15 bg-background">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Corrected admin version</p>
              <p className="text-sm text-muted-foreground">
                Final file returned as a separate output
              </p>
            </div>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            {adminComparison.edited.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function QaPanel() {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge
          variant="outline"
          className="rounded-full border-foreground/15 px-3 py-1"
        >
          Review controls
        </Badge>
        <CardTitle className="font-display text-3xl tracking-tight">
          Correction notes and QA
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.5rem] border border-foreground/10 bg-muted/30 p-5">
          <p className="mb-4 text-sm font-medium">Release checklist</p>
          <div className="space-y-3">
            {adminComparison.checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <span className="leading-relaxed text-muted-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>Review completion</span>
              <span>82%</span>
            </div>
            <Progress value={82} className="h-2.5 bg-foreground/10" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="mb-2 text-sm font-medium">Admin correction note</p>
            <Textarea
              className="min-h-32"
              defaultValue="Adjusted investor-facing tone, normalized financial glossary terms, shortened long table headings, and verified footnotes against the source file. The reviewed version is ready to send back to the user as a separate downloadable file."
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              Save reviewed version
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-foreground/15"
            >
              Return to user
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function UploadsPanel() {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge
          variant="outline"
          className="rounded-full border-foreground/15 px-3 py-1"
        >
          All uploads
        </Badge>
        <CardTitle className="font-display text-3xl tracking-tight">
          Files visible from user side
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>File</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Stage</TableHead>
              <TableHead>AI version</TableHead>
              <TableHead>Reviewed version</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {uploadTableRows.map((row) => (
              <TableRow key={`${row.fileName}-${row.user}`}>
                <TableCell className="font-medium">{row.fileName}</TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.stage}</TableCell>
                <TableCell>{row.aiVersion}</TableCell>
                <TableCell>{row.editedVersion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function ActivityPanel() {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge
          variant="outline"
          className="rounded-full border-foreground/15 px-3 py-1"
        >
          Live activity
        </Badge>
        <CardTitle className="font-display text-3xl tracking-tight">
          Team pulse
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {adminActivity.map((entry) => (
          <div
            key={entry}
            className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                <MessageSquare className="h-4 w-4" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {entry}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
