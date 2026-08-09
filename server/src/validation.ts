export function trim(value: unknown) {
  return String(value ?? "").trim();
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function asBoolean(value: unknown) {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    return ["true", "on", "1", "yes"].includes(value.toLowerCase());
  }
  return Boolean(value);
}
