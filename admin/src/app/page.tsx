"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminShell } from "@/components/AdminShell";
import {
  fetchStats,
  fetchSubmissions,
  formatDate,
  formatMoney,
  type AdminStats,
  type ContactPayload,
  type MethodRequestPayload,
  type Submission,
} from "@/lib/api";

export default function OverviewPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [recent, setRecent] = useState<Submission[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      fetchStats(),
      fetchSubmissions(),
    ])
      .then(([statsResult, submissionsResult]) => {
        setStats(statsResult.stats);
        setRecent(
          submissionsResult.submissions
            .filter(
              (item) =>
                item.type === "contact" || item.type === "method-request",
            )
            .slice(0, 5),
        );
      })
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <AdminShell>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-forest">Overview</h2>
        <p className="mt-1 text-muted">
          Snapshot of form messages, newsletter growth, and donation tracking.
        </p>
      </div>

      {error ? <p className="text-red-700">{error}</p> : null}

      {!stats && !error ? <p className="text-muted">Loading…</p> : null}

      {stats ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Contact form messages"
            value={String(stats.contacts)}
            href="/messages"
          />
          <StatCard
            label="Method requests"
            value={String(stats.methodRequests)}
            href="/messages"
          />
          <StatCard
            label="Newsletter subscribers"
            value={String(stats.newsletterSubscribers)}
            href="/newsletter"
          />
          <StatCard
            label="Donations received"
            value={formatMoney(
              stats.donations.totalReceived,
              stats.donations.currency,
            )}
            href="/donations"
          />
        </div>
      ) : null}

      <section className="mt-10">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-forest">Recent messages</h3>
            <p className="text-sm text-muted">
              Latest Contact form and Method request submissions.
            </p>
          </div>
          <Link
            href="/messages"
            className="text-sm font-semibold text-forest no-underline hover:underline"
          >
            View all messages →
          </Link>
        </div>

        {recent.length === 0 ? (
          <div className="border border-line bg-paper p-5 text-sm text-muted">
            No contact or method submissions yet. Send a test message from{" "}
            <span className="font-semibold text-forest">/contact</span> on the
            public site, then refresh here.
          </div>
        ) : (
          <div className="space-y-3">
            {recent.map((item) => (
              <RecentRow key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </AdminShell>
  );
}

function RecentRow({ item }: { item: Submission }) {
  if (item.type === "contact") {
    const payload = item.payload as ContactPayload;
    return (
      <Link
        href="/messages"
        className="block border border-line bg-paper p-4 no-underline transition-colors hover:bg-sage/30"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-semibold text-forest">
            {payload.firstName} {payload.lastName}
          </p>
          <p className="text-xs font-bold uppercase tracking-wide text-muted">
            Contact · {payload.topic}
          </p>
        </div>
        <p className="mt-1 text-sm text-muted">{payload.email}</p>
        <p className="mt-2 line-clamp-2 text-sm">{payload.message}</p>
        <p className="mt-2 text-xs text-muted">{formatDate(item.createdAt)}</p>
      </Link>
    );
  }

  const payload = item.payload as MethodRequestPayload;
  return (
    <Link
      href="/messages"
      className="block border border-line bg-paper p-4 no-underline transition-colors hover:bg-sage/30"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-semibold text-forest">
          {payload.firstName} {payload.lastName}
        </p>
        <p className="text-xs font-bold uppercase tracking-wide text-muted">
          Method · {payload.interest}
        </p>
      </div>
      <p className="mt-1 text-sm text-muted">{payload.email}</p>
      <p className="mt-2 line-clamp-2 text-sm">{payload.message}</p>
      <p className="mt-2 text-xs text-muted">{formatDate(item.createdAt)}</p>
    </Link>
  );
}

function StatCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="border border-line bg-paper p-5 no-underline transition-colors hover:bg-sage/40"
    >
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-2 text-3xl font-bold text-forest">{value}</p>
    </Link>
  );
}
