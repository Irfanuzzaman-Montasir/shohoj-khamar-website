const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

function normalizedOrigin(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value.includes("://") ? value : `https://${value}`);
    return url.protocol === "https:" || url.protocol === "http:" ? url.origin : undefined;
  } catch {
    return undefined;
  }
}

function isLocalOrigin(origin: string): boolean {
  const hostname = new URL(origin).hostname;
  return (
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname === "127.0.0.1" ||
    hostname === "[::1]"
  );
}

const configuredOrigin = normalizedOrigin(configuredSiteUrl);
const vercelProductionOrigin = normalizedOrigin(
  vercelProductionHost ? `https://${vercelProductionHost}` : undefined,
);

// Never publish local development URLs as canonicals or sitemap entries.
export const siteBaseUrl =
  configuredOrigin && !isLocalOrigin(configuredOrigin) ? configuredOrigin : vercelProductionOrigin;

export function canonicalUrl(path: string): string | undefined {
  if (!siteBaseUrl) return undefined;
  return new URL(path, `${siteBaseUrl}/`).toString();
}

export function canonicalAlternates(path: string) {
  const canonical = canonicalUrl(path);
  return canonical ? { canonical } : undefined;
}
