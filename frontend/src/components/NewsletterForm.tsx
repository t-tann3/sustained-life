"use client";

import { useState } from "react";
import { postJson, type ApiResult } from "@/lib/api";

export function NewsletterForm() {
  const [status, setStatus] = useState<ApiResult | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "");

    try {
      const result = await postJson("/api/newsletter", { email });
      setStatus(result);
      if (result.ok) form.reset();
    } catch {
      setStatus({
        ok: false,
        message:
          "Could not reach the API server. Make sure it is running on port 4000.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="mt-3 space-y-3" onSubmit={onSubmit}>
      <label htmlFor="newsletter-email" className="block font-extrabold text-white">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="min-h-12 w-full rounded-[0.45rem] border border-[#8b9d97] bg-white px-3 py-2 text-ink"
      />
      <button
        type="submit"
        disabled={pending}
        className="btn-lift inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-transparent bg-gold-soft px-[1.15rem] py-3 text-sm font-extrabold text-forest-dark transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#ffd98f] disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Subscribing…" : "Subscribe"}
      </button>
      {status ? (
        <p
          role="status"
          className={`text-sm font-bold ${status.ok ? "text-white" : "text-red-200"}`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
