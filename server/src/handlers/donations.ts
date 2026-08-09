import {
  deleteDonation,
  listDonations,
  saveDonation,
  updateDonation,
} from "../donations-store.js";
import type { ApiResult, DonationInput, DonationStatus } from "../types.js";
import { isEmail, trim } from "../validation.js";

const STATUSES = new Set<DonationStatus>(["pledged", "received", "refunded"]);

export function parseDonationInput(body: Record<string, unknown>): DonationInput {
  const amount = Number(body.amount);
  const statusRaw = trim(body.status).toLowerCase() || "received";
  const status = (
    STATUSES.has(statusRaw as DonationStatus) ? statusRaw : "received"
  ) as DonationStatus;

  return {
    donorName: trim(body.donorName ?? body.donor_name),
    email: trim(body.email) || undefined,
    amount: Number.isFinite(amount) ? amount : NaN,
    currency: (trim(body.currency) || "USD").toUpperCase(),
    method: trim(body.method) || "other",
    status,
    notes: trim(body.notes) || undefined,
    donatedAt: trim(body.donatedAt ?? body.donated_at) || new Date().toISOString(),
  };
}

function validateDonation(input: DonationInput) {
  const errors: string[] = [];
  if (!input.donorName) errors.push("Donor name is required.");
  if (!Number.isFinite(input.amount) || input.amount <= 0) {
    errors.push("Amount must be a positive number.");
  }
  if (input.email && !isEmail(input.email)) errors.push("Email is invalid.");
  if (!input.method) errors.push("Payment method is required.");
  if (!STATUSES.has(input.status)) errors.push("Status is invalid.");
  return errors;
}

export async function handleCreateDonation(
  input: DonationInput,
): Promise<ApiResult<{ id: string }>> {
  const errors = validateDonation(input);
  if (errors.length > 0) {
    return { ok: false, message: "Please fix the donation details.", errors };
  }

  const saved = await saveDonation(input);
  return {
    ok: true,
    message: "Donation recorded.",
    data: { id: saved.id },
  };
}

export async function handleUpdateDonation(
  id: string,
  body: Record<string, unknown>,
): Promise<ApiResult<{ id: string }>> {
  const existing = (await listDonations()).find((item) => item.id === id);
  if (!existing) {
    return { ok: false, message: "Donation not found." };
  }

  const merged = parseDonationInput({
    ...existing,
    ...body,
    donorName: body.donorName ?? body.donor_name ?? existing.donorName,
    donatedAt: body.donatedAt ?? body.donated_at ?? existing.donatedAt,
  });

  const errors = validateDonation(merged);
  if (errors.length > 0) {
    return { ok: false, message: "Please fix the donation details.", errors };
  }

  const updated = await updateDonation(id, merged);
  if (!updated) {
    return { ok: false, message: "Donation not found." };
  }

  return {
    ok: true,
    message: "Donation updated.",
    data: { id: updated.id },
  };
}

export async function handleDeleteDonation(
  id: string,
): Promise<ApiResult> {
  const deleted = await deleteDonation(id);
  if (!deleted) {
    return { ok: false, message: "Donation not found." };
  }
  return { ok: true, message: "Donation deleted." };
}
