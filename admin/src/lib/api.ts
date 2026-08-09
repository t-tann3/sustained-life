const DEFAULT_API_BASE = "http://localhost:4000";
const SECRET_KEY = "sl_admin_secret";

export function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || DEFAULT_API_BASE
  );
}

export function getAdminSecret() {
  if (typeof window === "undefined") return "";
  return sessionStorage.getItem(SECRET_KEY) ?? "";
}

export function setAdminSecret(secret: string) {
  sessionStorage.setItem(SECRET_KEY, secret);
}

export function clearAdminSecret() {
  sessionStorage.removeItem(SECRET_KEY);
}

export function isLoggedIn() {
  return Boolean(getAdminSecret());
}

async function adminFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const secret = getAdminSecret();
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "x-admin-secret": secret,
      ...(init?.headers ?? {}),
    },
  });

  const data = (await response.json()) as T & { ok?: boolean; message?: string };

  if (response.status === 401) {
    clearAdminSecret();
    throw new Error("Unauthorized");
  }

  if (!response.ok || (data && "ok" in data && data.ok === false)) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export type AdminStats = {
  contacts: number;
  methodRequests: number;
  newsletterSubscribers: number;
  donations: {
    count: number;
    receivedCount: number;
    totalReceived: number;
    totalPledged: number;
    currency: string;
  };
};

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  organization?: string;
  topic: string;
  message: string;
};

export type MethodRequestPayload = {
  firstName: string;
  lastName: string;
  email: string;
  organization?: string;
  interest: string;
  message: string;
};

export type NewsletterPayload = {
  email: string;
};

export type Submission = {
  id: string;
  type: "contact" | "method-request" | "newsletter";
  createdAt: string;
  payload:
    | ContactPayload
    | MethodRequestPayload
    | NewsletterPayload
    | Record<string, unknown>;
};

export type Donation = {
  id: string;
  donorName: string;
  email?: string;
  amount: number;
  currency: string;
  method: string;
  status: "pledged" | "received" | "refunded";
  notes?: string;
  donatedAt: string;
  createdAt: string;
  updatedAt: string;
};

export async function verifyAdminSecret(secret: string) {
  const response = await fetch(`${getApiBaseUrl()}/api/admin/stats`, {
    headers: { "x-admin-secret": secret },
  });
  if (!response.ok) {
    throw new Error("Invalid admin secret");
  }
  setAdminSecret(secret);
  return response.json();
}

export function fetchStats() {
  return adminFetch<{ ok: true; stats: AdminStats }>("/api/admin/stats");
}

export function fetchSubmissions(type?: Submission["type"]) {
  const query = type ? `?type=${encodeURIComponent(type)}` : "";
  return adminFetch<{ ok: true; count: number; submissions: Submission[] }>(
    `/api/submissions${query}`,
  );
}

export function fetchDonations() {
  return adminFetch<{ ok: true; count: number; donations: Donation[] }>(
    "/api/admin/donations",
  );
}

export function createDonation(body: Omit<Donation, "id" | "createdAt" | "updatedAt">) {
  return adminFetch<{ ok: true; message: string }>("/api/admin/donations", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function updateDonationStatus(id: string, status: Donation["status"]) {
  return adminFetch<{ ok: true; message: string }>(`/api/admin/donations/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
}

export function deleteDonation(id: string) {
  return adminFetch<{ ok: true; message: string }>(`/api/admin/donations/${id}`, {
    method: "DELETE",
  });
}

export function formatMoney(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}
