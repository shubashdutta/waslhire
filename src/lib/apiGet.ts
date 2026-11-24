// src/lib/apiGet.ts

// src/lib/apiGet.ts

const BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.API_BASE_URL ||
  ""
).replace(/\/+$/, "");
export interface ApiGetOptions extends Omit<RequestInit, "method" | "body"> {
  params?: Record<string, string | number | boolean | undefined | null>;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

export async function apiGet<T = any>(
  endpoint: string,
  options?: ApiGetOptions,
): Promise<ApiResponse<T>> {
  const { params, headers, ...rest } = options || {};
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  let url = `${BASE_URL}${cleanEndpoint}`;

  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        searchParams.append(key, String(value));
      }
    });
    const query = searchParams.toString();
    if (query) url += `?${query}`;
  }

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      ...headers,
    },
    ...rest,
  });

  if (!res.ok) {
    throw new Error(`GET ${cleanEndpoint} failed: ${res.status}`);
  }

  const data: T = await res.json();

  return {
    data,
    status: res.status,
    statusText: res.statusText,
  };
}
