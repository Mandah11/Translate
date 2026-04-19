"use client";

import { Clock3, LogOut } from "lucide-react";

import type { TranslationJob, UserSession } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function UserSidebarCard({
  jobs,
  session,
  onSignOut,
}: {
  jobs: TranslationJob[];
  session: UserSession | null;
  onSignOut: () => void;
}) {
  return (
    <Card className="rounded-[1.5rem] border-foreground/10 bg-background shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
      <CardContent className="space-y-4 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted/40 text-foreground">
            <Clock3 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold">{jobs.length}</p>
            <p className="text-xs text-muted-foreground">tracked jobs in your workspace</p>
          </div>
        </div>
        {session ? (
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">{session.fullName}</p>
            <p>{session.email}</p>
            <Button variant="outline" onClick={onSignOut} className="mt-2 w-full rounded-[1.25rem] border-foreground/15">
              Sign out
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Demo user: `user@translate.test` / `user123456`</p>
        )}
      </CardContent>
    </Card>
  );
}
