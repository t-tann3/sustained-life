import { saveSubmission } from "../store.js";
import type { ApiResult, PartnershipRequestInput } from "../types.js";
import { asBoolean, isEmail, trim } from "../validation.js";

const EVENT_INQUIRY_TYPES = new Set([
  "The Well Within Boxes",
  "Event collaboration",
]);

export function parsePartnershipRequestInput(
  body: Record<string, unknown>,
): PartnershipRequestInput {
  return {
    firstName: trim(body.firstName ?? body.first_name),
    lastName: trim(body.lastName ?? body.last_name),
    email: trim(body.email).toLowerCase(),
    phone: trim(body.phone) || undefined,
    organization: trim(body.organization) || undefined,
    inquiryType: trim(body.inquiryType ?? body.inquiry_type),
    eventName: trim(body.eventName ?? body.event_name) || undefined,
    eventDate: trim(body.eventDate ?? body.event_date) || undefined,
    eventLocation: trim(body.eventLocation ?? body.event_location) || undefined,
    quantity: trim(body.quantity) || undefined,
    audience: trim(body.audience) || undefined,
    budget: trim(body.budget) || undefined,
    customization: trim(body.customization) || undefined,
    message: trim(body.message),
    consent: asBoolean(body.consent),
  };
}

export async function handlePartnershipRequestSubmission(
  input: PartnershipRequestInput,
): Promise<ApiResult<{ id: string }>> {
  const errors: string[] = [];

  if (!input.firstName) errors.push("First name is required.");
  if (!input.lastName) errors.push("Last name is required.");
  if (!input.email) errors.push("Email is required.");
  else if (!isEmail(input.email)) errors.push("Email is invalid.");
  if (!input.inquiryType) errors.push("Inquiry type is required.");
  if (!input.message) errors.push("Message is required.");
  if (!input.consent) errors.push("Consent is required.");

  if (EVENT_INQUIRY_TYPES.has(input.inquiryType)) {
    if (!input.eventName) errors.push("Event name is required.");
    if (!input.eventDate) errors.push("Event date is required.");
    if (!input.eventLocation) errors.push("Event location is required.");
  }

  if (errors.length > 0) {
    return {
      ok: false,
      message: "Please complete all required fields and consent to be contacted.",
      errors,
    };
  }

  const saved = await saveSubmission({
    type: "partnership-request",
    payload: input,
  });

  console.log("Partnership request saved:", saved.id);

  return {
    ok: true,
    message:
      "Thank you for contacting Sustained Life. Your request has been received. A team member will review the details and follow up about availability and next steps.",
    data: { id: saved.id },
  };
}
