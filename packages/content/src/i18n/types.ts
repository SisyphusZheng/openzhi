/**
 * @lessjs/content/i18n - Type definitions
 *
 * Internationalization module for LessJS content.
 * Opt-in sub-module: pass `i18n` to lessContent() to enable.
 */
export interface LessI18nOptions {
  /** Available locale codes, e.g. ['en', 'zh'] */
  locales: string[];
  /** Default locale, e.g. 'en' */
  defaultLocale: string;
}
