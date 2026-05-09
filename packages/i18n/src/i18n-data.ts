/**
 * @lessjs/i18n - Runtime i18n data store
 *
 * Stores locale configuration set by lessI18n() plugin.
 * Used during SSG build and route-level helpers.
 */
import type { LessI18nOptions } from './types.ts';

let _options: LessI18nOptions | null = null;

export function initI18nData(opts: LessI18nOptions): void {
  _options = { ...opts };
}

export function getI18nOptions(): LessI18nOptions | null {
  return _options;
}

export function getI18nLocales(): string[] {
  return _options?.locales ?? [];
}

export function getDefaultLocale(): string {
  return _options?.defaultLocale ?? 'en';
}
