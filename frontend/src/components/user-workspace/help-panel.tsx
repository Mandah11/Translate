"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HelpPanel() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
      <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
        <CardHeader className="gap-3">
          <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">Quick help</Badge>
          <CardTitle className="font-display text-3xl tracking-tight">Current demo accounts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>User: `user@translate.test` / `user123456`</p>
          <p>Admin: `admin@translate.test` / `admin123456`</p>
          <p>You can also register a brand-new user directly from this page.</p>
        </CardContent>
      </Card>
      <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
        <CardHeader className="gap-3">
          <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">Workflow</Badge>
          <CardTitle className="font-display text-3xl tracking-tight">End-to-end path</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>1. Sign in or create a user account.</p>
          <p>2. Upload a file and provide source text for the AI draft.</p>
          <p>3. Review the generated version inside your library.</p>
          <p>4. Request human review when you want admin correction.</p>
          <p>5. Download AI and reviewed files separately when they are ready.</p>
        </CardContent>
      </Card>
    </div>
  );
}
