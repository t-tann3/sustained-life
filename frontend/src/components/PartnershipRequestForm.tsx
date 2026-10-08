"use client";

import { useState } from "react";
import Link from "next/link";
import { postJson, type ApiResult } from "@/lib/api";

const fieldClass =
  "min-h-12 w-full rounded-[0.45rem] border border-[#8b9d97] bg-white px-3 py-2 text-ink";

const inquiryTypes = [
  "Community partnership",
  "The Well Within Boxes",
  "Sponsorship",
  "Event collaboration",
  "Speaking or workshop",
  "Other",
];

const budgetRanges = [
  "Not sure yet",
  "Under $250",
  "$250–$500",
  "$500–$1,000",
  "$1,000–$2,500",
  "$2,500+",
];

function needsEventDetails(inquiryType: string) {
  return (
    inquiryType === "The Well Within Boxes" ||
    inquiryType === "Event collaboration"
  );
}

export function PartnershipRequestForm() {
  const [status, setStatus] = useState<ApiResult | null>(null);
  const [pending, setPending] = useState(false);
  const [inquiryType, setInquiryType] = useState("");
  const eventRequired = needsEventDetails(inquiryType);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await postJson("/api/partnership-request", {
        first_name: String(formData.get("first_name") ?? ""),
        last_name: String(formData.get("last_name") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        organization: String(formData.get("organization") ?? ""),
        inquiry_type: String(formData.get("inquiry_type") ?? ""),
        event_name: String(formData.get("event_name") ?? ""),
        event_date: String(formData.get("event_date") ?? ""),
        event_location: String(formData.get("event_location") ?? ""),
        quantity: String(formData.get("quantity") ?? ""),
        audience: String(formData.get("audience") ?? ""),
        budget: String(formData.get("budget") ?? ""),
        customization: String(formData.get("customization") ?? ""),
        message: String(formData.get("message") ?? ""),
        consent: formData.get("consent") === "on",
      });
      setStatus(result);
      if (result.ok) {
        form.reset();
        setInquiryType("");
      }
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
    <form
      onSubmit={onSubmit}
      className="rounded-[1.25rem] border border-line bg-paper p-[clamp(1.4rem,3vw,2rem)]"
    >
      <p className="mb-4 text-sm text-muted">
        Required fields are marked. Please do not include private medical
        information. Sustained Life uses these details only to respond to your
        inquiry. See the <Link href="/privacy">Privacy Policy</Link>.
      </p>
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
          Phone <span className="font-normal text-muted">(optional)</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`${fieldClass} font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark sm:col-span-2">
          Organization <span className="font-normal text-muted">(optional)</span>
          <input
            name="organization"
            autoComplete="organization"
            className={`${fieldClass} font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark sm:col-span-2">
          Inquiry type
          <select
            required
            name="inquiry_type"
            value={inquiryType}
            onChange={(event) => setInquiryType(event.target.value)}
            className={`${fieldClass} font-normal`}
          >
            <option value="">Select an inquiry type</option>
            {inquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark">
          Event name{" "}
          {eventRequired ? null : (
            <span className="font-normal text-muted">(optional)</span>
          )}
          <input
            required={eventRequired}
            name="event_name"
            className={`${fieldClass} font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark">
          Event date{" "}
          {eventRequired ? null : (
            <span className="font-normal text-muted">(optional)</span>
          )}
          <input
            required={eventRequired}
            name="event_date"
            type="date"
            className={`${fieldClass} font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark sm:col-span-2">
          Event location{" "}
          {eventRequired ? null : (
            <span className="font-normal text-muted">(optional)</span>
          )}
          <input
            required={eventRequired}
            name="event_location"
            placeholder="City and state, plus shipping or pickup needs"
            className={`${fieldClass} font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark">
          Expected quantity{" "}
          <span className="font-normal text-muted">(optional)</span>
          <input
            name="quantity"
            inputMode="numeric"
            placeholder="Estimated boxes or participants"
            className={`${fieldClass} font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark">
          Budget range <span className="font-normal text-muted">(optional)</span>
          <select name="budget" className={`${fieldClass} font-normal`}>
            <option value="">Select a range</option>
            {budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark sm:col-span-2">
          Audience <span className="font-normal text-muted">(optional)</span>
          <input
            name="audience"
            placeholder="Who the boxes or program are for"
            className={`${fieldClass} font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark sm:col-span-2">
          Customization{" "}
          <span className="font-normal text-muted">(optional)</span>
          <textarea
            name="customization"
            rows={4}
            placeholder="Theme, colors, sponsor insert, event message, dietary considerations, or accessibility needs"
            className={`${fieldClass} min-h-28 resize-y font-normal`}
          />
        </label>
        <label className="flex flex-col gap-1.5 font-extrabold text-forest-dark sm:col-span-2">
          Message
          <textarea
            required
            name="message"
            rows={6}
            placeholder="Share your goals and any other details"
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
          <span>
            I agree that Sustained Life may contact me about this request.
          </span>
        </label>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={pending}
            className="btn-lift inline-flex min-h-12 items-center justify-center rounded-full border-2 border-transparent bg-forest px-[1.15rem] py-3 text-sm font-extrabold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-forest-dark disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send Partnership Request"}
          </button>
          {status ? (
            <p
              role="status"
              className={`mt-3 min-h-6 font-bold ${status.ok ? "text-forest" : "text-red-700"}`}
            >
              {status.message}
            </p>
          ) : null}
          {status && !status.ok && status.errors?.length ? (
            <ul className="mt-2 list-disc pl-5 text-sm text-red-700">
              {status.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </form>
  );
}
