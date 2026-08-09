import type { NextFunction, Request, Response } from "express";

export function getAdminSecret() {
  return process.env.SUBMISSIONS_ADMIN_SECRET || process.env.ADMIN_SECRET || "";
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const secret = getAdminSecret();
  const provided =
    (req.header("x-admin-secret") as string | undefined) ??
    (typeof req.query.secret === "string" ? req.query.secret : undefined);

  if (!secret || provided !== secret) {
    res.status(401).json({ ok: false, message: "Unauthorized." });
    return;
  }

  next();
}
