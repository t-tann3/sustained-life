import { saveSubmission } from "../store.js";
import type { ApiResult, ContactInput } from "../types.js";
import { asBoolean, isEmail, trim } from "../validation.js";

export function parseContactInput(body: Record<string, unknown>): ContactInput {
  return {
    firstName: trim(body.firstName ?? body.first_name),
    lastName: trim(body.lastName ?? body.last_name),
    email: trim(body.email).toLowerCase(),
    phone: trim(body.phone) || undefined,
    organization: trim(body.organization) || undefined,
    topic: trim(body.topic),
    message: trim(body.message),
    consent: asBoolean(body.consent),
  };
}

export async function handleContactSubmission(
  input: ContactInput,
): Promise<ApiResult<{ id: string }>> {
  const errors: string[] = [];

  if (!input.firstName) errors.push("First name is required.");
  if (!input.lastName) errors.push("Last name is required.");
  if (!input.email) errors.push("Email is required.");
  else if (!isEmail(input.email)) errors.push("Email is invalid.");
  if (!input.topic) errors.push("Topic is required.");
  if (!input.message) errors.push("Message is required.");
  if (!input.consent) errors.push("Consent is required.");

  if (errors.length > 0) {
    return {
      ok: false,
      message: "Please complete all required fields and consent to be contacted.",
      errors,
    };
  }

  const saved = await saveSubmission({
    type: "contact",
    payload: input,
  });

  console.log("Contact submission saved:", saved.id);

  return {
    ok: true,
    message: "Thank you — a member of the Sustained Life team will follow up.",
    data: { id: saved.id },
  };
}
