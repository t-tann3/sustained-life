"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isLoggedIn, verifyAdminSecret } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) router.replace("/");
  }, [router]);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");

    try {
      await verifyAdminSecret(secret.trim());
      router.replace("/");
    } catch {
      setError("Could not sign in. Check the admin secret and that the API is running.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md border border-line bg-paper p-8 shadow-sm"
      >
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
          Sustained Life
        </p>
        <h1 className="mt-2 text-2xl font-bold text-forest">Admin sign in</h1>
        <p className="mt-2 text-sm text-muted">
          Enter the admin secret from your server environment to view submissions
          and donations.
        </p>

        <label className="mt-6 block text-sm font-semibold text-forest">
          Admin secret
          <input
            type="password"
            required
            value={secret}
            onChange={(event) => setSecret(event.target.value)}
            className="mt-2 min-h-12 w-full border border-line px-3 py-2"
            autoComplete="current-password"
          />
        </label>

        {error ? <p className="mt-3 text-sm font-semibold text-red-700">{error}</p> : null}

        <button
          type="submit"
          disabled={pending}
          className="mt-6 w-full bg-forest px-4 py-3 text-sm font-bold text-white disabled:opacity-60"
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
