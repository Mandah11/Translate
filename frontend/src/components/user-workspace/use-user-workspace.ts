"use client";

import { useEffect, useMemo, useState } from "react";

import { fetchJobs, login, registerUser, requestReview, type TranslationJob, type UserSession } from "@/lib/api";

import { USER_STORAGE_KEY, type UserSection } from "./constants";
import type { AuthMode } from "./auth-card";

export function useUserWorkspace() {
  const [session, setSession] = useState<UserSession | null>(null);
  const [jobs, setJobs] = useState<TranslationJob[]>([]);
  const [activeSection, setActiveSection] = useState<UserSection>("upload");
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [authLoading, setAuthLoading] = useState(false);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [authError, setAuthError] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem(USER_STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as UserSession;
      if (parsed.role === "user") setSession(parsed);
    } catch {
      window.localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (session) void refreshJobs(session.id);
  }, [session]);

  const selectedJob = useMemo(
    () => jobs.find((job) => job._id === selectedJobId) ?? jobs[0] ?? null,
    [jobs, selectedJobId],
  );

  async function refreshJobs(userId: string) {
    setLoadingJobs(true);
    try {
      const response = await fetchJobs(userId);
      setJobs(response.jobs);
      setSelectedJobId((current) => current ?? response.jobs[0]?._id ?? null);
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Failed to load jobs");
    } finally {
      setLoadingJobs(false);
    }
  }

  async function handleAuthSubmit(formData: FormData) {
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();
    const fullName = String(formData.get("fullName") ?? "").trim();
    setAuthLoading(true);
    setAuthError("");
    setFeedback("");
    try {
      const response =
        authMode === "login"
          ? await login(email, password)
          : await registerUser({ fullName, email, password });
      if (response.user.role !== "user") throw new Error("Please sign in with a user account on this page.");
      setSession(response.user);
      window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response.user));
      setFeedback(authMode === "login" ? "Signed in successfully." : "Account created.");
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "Authentication failed");
    } finally {
      setAuthLoading(false);
    }
  }

  function handleSignOut() {
    setSession(null);
    setJobs([]);
    setSelectedJobId(null);
    window.localStorage.removeItem(USER_STORAGE_KEY);
    setFeedback("Signed out from user workspace.");
  }

  async function handleRequestReview(jobId: string) {
    if (!session) return;
    setFeedback("Sending review request...");
    try {
      await requestReview(session.id, jobId);
      await refreshJobs(session.id);
      setFeedback("Review request sent to admin.");
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Failed to request review");
    }
  }

  return {
    session,
    jobs,
    selectedJob,
    activeSection,
    authMode,
    authLoading,
    loadingJobs,
    authError,
    feedback,
    setActiveSection,
    setSelectedJobId,
    setAuthMode,
    setFeedback,
    refreshJobs,
    handleAuthSubmit,
    handleSignOut,
    handleRequestReview,
  };
}
