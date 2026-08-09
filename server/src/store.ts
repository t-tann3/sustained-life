import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { getDb, isMongoEnabled } from "./db.js";
import type { StoredSubmission } from "./types.js";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");

let memory: StoredSubmission[] | null = null;

async function ensureJsonLoaded() {
  if (memory) return memory;

  try {
    const raw = await readFile(DATA_FILE, "utf8");
    memory = JSON.parse(raw) as StoredSubmission[];
  } catch {
    memory = [];
  }

  return memory;
}

async function persistJson(submissions: StoredSubmission[]) {
  memory = submissions;

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), "utf8");
  } catch (error) {
    console.warn("Could not persist submissions to disk:", error);
  }
}

export async function saveSubmission(
  submission: Omit<StoredSubmission, "id" | "createdAt"> & {
    id?: string;
    createdAt?: string;
  },
) {
  const record: StoredSubmission = {
    id: submission.id ?? randomUUID(),
    type: submission.type,
    createdAt: submission.createdAt ?? new Date().toISOString(),
    payload: submission.payload,
  };

  if (isMongoEnabled()) {
    await getDb().collection<StoredSubmission>("submissions").insertOne(record);
    return record;
  }

  const submissions = await ensureJsonLoaded();
  submissions.unshift(record);
  await persistJson(submissions);
  return record;
}

export async function listSubmissions(type?: StoredSubmission["type"]) {
  if (isMongoEnabled()) {
    const filter = type ? { type } : {};
    return getDb()
      .collection<StoredSubmission>("submissions")
      .find(filter, { projection: { _id: 0 } })
      .sort({ createdAt: -1 })
      .toArray();
  }

  const submissions = await ensureJsonLoaded();
  if (!type) return submissions;
  return submissions.filter((item) => item.type === type);
}

/** One-time import from local JSON when the Mongo collection is empty. */
export async function migrateSubmissionsFromJsonIfNeeded() {
  if (!isMongoEnabled()) return;

  const collection = getDb().collection<StoredSubmission>("submissions");
  const count = await collection.countDocuments();
  if (count > 0) return;

  try {
    const raw = await readFile(DATA_FILE, "utf8");
    const records = JSON.parse(raw) as StoredSubmission[];
    if (!records.length) return;
    await collection.insertMany(records);
    console.log(`Migrated ${records.length} submissions from JSON to MongoDB`);
  } catch {
    // No local JSON to migrate
  }
}
