const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  process.env.API_BASE_URL ??
  "http://localhost:8000";

export const apiRoutes = {
  users: `${API_BASE}/api/v1/users`,
  generateAudience: `${API_BASE}/api/v1/generate-audience`,
} as const;
