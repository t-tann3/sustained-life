import { saveSubmission } from "../store.js";
import type { ApiResult, NewsletterInput } from "../types.js";
import { isEmail, trim } from "../validation.js";

export function parseNewsletterInput(
  body: Record<string, unknown>,
): NewsletterInput {
  return {
    email: trim(body.email).toLowerCase(),
  };
}

export async function handleNewsletterSubmission(
  input: NewsletterInput,
): Promise<ApiResult<{ id: string }>> {
  if (!input.email) {
    return {
      ok: false,
      message: "Email is required.",
      errors: ["Email is required."],
    };
  }

  if (!isEmail(input.email)) {
    return {
      ok: false,
      message: "Please enter a valid email address.",
      errors: ["Email is invalid."],
    };
  }

  const saved = await saveSubmission({
    type: "newsletter",
    payload: input,
  });

  console.log("Newsletter signup saved:", saved.id);

  return {
    ok: true,
    message: "Thank you for subscribing.",
    data: { id: saved.id },
  };
}
