/**
 * Minimal `cn` helper for class name composition (copied feature uses object syntax).
 * For full Tailwind merge behavior, add `clsx` + `tailwind-merge` like the App Router starter.
 */
type CNInput = string | undefined | null | false | Record<string, boolean | undefined | null>;

export function cn(...inputs: CNInput[]): string {
  const parts: string[] = [];
  for (const input of inputs) {
    if (!input || typeof input === 'boolean') continue;
    if (typeof input === 'string') {
      parts.push(input);
      continue;
    }
    for (const [key, val] of Object.entries(input)) {
      if (val) parts.push(key);
    }
  }
  return parts.join(' ');
}
