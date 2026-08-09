"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AdminShell } from "@/components/AdminShell";
import {
  fetchSubmissions,
  formatDate,
  type ContactPayload,
  type MethodRequestPayload,
  type Submission,
} from "@/lib/api";

type Tab = "contact" | "method-request";

export default function MessagesPage() {
  const [tab, setTab] = useState<Tab>("contact");
  const [items, setItems] = useState<Submission[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const load = useCallback(async (type: Tab) => {
    setLoading(true);
    setError("");
    try {
      const result = await fetchSubmissions(type);
      setItems(result.submissions);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load messages.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load(tab);
  }, [load, tab]);

  const countsLabel = useMemo(() => {
    if (tab === "contact") return "Contact form";
    return "Method requests";
  }, [tab]);

  return (
    <AdminShell>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-forest">Messages</h2>
          <p className="mt-1 text-muted">
            Inbox for the public Contact form and Sustained Life Method requests.
          </p>
        </div>
        <button
          type="button"
          onClick={() => void load(tab)}
          className="rounded-md border border-line bg-paper px-3 py-2 text-sm font-semibold text-forest"
        >
          Refresh
        </button>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <TabButton
          active={tab === "contact"}
          onClick={() => setTab("contact")}
          label="Contact form"
        />
        <TabButton
          active={tab === "method-request"}
          onClick={() => setTab("method-request")}
          label="Method requests"
        />
      </div>

      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-forest">
          {countsLabel}: {loading ? "…" : `${items.length} submission${items.length === 1 ? "" : "s"}`}
        </p>
      </div>

      {error ? <p className="mb-4 text-red-700">{error}</p> : null}

      {loading ? <p className="text-muted">Loading…</p> : null}

      {!loading && !error && items.length === 0 ? (
        <div className="border border-line bg-paper p-6">
          <p className="font-semibold text-forest">No {countsLabel.toLowerCase()} yet</p>
          <p className="mt-2 text-sm text-muted">
            {tab === "contact"
              ? "When someone submits the Contact page form on the public site, their message will show up here."
              : "When someone submits the Method request form, it will show up here."}
          </p>
        </div>
      ) : null}

      <div className="space-y-4">
        {items.map((item) =>
          item.type === "contact" ? (
            <ContactCard key={item.id} item={item} />
          ) : (
            <MethodCard key={item.id} item={item} />
          ),
        )}
      </div>
    </AdminShell>
  );
}

function TabButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md px-4 py-2 text-sm font-semibold ${
        active ? "bg-forest text-white" : "border border-line bg-paper text-forest"
      }`}
    >
      {label}
    </button>
  );
}

function ContactCard({ item }: { item: Submission }) {
  const payload = item.payload as ContactPayload;

  return (
    <article className="border border-line bg-paper p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
            Contact form
          </p>
          <h3 className="mt-1 text-lg font-bold text-forest">
            {payload.firstName} {payload.lastName}
          </h3>
          <p className="text-sm text-muted">{formatDate(item.createdAt)}</p>
        </div>
        <p className="rounded bg-sage px-2 py-1 text-xs font-bold uppercase tracking-wide text-forest">
          {payload.topic || "General question"}
        </p>
      </div>
      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <Field label="Email" value={payload.email} />
        <Field label="Phone" value={payload.phone || "—"} />
        <Field
          label="Organization"
          value={payload.organization || "—"}
          className="sm:col-span-2"
        />
        <Field label="Message" value={payload.message} className="sm:col-span-2" />
      </dl>
    </article>
  );
}

function MethodCard({ item }: { item: Submission }) {
  const payload = item.payload as MethodRequestPayload;

  return (
    <article className="border border-line bg-paper p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
            Method request
          </p>
          <h3 className="mt-1 text-lg font-bold text-forest">
            {payload.firstName} {payload.lastName}
          </h3>
          <p className="text-sm text-muted">{formatDate(item.createdAt)}</p>
        </div>
        <p className="rounded bg-sage px-2 py-1 text-xs font-bold uppercase tracking-wide text-forest">
          {payload.interest || "General information"}
        </p>
      </div>
      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <Field label="Email" value={payload.email} />
        <Field label="Organization" value={payload.organization || "—"} />
        <Field
          label="What they hope to accomplish"
          value={payload.message}
          className="sm:col-span-2"
        />
      </dl>
    </article>
  );
}

function Field({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="font-semibold text-muted">{label}</dt>
      <dd className="mt-1 whitespace-pre-wrap">{value}</dd>
    </div>
  );
}
