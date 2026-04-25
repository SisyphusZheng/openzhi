/**
 * Type augmentation for Vite's IndexHtmlTransformContext.
 *
 * This file extends the 'vite' module with a KISS-specific route metadata key.
 * It must be a separate .d.ts file because JSR does not allow
 * global type augmentation (declare module) in regular source files.
 */
import type { RouteMeta } from './types.js';

/** Route metadata key for Vite HTML transform context */
declare module 'vite' {
  interface IndexHtmlTransformContext {
    readonly __kissRouteMeta?: RouteMeta;
  }
}
