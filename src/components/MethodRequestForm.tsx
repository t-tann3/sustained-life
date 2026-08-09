"use client";

import { useActionState } from "react";
import { submitMethodRequest, type FormState } from "@/app/actions";

const initialState: FormState = { ok: false, message: "" };

const fieldClass =
  "min-h-12 w-full rounded-[0.45rem] border border-[#8b9d97] bg-white px-3 py-2 text-ink";

export function MethodRequestForm() {
  const [state, formAction, pending] = useActionState(
    submitMethodRequest,
    initialState,
  );

  return (
    <form action={formAction} className="rounded-[1.25rem] border border-line bg-paper p-[clamp(1.4rem,3vw,2rem)]">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark">
          First name
          <input
            required
            name="first_name"
            autoComplete="given-name"
            className={`${fieldClass} font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark">
          Last name
          <input
            required
            name="last_name"
            autoComplete="family-name"
            className={`${fieldClass} font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className={`${fieldClass} font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark">
          Organization
          <input
            name="organization"
            autoComplete="organization"
            className={`${fieldClass} font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark sm:col-span-2">
          Area of interest
          <select name="interest" className={`${fieldClass} font-normal`}>
            <option>General information</option>
            <option>Workshop</option>
            <option>Speaking engagement</option>
            <option>Partnership</option>
            <option>Curriculum information</option>
            <option>Organizational consultation</option>
            <option>Healthy Pantry initiative</option>
          </select>
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark sm:col-span-2">
          What are you hoping to accomplish?
          <textarea
            required
            name="message"
            rows={6}
            className={`${fieldClass} min-h-36 resize-y font-normal`}
          />
        </label>
        <label className="flex items-start gap-2.5 text-sm font-medium text-ink sm:col-span-2">
          <input
            required
            name="consent"
            type="checkbox"
            className="mt-1 h-[1.15rem] w-[1.15rem] min-h-0"
          />
          <span>I agree that Sustained Life may contact me about this request.</span>
        </label>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={pending}
            className="btn-lift inline-flex min-h-12 items-center justify-center rounded-full border-2 border-transparent bg-forest px-[1.15rem] py-3 text-sm font-extrabold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-forest-dark disabled:opacity-60"
          >
            {pending ? "Sending…" : "Request Information"}
          </button>
          {state.message ? (
            <p
              role="status"
              className={`mt-3 min-h-6 font-bold ${state.ok ? "text-forest" : "text-red-700"}`}
            >
              {state.message}
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
