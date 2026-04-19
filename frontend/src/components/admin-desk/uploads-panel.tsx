"use client";

import { type TranslationJob } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function UploadsPanel({ jobs }: { jobs: TranslationJob[] }) {
  return (
    <Card className="rounded-[2rem] border-foreground/10 bg-background/85">
      <CardHeader className="gap-3">
        <Badge variant="outline" className="rounded-full border-foreground/15 px-3 py-1">All uploads</Badge>
        <CardTitle className="font-display text-3xl tracking-tight">Files visible across the workflow</CardTitle>
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
            {jobs.map((row) => {
              const user = typeof row.user === "string" ? row.user : row.user.fullName;
              return (
                <TableRow key={row._id}>
                  <TableCell className="font-medium">{row.originalFileName}</TableCell>
                  <TableCell>{user}</TableCell>
                  <TableCell>{row.status.replace("_", " ")}</TableCell>
                  <TableCell>{row.aiTranslatedFileUrl ? "Ready" : "Pending"}</TableCell>
                  <TableCell>{row.reviewedFileUrl ? "Ready" : "Pending"}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
