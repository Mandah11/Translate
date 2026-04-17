import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

type DashboardShellProps = {
  activeView: "user" | "admin";
  sidebar: ReactNode;
  children: ReactNode;
};

export function DashboardShell({
  activeView,
  sidebar,
  children,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fdfcff_0%,#faf8ff_100%)] text-foreground">
      <div className="mx-auto max-w-[1800px] lg:flex">
        <div className="shrink-0 lg:min-h-screen lg:w-[320px] lg:border-r lg:border-foreground/10">
          {sidebar}
        </div>

        <main className="flex-1 px-5 py-6 lg:px-10 lg:py-8">
          <div className="mb-8 flex flex-col gap-4 border-b border-foreground/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="group inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/15 bg-background">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-2xl leading-none tracking-tight">
                    Optimus Translate
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    Human + AI delivery
                  </p>
                </div>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                variant={activeView === "user" ? "default" : "outline"}
                className={`rounded-full px-5 ${activeView === "user" ? "bg-foreground text-background hover:bg-foreground/90" : "border-foreground/15 bg-background"}`}
              >
                <Link href="/user">User workspace</Link>
              </Button>
              <Button
                asChild
                variant={activeView === "admin" ? "default" : "outline"}
                className={`rounded-full px-5 ${activeView === "admin" ? "bg-foreground text-background hover:bg-foreground/90" : "border-foreground/15 bg-background"}`}
              >
                <Link href="/admin">Admin desk</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="rounded-full px-4 text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
              >
                <Link href="/">
                  Back to landing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}
