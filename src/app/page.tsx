import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

const focuses = [
  {
    title: "Food & essentials",
    body: "Reliable support for households facing immediate need.",
  },
  {
    title: "Community care",
    body: "Local programs that keep neighbors connected and supported.",
  },
  {
    title: "Lasting opportunity",
    body: "Skills, resources, and pathways that outlast a single gift.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 px-6 py-6 sm:px-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between text-sm text-white/90">
          <a href="#mission" className="transition-opacity hover:opacity-80">
            Mission
          </a>
          <a href="#contact" className="transition-opacity hover:opacity-80">
            Contact
          </a>
        </nav>
      </header>

      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2400&q=80"
          alt="Community volunteers packing care packages together"
          fill
          priority
          className="animate-soft-zoom object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25" />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-28 sm:px-10 sm:pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <p className="animate-fade-up font-display text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
              Sustained Life
            </p>
            <div className="animate-draw-line mt-5 h-px w-24 bg-highlight" />
            <h1 className="animate-fade-up-delay mt-8 max-w-2xl font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              Care that communities can count on.
            </h1>
            <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              We partner with neighbors to meet urgent needs and build support
              that lasts.
            </p>
            <div className="animate-fade-up-delay-2 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-highlight px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-[#d4b56a]"
              >
                Get involved
              </a>
              <a
                href="#mission"
                className="inline-flex items-center justify-center border border-white/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/10"
              >
                Our mission
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="mission"
        className="scroll-mt-8 px-6 py-24 sm:px-10 sm:py-28"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Our mission
          </p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Dignity first. Support that stays.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Sustained Life exists to strengthen everyday wellbeing—helping
            people weather hard seasons without losing hope, agency, or
            community.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-surface px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Where we focus
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Practical help today, with programs designed to keep people
              steadier tomorrow.
            </p>
          </div>
          <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {focuses.map((item) => (
              <li key={item.title} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-8 px-6 py-24 sm:px-10 sm:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Contact
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight text-ink sm:text-4xl">
              Reach out
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Whether you want to volunteer, partner, or ask a question—we’d
              love to hear from you.
            </p>
          </div>
          <div className="border border-line bg-surface/80 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="mt-auto border-t border-line px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg text-ink">Sustained Life</p>
          <p>A nonprofit committed to lasting community care.</p>
        </div>
      </footer>
    </div>
  );
}
