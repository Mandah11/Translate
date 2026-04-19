"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type AuthMode = "login" | "register";

export function UserAuthCard({
  mode,
  loading,
  error,
  onModeChange,
  onSubmit,
}: {
  mode: AuthMode;
  loading: boolean;
  error: string;
  onModeChange: (mode: AuthMode) => void;
  onSubmit: (formData: FormData) => Promise<void>;
}) {
  return (
    <Card className="mx-auto max-w-3xl rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge variant="outline" className="w-fit rounded-full border-foreground/15 px-3 py-1">
          User authentication
        </Badge>
        <CardTitle className="font-display text-3xl tracking-tight">
          Sign in to your translation workspace
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          Use the seeded demo account or create a new user account. Admin credentials only work on the admin page.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-3">
          <Button type="button" variant={mode === "login" ? "default" : "outline"} className="rounded-full" onClick={() => onModeChange("login")}>
            Login
          </Button>
          <Button type="button" variant={mode === "register" ? "default" : "outline"} className="rounded-full" onClick={() => onModeChange("register")}>
            Register
          </Button>
        </div>

        <form action={(formData) => void onSubmit(formData)} className="grid gap-4">
          {mode === "register" ? (
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full name
              </label>
              <Input id="fullName" name="fullName" required />
            </div>
          ) : null}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" name="email" type="email" required defaultValue={mode === "login" ? "user@translate.test" : ""} />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input id="password" name="password" type="password" required defaultValue={mode === "login" ? "user123456" : ""} />
            </div>
          </div>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <Button className="h-12 rounded-full bg-foreground text-background hover:bg-foreground/90" disabled={loading}>
            {loading ? "Please wait..." : mode === "login" ? "Sign in" : "Create account"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export type { AuthMode };
