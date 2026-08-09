"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions";

const initialState: ContactState = {
  ok: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <form action={formAction} className="mt-10 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2 text-sm text-muted">
          <span>Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="w-full border-b border-line bg-transparent px-0 py-3 text-base text-ink outline-none transition-[border-color] focus:border-accent"
          />
        </label>
        <label className="block space-y-2 text-sm text-muted">
          <span>Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="w-full border-b border-line bg-transparent px-0 py-3 text-base text-ink outline-none transition-[border-color] focus:border-accent"
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm text-muted">
        <span>Message</span>
        <textarea
          required
          name="message"
          rows={4}
          className="w-full resize-y border-b border-line bg-transparent px-0 py-3 text-base text-ink outline-none transition-[border-color] focus:border-accent"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-accent-deep disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
        {state.message ? (
          <p
            role="status"
            className={`text-sm ${state.ok ? "text-accent-deep" : "text-red-700"}`}
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
