/**
 * @lessjs/i18n - Route helpers for i18n
 *
 * Helpers for creating locale-aware routes in LessJS.
 */
import { getI18nLocales } from './i18n-data.ts';

/**
 * Generate getStaticPaths() return for locale-aware routes.
 *
 * Auto-picks up configured locales from lessI18n({ locales }).
 *
 * Usage in route file:
 * ```ts
 * import { i18nStaticPaths } from '@lessjs/i18n';
 *
 * export function getStaticPaths() {
 *   return i18nStaticPaths(); // → [{ locale: 'en' }, { locale: 'zh' }]
 * }
 * ```
 */
export function i18nStaticPaths(
  locales?: string[],
): Array<Record<string, string>> {
  const localeList = locales ?? getI18nLocales();
  return localeList.map((locale) => ({ locale }));
}

/**
 * Switch a URL path to a different locale.
 * e.g. switchLocale('/en/guide/overview', 'zh') → '/zh/guide/overview'
 *      switchLocale('/guide/overview', 'zh', 'en') → '/zh/guide/overview'
 */
export function switchLocale(
  currentPath: string,
  targetLocale: string,
  locales: string[] = getI18nLocales(),
): string {
  // Strip any existing locale prefix
  let stripped = currentPath;
  for (const loc of locales) {
    if (stripped === `/${loc}` || stripped.startsWith(`/${loc}/`)) {
      stripped = stripped.slice(loc.length + 1) || '/';
      break;
    }
  }
  // Prepend target locale
  return `/${targetLocale}${stripped}`;
}
