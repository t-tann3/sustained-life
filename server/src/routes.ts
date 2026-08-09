import { Router } from "express";
import { requireAdmin } from "./auth.js";
import {
  handleContactSubmission,
  parseContactInput,
} from "./handlers/contact.js";
import {
  handleCreateDonation,
  handleDeleteDonation,
  handleUpdateDonation,
  parseDonationInput,
} from "./handlers/donations.js";
import {
  handleMethodRequestSubmission,
  parseMethodRequestInput,
} from "./handlers/method-request.js";
import {
  handleNewsletterSubmission,
  parseNewsletterInput,
} from "./handlers/newsletter.js";
import { getAdminStats } from "./handlers/stats.js";
import { listDonations } from "./donations-store.js";
import { listSubmissions } from "./store.js";
import type { SubmissionType } from "./types.js";

const VALID_TYPES = new Set<SubmissionType>([
  "contact",
  "method-request",
  "newsletter",
]);

export const routes = Router();

routes.get("/health", (_req, res) => {
  res.json({ ok: true, service: "sustained-life-server" });
});

routes.post("/contact", async (req, res) => {
  const result = await handleContactSubmission(
    parseContactInput(req.body ?? {}),
  );
  res.status(result.ok ? 201 : 400).json(result);
});

routes.post("/method-request", async (req, res) => {
  const result = await handleMethodRequestSubmission(
    parseMethodRequestInput(req.body ?? {}),
  );
  res.status(result.ok ? 201 : 400).json(result);
});

routes.post("/newsletter", async (req, res) => {
  const result = await handleNewsletterSubmission(
    parseNewsletterInput(req.body ?? {}),
  );
  res.status(result.ok ? 201 : 400).json(result);
});

routes.get("/submissions", requireAdmin, async (req, res) => {
  const typeParam = typeof req.query.type === "string" ? req.query.type : "";
  const type = VALID_TYPES.has(typeParam as SubmissionType)
    ? (typeParam as SubmissionType)
    : undefined;

  const submissions = await listSubmissions(type);
  res.json({ ok: true, count: submissions.length, submissions });
});

routes.get("/admin/stats", requireAdmin, async (_req, res) => {
  const stats = await getAdminStats();
  res.json({ ok: true, stats });
});

routes.get("/admin/donations", requireAdmin, async (_req, res) => {
  const donations = await listDonations();
  res.json({ ok: true, count: donations.length, donations });
});

routes.post("/admin/donations", requireAdmin, async (req, res) => {
  const result = await handleCreateDonation(parseDonationInput(req.body ?? {}));
  res.status(result.ok ? 201 : 400).json(result);
});

routes.patch("/admin/donations/:id", requireAdmin, async (req, res) => {
  const id = String(req.params.id);
  const result = await handleUpdateDonation(id, req.body ?? {});
  res.status(result.ok ? 200 : result.message === "Donation not found." ? 404 : 400).json(result);
});

routes.delete("/admin/donations/:id", requireAdmin, async (req, res) => {
  const id = String(req.params.id);
  const result = await handleDeleteDonation(id);
  res.status(result.ok ? 200 : 404).json(result);
});
