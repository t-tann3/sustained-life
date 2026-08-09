import { saveSubmission } from "../store.js";
import type { ApiResult, MethodRequestInput } from "../types.js";
import { asBoolean, isEmail, trim } from "../validation.js";

export function parseMethodRequestInput(
  body: Record<string, unknown>,
): MethodRequestInput {
  return {
    firstName: trim(body.firstName ?? body.first_name),
    lastName: trim(body.lastName ?? body.last_name),
    email: trim(body.email).toLowerCase(),
    organization: trim(body.organization) || undefined,
    interest: trim(body.interest),
    message: trim(body.message),
    consent: asBoolean(body.consent),
  };
}

export async function handleMethodRequestSubmission(
  input: MethodRequestInput,
): Promise<ApiResult<{ id: string }>> {
  const errors: string[] = [];

  if (!input.firstName) errors.push("First name is required.");
  if (!input.lastName) errors.push("Last name is required.");
  if (!input.email) errors.push("Email is required.");
  else if (!isEmail(input.email)) errors.push("Email is invalid.");
  if (!input.interest) errors.push("Area of interest is required.");
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
    type: "method-request",
    payload: input,
  });

  console.log("Method request saved:", saved.id);

  return {
    ok: true,
    message: "Thank you — we received your request for information.",
    data: { id: saved.id },
  };
}
