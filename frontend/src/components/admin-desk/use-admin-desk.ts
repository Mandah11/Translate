"use client";

import { useEffect, useMemo, useState } from "react";

import { fetchJobs, login, submitReview, type TranslationJob, type UserSession } from "@/lib/api";

import { ADMIN_STORAGE_KEY, type AdminSection } from "./constants";

export function useAdminDesk() {
  const [session, setSession] = useState<UserSession | null>(null);
  const [jobs, setJobs] = useState<TranslationJob[]>([]);
  const [activeSection, setActiveSection] = useState<AdminSection>("reviews");
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [savingReview, setSavingReview] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as UserSession;
      if (parsed.role === "admin") setSession(parsed);
    } catch {
      window.localStorage.removeItem(ADMIN_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (session) void refreshJobs(session.id);
  }, [session]);

  const selectedJob = useMemo(() => jobs.find((job) => job._id === selectedJobId) ?? jobs[0] ?? null, [jobs, selectedJobId]);
  const reviewQueue = useMemo(() => jobs.filter((job) => job.status === "review_requested" || job.status === "translated"), [jobs]);

  async function refreshJobs(userId: string) {
    setLoadingJobs(true);
    try {
      const response = await fetchJobs(userId);
      setJobs(response.jobs);
      setSelectedJobId((current) => current ?? response.jobs[0]?._id ?? null);
    } catch (loadError) {
      setFeedback(loadError instanceof Error ? loadError.message : "Failed to load jobs");
    } finally {
      setLoadingJobs(false);
    }
  }

  async function handleLogin(formData: FormData) {
    setAuthLoading(true);
    setError("");
    setFeedback("");
    try {
      const response = await login(String(formData.get("email") ?? ""), String(formData.get("password") ?? ""));
      if (response.user.role !== "admin") throw new Error("Please use an admin account on this page.");
      setSession(response.user);
      window.localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(response.user));
      setFeedback("Signed in to admin desk.");
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "Login failed");
    } finally {
      setAuthLoading(false);
    }
  }

  function handleSignOut() {
    setSession(null);
    setJobs([]);
    setSelectedJobId(null);
    window.localStorage.removeItem(ADMIN_STORAGE_KEY);
    setFeedback("Signed out from admin desk.");
  }

  async function handleReviewSubmit(input: { adminNote: string; reviewedText: string }) {
    if (!session || !selectedJob) return;
    setSavingReview(true);
    setFeedback("Saving reviewed file...");
    try {
      await submitReview({ userId: session.id, jobId: selectedJob._id, ...input });
      await refreshJobs(session.id);
      setFeedback("Reviewed file saved and returned to the user.");
    } catch (submitError) {
      setFeedback(submitError instanceof Error ? submitError.message : "Failed to save review");
    } finally {
      setSavingReview(false);
    }
  }

  return {
    session,
    jobs,
    reviewQueue,
    selectedJob,
    activeSection,
    loadingJobs,
    authLoading,
    savingReview,
    feedback,
    error,
    setActiveSection,
    setSelectedJobId,
    handleLogin,
    handleSignOut,
    handleReviewSubmit,
  };
}
