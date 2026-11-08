const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const candidateSiteUrl = configuredSiteUrl || (vercelProductionHost ? `https://${vercelProductionHost}` : undefined);

function normalizedOrigin(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value.includes("://") ? value : `https://${value}`);
    return url.protocol === "https:" || url.protocol === "http:" ? url.origin : undefined;
  } catch {
    return undefined;
  }
}

export const siteBaseUrl = normalizedOrigin(candidateSiteUrl);

export function canonicalUrl(path: string): string | undefined {
  if (!siteBaseUrl) return undefined;
  return new URL(path, `${siteBaseUrl}/`).toString();
}

export function canonicalAlternates(path: string) {
  const canonical = canonicalUrl(path);
  return canonical ? { canonical } : undefined;
}
