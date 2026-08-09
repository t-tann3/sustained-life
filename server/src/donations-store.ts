import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { DonationInput, StoredDonation } from "./types.js";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "donations.json");

let memory: StoredDonation[] | null = null;

async function ensureLoaded() {
  if (memory) return memory;

  try {
    const raw = await readFile(DATA_FILE, "utf8");
    memory = JSON.parse(raw) as StoredDonation[];
  } catch {
    memory = [];
  }

  return memory;
}

async function persist(donations: StoredDonation[]) {
  memory = donations;

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify(donations, null, 2), "utf8");
  } catch (error) {
    console.warn("Could not persist donations to disk:", error);
  }
}

export async function listDonations() {
  return ensureLoaded();
}

export async function saveDonation(input: DonationInput) {
  const donations = await ensureLoaded();
  const now = new Date().toISOString();
  const record: StoredDonation = {
    id: randomUUID(),
    createdAt: now,
    updatedAt: now,
    ...input,
  };

  donations.unshift(record);
  await persist(donations);
  return record;
}

export async function updateDonation(
  id: string,
  patch: Partial<DonationInput>,
) {
  const donations = await ensureLoaded();
  const index = donations.findIndex((item) => item.id === id);
  if (index < 0) return null;

  const updated: StoredDonation = {
    ...donations[index],
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  donations[index] = updated;
  await persist(donations);
  return updated;
}

export async function deleteDonation(id: string) {
  const donations = await ensureLoaded();
  const next = donations.filter((item) => item.id !== id);
  if (next.length === donations.length) return false;
  await persist(next);
  return true;
}
