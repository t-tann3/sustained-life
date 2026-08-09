export function PhotoPlaceholder({
  label,
  title,
  note,
  ariaLabel,
  className = "",
}: {
  label: string;
  title: string;
  note?: string;
  ariaLabel?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={ariaLabel || `${label}: ${title}`}
      className={`flex min-h-56 flex-col justify-end gap-2 bg-[linear-gradient(160deg,#0a2b25,#123f36_55%,#3f765d)] p-6 text-white ${className}`}
    >
      <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold-soft">
        {label}
      </span>
      <strong className="font-display text-xl leading-snug">{title}</strong>
      {note ? <small className="text-sm text-white/75">{note}</small> : null}
    </div>
  );
}
