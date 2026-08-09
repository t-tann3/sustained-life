"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { clearAdminSecret } from "@/lib/api";
import { AuthGate } from "@/components/AuthGate";

const nav = [
  { href: "/", label: "Overview" },
  { href: "/messages", label: "Messages" },
  { href: "/donations", label: "Donations" },
  { href: "/newsletter", label: "Newsletter" },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    clearAdminSecret();
    router.replace("/login");
  }

  return (
    <AuthGate>
      <div className="min-h-screen">
        <header className="border-b border-line bg-paper">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                Sustained Life
              </p>
              <h1 className="text-lg font-bold text-forest">Admin</h1>
            </div>
            <nav className="flex flex-wrap gap-1">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-sm font-semibold no-underline ${
                      active
                        ? "bg-sage text-forest"
                        : "text-ink hover:bg-sage/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <button
              type="button"
              onClick={logout}
              className="rounded-md border border-line px-3 py-2 text-sm font-semibold text-forest"
            >
              Sign out
            </button>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </div>
    </AuthGate>
  );
}
