"use client";

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export type SidebarItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  meta?: string;
  hint?: string;
};

type SidebarGroup = {
  title?: string;
  items: readonly SidebarItem[];
};

type SidebarAction = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type DashboardSidebarProps = {
  eyebrow: string;
  title: string;
  description: string;
  groups: readonly SidebarGroup[];
  activeItem: string;
  onSelect: (id: string) => void;
  primaryAction?: SidebarAction;
  children?: ReactNode;
};

export function DashboardSidebar({
  eyebrow,
  title,
  description,
  groups,
  activeItem,
  onSelect,
  primaryAction,
  children,
}: DashboardSidebarProps) {
  return (
    <aside className="relative flex h-full flex-col bg-background px-5 py-6 lg:min-h-screen lg:px-6 lg:py-8">
      <button
        type="button"
        aria-label="Collapse sidebar"
        className="absolute -right-4 top-6 hidden h-9 w-9 items-center justify-center rounded-xl border border-foreground/15 bg-background text-muted-foreground shadow-sm lg:inline-flex"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div className="mb-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl leading-none tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      {primaryAction ? (
        <button
          type="button"
          onClick={() => onSelect(primaryAction.id)}
          className="mb-6 flex items-center justify-center gap-3 rounded-[1.5rem] bg-foreground px-5 py-5 text-base font-semibold text-background shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-0.5"
        >
          <primaryAction.icon className="h-5 w-5" />
          <span>{primaryAction.label}</span>
        </button>
      ) : null}

      <div className="flex-1 space-y-8">
        {groups.map((group, groupIndex) => (
          <div key={group.title ?? groupIndex}>
            {group.title ? (
              <p className="mb-3 pl-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {group.title}
              </p>
            ) : null}
            <div className="space-y-2">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = item.id === activeItem;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelect(item.id)}
                    className={`flex w-full items-start gap-3 rounded-[1.5rem] px-4 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border border-foreground/10 bg-muted/50 text-foreground"
                        : "border border-transparent text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                        isActive
                          ? "bg-background text-foreground"
                          : "bg-muted/40 text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold">{item.label}</p>
                        {item.meta ? (
                          <span
                            className={`rounded-full px-2 py-0.5 text-[11px] ${
                              isActive
                                ? "bg-background text-foreground"
                                : "border border-foreground/10 text-muted-foreground"
                            }`}
                          >
                            {item.meta}
                          </span>
                        ) : null}
                      </div>
                      {item.hint ? (
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {item.hint}
                        </p>
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {children ? <div className="mt-8">{children}</div> : null}
    </aside>
  );
}
