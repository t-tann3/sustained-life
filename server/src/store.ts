import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { StoredSubmission } from "./types.js";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");

let memory: StoredSubmission[] | null = null;

async function ensureLoaded() {
  if (memory) return memory;

  try {
    const raw = await readFile(DATA_FILE, "utf8");
    memory = JSON.parse(raw) as StoredSubmission[];
  } catch {
    memory = [];
  }

  return memory;
}

async function persist(submissions: StoredSubmission[]) {
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
  const submissions = await ensureLoaded();
  const record: StoredSubmission = {
    id: submission.id ?? randomUUID(),
    type: submission.type,
    createdAt: submission.createdAt ?? new Date().toISOString(),
    payload: submission.payload,
  };

  submissions.unshift(record);
  await persist(submissions);
  return record;
}

export async function listSubmissions(type?: StoredSubmission["type"]) {
  const submissions = await ensureLoaded();
  if (!type) return submissions;
  return submissions.filter((item) => item.type === type);
}
