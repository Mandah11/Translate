"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function AdminLoginCard({
  loading,
  error,
  onSubmit,
}: {
  loading: boolean;
  error: string;
  onSubmit: (formData: FormData) => Promise<void>;
}) {
  return (
    <Card className="mx-auto max-w-3xl rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge variant="outline" className="w-fit rounded-full border-foreground/15 px-3 py-1">Admin authentication</Badge>
        <CardTitle className="font-display text-3xl tracking-tight">Sign in to the review desk</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">Seeded admin login: `admin@translate.test` / `admin123456`</p>
        <form action={(formData) => void onSubmit(formData)} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Field id="email" label="Email" type="email" defaultValue="admin@translate.test" />
            <Field id="password" label="Password" type="password" defaultValue="admin123456" />
          </div>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <Button className="h-12 rounded-full bg-foreground text-background hover:bg-foreground/90" disabled={loading}>
            {loading ? "Please wait..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function Field({
  id,
  label,
  type,
  defaultValue,
}: {
  id: string;
  label: string;
  type: string;
  defaultValue: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      <Input id={id} name={id} type={type} defaultValue={defaultValue} required />
    </div>
  );
}
