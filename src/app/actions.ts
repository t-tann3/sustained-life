"use server";

export type FormState = {
  ok: boolean;
  message: string;
};

function required(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContact(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const firstName = required(formData.get("first_name"));
  const lastName = required(formData.get("last_name"));
  const email = required(formData.get("email"));
  const phone = required(formData.get("phone"));
  const organization = required(formData.get("organization"));
  const topic = required(formData.get("topic"));
  const message = required(formData.get("message"));
  const consent = formData.get("consent");

  if (!firstName || !lastName || !email || !topic || !message || !consent) {
    return {
      ok: false,
      message: "Please complete all required fields and consent to be contacted.",
    };
  }

  if (!isEmail(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  console.log("Contact submission:", {
    firstName,
    lastName,
    email,
    phone,
    organization,
    topic,
    message,
  });

  return {
    ok: true,
    message: "Thank you — a member of the Sustained Life team will follow up.",
  };
}

export async function submitMethodRequest(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const firstName = required(formData.get("first_name"));
  const lastName = required(formData.get("last_name"));
  const email = required(formData.get("email"));
  const organization = required(formData.get("organization"));
  const interest = required(formData.get("interest"));
  const message = required(formData.get("message"));
  const consent = formData.get("consent");

  if (!firstName || !lastName || !email || !interest || !message || !consent) {
    return {
      ok: false,
      message: "Please complete all required fields and consent to be contacted.",
    };
  }

  if (!isEmail(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  console.log("Method request:", {
    firstName,
    lastName,
    email,
    organization,
    interest,
    message,
  });

  return {
    ok: true,
    message: "Thank you — we received your request for information.",
  };
}
