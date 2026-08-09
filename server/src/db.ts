import { MongoClient, type Db } from "mongodb";

let client: MongoClient | null = null;
let db: Db | null = null;

export function getMongoUri() {
  return process.env.MONGODB_URI?.trim() || "";
}

export function isMongoEnabled() {
  return Boolean(getMongoUri());
}

export async function connectMongo() {
  const uri = getMongoUri();
  if (!uri) {
    console.warn(
      "MONGODB_URI is not set. Falling back to local JSON files in server/data/.",
    );
    return null;
  }

  if (db) return db;

  client = new MongoClient(uri);
  await client.connect();

  const dbName = process.env.MONGODB_DB?.trim() || "sustained_life";
  db = client.db(dbName);

  await db.collection("submissions").createIndex({ type: 1, createdAt: -1 });
  await db.collection("submissions").createIndex({ id: 1 }, { unique: true });
  await db.collection("donations").createIndex({ id: 1 }, { unique: true });
  await db.collection("donations").createIndex({ donatedAt: -1 });

  console.log(`Connected to MongoDB database "${dbName}"`);
  return db;
}

export function getDb() {
  if (!db) {
    throw new Error("MongoDB is not connected. Call connectMongo() first.");
  }
  return db;
}

export async function closeMongo() {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}
