import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { getDb, isMongoEnabled } from "./db.js";
import type { DonationInput, StoredDonation } from "./types.js";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "donations.json");

let memory: StoredDonation[] | null = null;

async function ensureJsonLoaded() {
  if (memory) return memory;

  try {
    const raw = await readFile(DATA_FILE, "utf8");
    memory = JSON.parse(raw) as StoredDonation[];
  } catch {
    memory = [];
  }

  return memory;
}

async function persistJson(donations: StoredDonation[]) {
  memory = donations;

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify(donations, null, 2), "utf8");
  } catch (error) {
    console.warn("Could not persist donations to disk:", error);
  }
}

export async function listDonations() {
  if (isMongoEnabled()) {
    return getDb()
      .collection<StoredDonation>("donations")
      .find({}, { projection: { _id: 0 } })
      .sort({ donatedAt: -1 })
      .toArray();
  }

  return ensureJsonLoaded();
}

export async function saveDonation(input: DonationInput) {
  const now = new Date().toISOString();
  const record: StoredDonation = {
    id: randomUUID(),
    createdAt: now,
    updatedAt: now,
    ...input,
  };

  if (isMongoEnabled()) {
    await getDb().collection<StoredDonation>("donations").insertOne(record);
    return record;
  }

  const donations = await ensureJsonLoaded();
  donations.unshift(record);
  await persistJson(donations);
  return record;
}

export async function updateDonation(
  id: string,
  patch: Partial<DonationInput>,
) {
  if (isMongoEnabled()) {
    const collection = getDb().collection<StoredDonation>("donations");
    const existing = await collection.findOne({ id }, { projection: { _id: 0 } });
    if (!existing) return null;

    const updated: StoredDonation = {
      ...existing,
      ...patch,
      updatedAt: new Date().toISOString(),
    };
    await collection.updateOne({ id }, { $set: updated });
    return updated;
  }

  const donations = await ensureJsonLoaded();
  const index = donations.findIndex((item) => item.id === id);
  if (index < 0) return null;

  const updated: StoredDonation = {
    ...donations[index],
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  donations[index] = updated;
  await persistJson(donations);
  return updated;
}

export async function deleteDonation(id: string) {
  if (isMongoEnabled()) {
    const result = await getDb()
      .collection<StoredDonation>("donations")
      .deleteOne({ id });
    return result.deletedCount > 0;
  }

  const donations = await ensureJsonLoaded();
  const next = donations.filter((item) => item.id !== id);
  if (next.length === donations.length) return false;
  await persistJson(next);
  return true;
}

/** One-time import from local JSON when the Mongo collection is empty. */
export async function migrateDonationsFromJsonIfNeeded() {
  if (!isMongoEnabled()) return;

  const collection = getDb().collection<StoredDonation>("donations");
  const count = await collection.countDocuments();
  if (count > 0) return;

  try {
    const raw = await readFile(DATA_FILE, "utf8");
    const records = JSON.parse(raw) as StoredDonation[];
    if (!records.length) return;
    await collection.insertMany(records);
    console.log(`Migrated ${records.length} donations from JSON to MongoDB`);
  } catch {
    // No local JSON to migrate
  }
}
