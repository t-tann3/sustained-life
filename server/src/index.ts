import "dotenv/config";
import cors from "cors";
import express from "express";
import { routes } from "./routes.js";

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

app.listen(port, () => {
  console.log(`Sustained Life API listening on http://localhost:${port}`);
});
