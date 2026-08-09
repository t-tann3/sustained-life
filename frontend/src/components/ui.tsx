import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-[min(calc(100%-2rem),var(--max))] ${narrow ? "max-w-3xl" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-2.5 text-[0.78rem] font-extrabold uppercase tracking-[0.14em] ${
        light ? "text-white" : "text-forest"
      }`}
    >
      {children}
    </p>
  );
}

export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`max-w-3xl text-[clamp(1.08rem,2vw,1.35rem)] leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
}

type ButtonVariant = "primary" | "gold" | "outline" | "outline-light";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-forest !text-white hover:bg-forest-dark hover:!text-white focus:!text-white visited:!text-white",
  gold: "border-transparent bg-gold-soft !text-forest-dark hover:bg-[#ffd98f] hover:!text-forest-dark focus:!text-forest-dark visited:!text-forest-dark",
  outline:
    "border-forest bg-transparent !text-forest hover:bg-forest hover:!text-white focus:!text-forest visited:!text-forest",
  "outline-light":
    "border-white/70 bg-transparent !text-white hover:border-white hover:bg-transparent hover:!text-white focus:!text-white visited:!text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`btn-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 px-[1.15rem] py-3 text-center text-sm font-extrabold no-underline transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5 ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Section({
  children,
  tint = false,
  dark = false,
  compact = false,
  id,
  className = "",
}: {
  children: ReactNode;
  tint?: boolean;
  dark?: boolean;
  compact?: boolean;
  id?: string;
  className?: string;
}) {
  const padding = compact
    ? "py-12"
    : "py-[clamp(4rem,8vw,7rem)]";
  const tone = dark
    ? "bg-forest text-paper [&_a]:text-white [&_h2]:text-paper [&_h3]:text-paper"
    : tint
      ? "bg-sage text-ink"
      : "bg-transparent text-ink";

  return (
    <section id={id} className={`${padding} ${tone} ${className}`}>
      {children}
    </section>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.25rem] border border-line bg-paper p-[clamp(1.4rem,3vw,2rem)] shadow-[0_8px_30px_rgba(18,63,54,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  actions,
}: {
  crumbs: { label: string; href?: string }[];
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_15%,rgba(197,138,42,0.33),transparent_30%),linear-gradient(135deg,var(--forest-dark),var(--forest))] py-[clamp(4rem,8vw,7rem)] text-white">
      <div className="pointer-events-none absolute -right-32 -bottom-48 h-[34rem] w-[34rem] rounded-full border border-white/18 shadow-[0_0_0_4rem_rgba(255,255,255,0.035),0_0_0_8rem_rgba(255,255,255,0.025)]" />
      <Container className="relative z-10 max-w-[59rem]">
        <p className="mb-4 text-[0.9rem] text-[#d9e7e0]">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`}>
              {index > 0 ? " / " : null}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="!text-white no-underline hover:!text-white/80 focus:!text-white visited:!text-white"
                >
                  {crumb.label}
                </Link>
              ) : (
                crumb.label
              )}
            </span>
          ))}
        </p>
        {eyebrow ? <Eyebrow light>{eyebrow}</Eyebrow> : null}
        <h1 className="mb-4 font-display text-[clamp(2.6rem,6vw,4.9rem)] leading-[1.12] tracking-[-0.045em] text-balance text-paper">
          {title}
        </h1>
        {lead ? (
          <div className="max-w-[49rem] text-[clamp(1.08rem,2vw,1.35rem)] text-[#e7f0eb]">
            {lead}
          </div>
        ) : null}
        {actions ? (
          <div className="mt-7 flex flex-wrap gap-3">{actions}</div>
        ) : null}
      </Container>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item) => (
        <li key={item} className="relative my-2.5 pl-7 before:absolute before:left-0 before:font-black before:text-leaf before:content-['✓']">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-4 border-gold bg-[#fff8e9] px-5 py-4">
      {children}
    </div>
  );
}
