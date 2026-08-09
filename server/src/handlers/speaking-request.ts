import { saveSubmission } from "../store.js";
import type { ApiResult, SpeakingRequestInput } from "../types.js";
import { asBoolean, isEmail, trim } from "../validation.js";

export function parseSpeakingRequestInput(
  body: Record<string, unknown>,
): SpeakingRequestInput {
  const audienceRaw = trim(body.audienceSize ?? body.audience_size);
  const audienceSize = audienceRaw ? Number(audienceRaw) : undefined;

  return {
    name: trim(body.name),
    organization: trim(body.organization),
    email: trim(body.email).toLowerCase(),
    phone: trim(body.phone) || undefined,
    event: trim(body.event),
    date: trim(body.date),
    location: trim(body.location),
    format: trim(body.format),
    audienceSize:
      audienceSize !== undefined && Number.isFinite(audienceSize)
        ? audienceSize
        : undefined,
    topic: trim(body.topic),
    goals: trim(body.goals),
    details: trim(body.details) || undefined,
    consent: asBoolean(body.consent),
  };
}

export async function handleSpeakingRequestSubmission(
  input: SpeakingRequestInput,
): Promise<ApiResult<{ id: string }>> {
  const errors: string[] = [];

  if (!input.name) errors.push("Name is required.");
  if (!input.organization) errors.push("Organization is required.");
  if (!input.email) errors.push("Email is required.");
  else if (!isEmail(input.email)) errors.push("Email is invalid.");
  if (!input.event) errors.push("Event name is required.");
  if (!input.date) errors.push("Date or timeframe is required.");
  if (!input.location) errors.push("Location is required.");
  if (!input.format) errors.push("Preferred format is required.");
  if (!input.topic) errors.push("Topic is required.");
  if (!input.goals) errors.push("Goals are required.");
  if (!input.consent) errors.push("Consent is required.");

  if (errors.length > 0) {
    return {
      ok: false,
      message: "Please complete all required fields and consent to be contacted.",
      errors,
    };
  }

  const saved = await saveSubmission({
    type: "speaking-request",
    payload: input,
  });

  console.log("Speaking request saved:", saved.id);

  return {
    ok: true,
    message: "Thank you — we received your speaking request and will follow up.",
    data: { id: saved.id },
  };
}
