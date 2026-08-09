"use server";

export type ContactState = {
  ok: boolean;
  message: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      ok: false,
      message: "Please fill in your name, email, and message.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      ok: false,
      message: "Please enter a valid email address.",
    };
  }

  // Wire to an email provider (e.g. Resend) when ready.
  console.log("Contact submission:", { name, email, message });

  return {
    ok: true,
    message: "Thank you — we’ll be in touch soon.",
  };
}
