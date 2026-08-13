import Image from "next/image";

export function PhotoPlaceholder({
  label,
  title,
  note,
  ariaLabel,
  className = "",
  src,
  alt,
}: {
  label: string;
  title: string;
  note?: string;
  ariaLabel?: string;
  className?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      role="img"
      aria-label={ariaLabel || alt || `${label}: ${title}`}
      className={`relative flex min-h-56 flex-col justify-end gap-2 overflow-hidden p-6 text-white ${
        src
          ? "bg-forest-dark"
          : "bg-[linear-gradient(160deg,#0a2b25,#123f36_55%,#3f765d)]"
      } ${className}`}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt=""
            fill
            className="object-cover object-[center_20%]"
            sizes="(min-width: 1024px) 28vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,43,37,0.2),rgba(10,43,37,0.78))]" />
        </>
      ) : null}
      <span className="relative z-10 text-xs font-extrabold uppercase tracking-[0.14em] text-gold-soft">
        {label}
      </span>
      <strong className="relative z-10 font-display text-xl leading-snug">
        {title}
      </strong>
      {note ? (
        <small className="relative z-10 text-sm text-white/75">{note}</small>
      ) : null}
    </div>
  );
}
