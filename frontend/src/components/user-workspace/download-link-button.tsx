"use client";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DownloadLinkButton({
  href,
  label,
}: {
  href: string | null;
  label: string;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      className="rounded-full border-foreground/15"
      disabled={!href}
      onClick={() => {
        if (href) {
          window.open(href, "_blank", "noopener,noreferrer");
        }
      }}
    >
      {label}
      <Download className="h-4 w-4" />
    </Button>
  );
}
