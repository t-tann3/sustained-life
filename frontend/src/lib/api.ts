export type ApiResult = {
  ok: boolean;
  message: string;
  errors?: string[];
};

const DEFAULT_API_BASE = "http://localhost:4000";

export function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || DEFAULT_API_BASE
  );
}

export async function postJson<T extends object>(
  path: string,
  body: T,
): Promise<ApiResult> {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = (await response.json()) as ApiResult;
  return result;
}
