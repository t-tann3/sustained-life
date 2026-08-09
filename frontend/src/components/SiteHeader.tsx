"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/lib/nav";
import { ButtonLink, Container } from "@/components/ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/12 bg-ivory/96 backdrop-blur-[14px]">
      <Container className="flex min-h-20 items-center gap-5">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center no-underline"
          aria-label="Sustained Life, Inc. home"
        >
          <Image
            src="/images/logo-header.png"
            alt="Sustained Life, Inc."
            width={220}
            height={56}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <button
          type="button"
          className="ml-auto inline-flex rounded-md border border-line px-3 py-2.5 font-extrabold text-forest md:hidden"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`${
            open
              ? "absolute inset-x-0 top-full block border-b border-line bg-ivory px-4 py-3 md:static md:border-0 md:bg-transparent md:p-0"
              : "hidden md:ml-auto md:block"
          }`}
        >
          <ul className="m-0 grid list-none grid-cols-2 gap-1 p-0 md:flex md:items-center md:gap-0.5">
            {primaryNav.map((item) => {
              const current =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block whitespace-nowrap rounded-[0.45rem] px-2.5 py-2 text-[0.86rem] font-bold no-underline transition-colors md:px-[0.58rem] ${
                      current
                        ? "bg-sage text-forest"
                        : "text-ink hover:bg-sage hover:text-forest"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <ButtonLink
          href="/donate"
          className="ml-1 hidden shrink-0 lg:inline-flex"
        >
          Support the Mission
        </ButtonLink>
      </Container>
    </header>
  );
}
