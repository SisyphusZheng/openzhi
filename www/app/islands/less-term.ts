/**
 * less-term-demo — Interactive terminal for the homepage.
 *
 * Proper LessJS Web Component: DsdLitElement + hydrateEvents.
 * - SSR renders DSD HTML (no JS needed for first paint)
 * - Client upgrades via WithDsdHydration mixin
 * - Event handlers bound declaratively via static hydrateEvents
 * - Dynamic output via direct DOM manipulation (no re-render)
 */
import { css, html, nothing } from 'lit';
import { DsdLitElement } from '@lessjs/adapter-lit';

export class LessTermDemo extends DsdLitElement {
  static override styles = css`
    :host { display: block; }
    .term { background: #09090b; border-radius: 10px; overflow: hidden; border: 0.5px solid #27272a; }
    .term-bar { display: flex; align-items: center; gap: 5px; padding: 10px 14px; background: #18181b; border-bottom: 0.5px solid #27272a; }
    .dot { width: 7px; height: 7px; border-radius: 50%; }
    .dot.r { background: #ef4444; }
    .dot.y { background: #eab308; }
    .dot.g { background: #22c55e; }
    .term-body { padding: 16px; font-family: "JetBrains Mono","Fira Code","SF Mono",Consolas,monospace; font-size: 12px; line-height: 1.9; color: #a1a1aa; min-height: 260px; overflow-y: auto; cursor: text; }
    .term-body .prompt { color: #fbbf24; }
    .term-body .hl { color: #7dd3fc; }
    .term-body .err { color: #ef4444; }
    .input-line { display: flex; align-items: center; gap: 6px; margin-top: 6px; }
    .input-line input { flex: 1; background: transparent; border: none; outline: none; color: #f4f4f5; font-family: inherit; font-size: inherit; padding: 0; caret-color: #f4f4f5; }
  `;

  static hydrateEvents = [
    { selector: '.term-body', event: 'click', method: '_focusInput' },
    { selector: 'input', event: 'keydown', method: '_onKey' },
  ];

  private _cmdHistory: string[] = [];
  private _historyIdx = -1;

  override render() {
    if (this._dsdHydrated) return nothing;
    return html`
      <div class="term">
        <div class="term-bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span></div>
        <div class="term-body">
          <div class="output">
            <div><span class="prompt">$</span> type <span class="hl">help</span> to get started</div>
          </div>
          <div class="input-line">
            <span class="prompt">$</span>
            <input type="text" autocomplete="off" spellcheck="false">
          </div>
        </div>
      </div>
    `;
  }

  private _focusInput() {
    this.shadowRoot?.querySelector<HTMLInputElement>('input')?.focus();
  }

  private _addLine(htmlStr: string) {
    const out = this.shadowRoot?.querySelector('.output');
    if (!out) return;
    const div = document.createElement('div');
    div.innerHTML = htmlStr;
    out.appendChild(div);
    const body = this.shadowRoot?.querySelector('.term-body');
    if (body) body.scrollTop = body.scrollHeight;
  }

  private async _onKey(e: Event) {
    const ke = e as KeyboardEvent;
    const input = ke.target as HTMLInputElement;

    if (ke.key === 'ArrowUp') {
      if (this._cmdHistory.length) {
        this._historyIdx = Math.max(0, this._historyIdx - 1);
        input.value = this._cmdHistory[this._historyIdx] || '';
      }
      ke.preventDefault();
      return;
    }
    if (ke.key === 'ArrowDown') {
      if (this._historyIdx < this._cmdHistory.length) {
        this._historyIdx = Math.min(this._cmdHistory.length, this._historyIdx + 1);
        input.value = this._cmdHistory[this._historyIdx] || '';
      }
      ke.preventDefault();
      return;
    }
    if (ke.key !== 'Enter') return;

    const cmd = input.value.trim();
    input.value = '';
    this._cmdHistory.push(cmd);
    this._historyIdx = this._cmdHistory.length;
    this._addLine(`<span class="prompt">$</span> ${cmd}`);

    if (cmd.toLowerCase() === 'clear') {
      const out = this.shadowRoot?.querySelector('.output');
      if (out) out.innerHTML = '';
      return;
    }

    try {
      const res = await fetch('/api/term', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cmd }),
      });
      const data = await res.json();
      if (data.output) for (const line of data.output) this._addLine(line);
    } catch {
      this._addLine('<span class="err">error: could not reach api</span>');
    }
  }
}

customElements.define('less-term-demo', LessTermDemo);
