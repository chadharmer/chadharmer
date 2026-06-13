/**
 * Tiny className joiner — filters out falsy values.
 * Avoids pulling in clsx/tailwind-merge for a site this size.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
