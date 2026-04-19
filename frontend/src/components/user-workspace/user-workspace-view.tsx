"use client";

import { Upload } from "lucide-react";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

import { ArchivePanel } from "./archive-panel";
import { getUserSidebarItems, type UserSection } from "./constants";
import { HelpPanel } from "./help-panel";
import { LibraryPanel } from "./library-panel";
import { UserSidebarCard } from "./sidebar-card";
import { UploadPanel } from "./upload-panel";
import { useUserWorkspace } from "./use-user-workspace";
import { UserAuthCard } from "./auth-card";
import { VersionsPanel } from "./versions-panel";

export function UserWorkspaceView() {
  const workspace = useUserWorkspace();
  const sidebarItems = getUserSidebarItems(workspace.jobs);

  return (
    <DashboardShell
      activeView="user"
      sidebar={
        <DashboardSidebar
          eyebrow="User panel"
          title="Translation hub"
          description="Upload source files, generate AI drafts, request review, and download every version from one place."
          groups={[{ title: undefined, items: sidebarItems }]}
          activeItem={workspace.activeSection}
          onSelect={(id) => workspace.setActiveSection(id as UserSection)}
          primaryAction={{ id: "upload", label: "New translation", icon: Upload }}
        >
          <UserSidebarCard jobs={workspace.jobs} session={workspace.session} onSignOut={workspace.handleSignOut} />
        </DashboardSidebar>
      }
    >
      {!workspace.session ? (
        <UserAuthCard
          mode={workspace.authMode}
          loading={workspace.authLoading}
          error={workspace.authError}
          onModeChange={workspace.setAuthMode}
          onSubmit={workspace.handleAuthSubmit}
        />
      ) : (
        <>
          {workspace.feedback ? (
            <div className="mb-6 rounded-[1.5rem] border border-foreground/10 bg-background/70 px-5 py-4 text-sm text-muted-foreground">
              {workspace.feedback}
            </div>
          ) : null}
          {workspace.activeSection === "upload" ? (
            <UploadPanel
              session={workspace.session}
              onCreated={async (jobId) => {
                await workspace.refreshJobs(workspace.session!.id);
                workspace.setSelectedJobId(jobId);
                workspace.setActiveSection("library");
              }}
              onFeedback={workspace.setFeedback}
            />
          ) : null}
          {workspace.activeSection === "library" ? (
            <LibraryPanel jobs={workspace.jobs} selectedJobId={workspace.selectedJob?._id ?? null} loading={workspace.loadingJobs} onPreview={(jobId) => { workspace.setSelectedJobId(jobId); workspace.setActiveSection("versions"); }} onRequestReview={workspace.handleRequestReview} />
          ) : null}
          {workspace.activeSection === "versions" ? <VersionsPanel job={workspace.selectedJob} /> : null}
          {workspace.activeSection === "archive" ? <ArchivePanel jobs={workspace.jobs} /> : null}
          {workspace.activeSection === "help" ? <HelpPanel /> : null}
        </>
      )}
    </DashboardShell>
  );
}
