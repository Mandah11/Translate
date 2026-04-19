"use client";

import { LayoutList } from "lucide-react";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

import { ActivityPanel } from "./activity-panel";
import { AdminLoginCard } from "./login-card";
import { AdminSidebarCard } from "./sidebar-card";
import { AiPreviewPanel } from "./ai-preview-panel";
import { getAdminSidebarItems, type AdminSection } from "./constants";
import { QaPanel } from "./qa-panel";
import { ReviewsPanel } from "./reviews-panel";
import { UploadsPanel } from "./uploads-panel";
import { useAdminDesk } from "./use-admin-desk";

export function AdminDeskView() {
  const desk = useAdminDesk();
  const sidebarItems = getAdminSidebarItems(desk.jobs, desk.reviewQueue, Boolean(desk.selectedJob?.translatedText));

  return (
    <DashboardShell
      activeView="admin"
      sidebar={
        <DashboardSidebar
          eyebrow="Admin panel"
          title="Review desk"
          description="Monitor the queue, compare AI drafts, save reviewed versions, and keep every delivery visible to the user."
          groups={[{ title: undefined, items: sidebarItems }]}
          activeItem={desk.activeSection}
          onSelect={(id) => desk.setActiveSection(id as AdminSection)}
          primaryAction={{ id: "reviews", label: "Review queue", icon: LayoutList }}
        >
          <AdminSidebarCard jobs={desk.jobs} sessionActive={Boolean(desk.session)} onSignOut={desk.handleSignOut} />
        </DashboardSidebar>
      }
    >
      {!desk.session ? (
        <AdminLoginCard loading={desk.authLoading} error={desk.error} onSubmit={desk.handleLogin} />
      ) : (
        <>
          {desk.feedback ? <div className="mb-6 rounded-[1.5rem] border border-foreground/10 bg-background/70 px-5 py-4 text-sm text-muted-foreground">{desk.feedback}</div> : null}
          {desk.activeSection === "reviews" ? <ReviewsPanel jobs={desk.reviewQueue} loading={desk.loadingJobs} selectedJobId={desk.selectedJob?._id ?? null} onSelect={desk.setSelectedJobId} /> : null}
          {desk.activeSection === "ai" ? <AiPreviewPanel job={desk.selectedJob} /> : null}
          {desk.activeSection === "qa" ? <QaPanel job={desk.selectedJob} loading={desk.savingReview} onSubmit={desk.handleReviewSubmit} /> : null}
          {desk.activeSection === "uploads" ? <UploadsPanel jobs={desk.jobs} /> : null}
          {desk.activeSection === "activity" ? <ActivityPanel jobs={desk.jobs} /> : null}
        </>
      )}
    </DashboardShell>
  );
}
