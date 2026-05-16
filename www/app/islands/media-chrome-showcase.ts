/**
 * Media Chrome Showcase — Vanilla adapter demo (ssr: false)
 *
 * Renders Media Chrome's native Web Components (video player controls)
 * as a client-only island. Media Chrome directly manipulates real DOM
 * in connectedCallback(), so it cannot be SSR-rendered (ADR-0028).
 *
 * With `less.ssr: false`, the SSG pipeline skips this island's SSR
 * rendering and emits an empty custom element tag. The browser then
 * upgrades it on the client side.
 *
 * @lessjs/app island — auto-detected by adapter-vite.
 */
import 'media-chrome';
import { WithDsdHydration } from '@lessjs/adapter-vanilla';

// ADR-0028: globalThis.HTMLElement is guaranteed by the SSR entry code
// (imported from @lit-labs/ssr-dom-shim before island evaluation).
const MediaChromeBase = WithDsdHydration(globalThis.HTMLElement);

export const tagName = 'media-chrome-showcase';

// less.ssr: false — skip SSR rendering, client-only upgrade.
// Media Chrome manipulates real DOM in connectedCallback() and has no
// render(): string method. See ADR-0028 for the DOM simulation path.
export const less = { ssr: false };

export default class MediaChromeShowcase extends MediaChromeBase {
  static styles = `
    :host { display: block; }
    .mc-wrap {
      background: #000;
      border-radius: 8px;
      overflow: hidden;
      width: 100%;
      max-width: 480px;
    }
    media-controller {
      width: 100%;
      aspect-ratio: 16 / 9;
      --media-control-background: rgba(20, 20, 20, 0.9);
      --media-control-hover-background: rgba(40, 40, 40, 0.9);
      --media-icon-color: #e0e0e0;
      --media-range-thumb-color: #6366f1;
      --media-range-bar-color: #6366f1;
    }
    video { width: 100%; height: 100%; object-fit: cover; }
    .mc-label {
      color: #a1a1aa;
      font-size: 11px;
      margin-top: 6px;
      line-height: 1.5;
    }
  `;

  render(): string {
    // When DSD-hydrated, return empty to avoid duplicate DOM
    if (this._dsdHydrated) return '';

    return `
      <div class="mc-wrap">
        <media-controller>
          <video slot="media"
            src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBstwaxU/low.mp4"
            preload="none"
            crossorigin
            playsinline>
          </video>
          <media-poster-image slot="poster"
            src="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBstwaxU/thumbnail.webp?time=0">
          </media-poster-image>
          <media-control-bar>
            <media-play-button></media-play-button>
            <media-time-range></media-time-range>
            <media-time-display show-duration></media-time-display>
            <media-mute-button></media-mute-button>
            <media-volume-range></media-volume-range>
            <media-fullscreen-button></media-fullscreen-button>
          </media-control-bar>
        </media-controller>
      </div>
      <div class="mc-label">Media Chrome — pure vanilla Web Components via @lessjs/adapter-vanilla</div>
    `;
  }
}

// Guard: idempotent across SSR paths
try {
  customElements.define(tagName, MediaChromeShowcase);
} catch { /* already defined */ }
