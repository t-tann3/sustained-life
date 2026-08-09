import { config as loadEnv } from "dotenv";
import cors from "cors";
import express from "express";
import { connectMongo, isMongoEnabled } from "./db.js";
import { migrateDonationsFromJsonIfNeeded } from "./donations-store.js";
import { routes } from "./routes.js";
import { migrateSubmissionsFromJsonIfNeeded } from "./store.js";

// Local .env only; DigitalOcean / Vercel inject env vars in production.
loadEnv();

const app = express();
const port = Number(process.env.PORT ?? 4000);
const frontendOrigins = (
  process.env.FRONTEND_ORIGIN ??
  "http://localhost:3000,http://localhost:3001,http://localhost:3002"
)
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: frontendOrigins,
  }),
);
app.use(express.json());
app.use("/api", routes);

async function start() {
  await connectMongo();
  if (isMongoEnabled()) {
    await migrateSubmissionsFromJsonIfNeeded();
    await migrateDonationsFromJsonIfNeeded();
  }

  app.listen(port, () => {
    const storage = isMongoEnabled() ? "MongoDB" : "JSON files";
    console.log(`Sustained Life API listening on http://localhost:${port}`);
    console.log(`Storage: ${storage}`);
  });
}

start().catch((error) => {
  console.error("Failed to start API:", error);
  process.exit(1);
});
