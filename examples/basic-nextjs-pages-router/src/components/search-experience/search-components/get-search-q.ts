import type { ParsedUrlQuery } from 'querystring';

/** Read `q` from Pages Router `router.query` (string | string[] | undefined). */
export function getSearchQ(query: ParsedUrlQuery): string {
  const raw = query.q;
  if (typeof raw === 'string') return raw;
  if (Array.isArray(raw)) return raw[0] ?? '';
  return '';
}
