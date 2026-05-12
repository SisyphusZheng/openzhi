/**
 * less-term-demo — Interactive terminal island for homepage.
 *
 * Proper LessJS Web Component: LitElement with Shadow DOM.
 * Imported by the homepage route to ensure SSR bundle includes it.
 */
import { css, html, LitElement } from 'lit';

export class LessTermDemo extends LitElement {
  static override styles = css`
    :host { display: block; }
    .term { background: #09090b; border-radius: 10px; overflow: hidden; border: 0.5px solid #27272a; }
    .term-bar { display: flex; align-items: center; gap: 5px; padding: 10px 14px; background: #18181b; border-bottom: 0.5px solid #27272a; }
    .dot { width: 7px; height: 7px; border-radius: 50%; }
    .dot.r { background: #ef4444; }
    .dot.y { background: #eab308; }
    .dot.g { background: #22c55e; }
    .term-body { padding: 16px; font-family: "JetBrains Mono","Fira Code","SF Mono",Consolas,monospace; font-size: 12px; line-height: 1.9; color: #a1a1aa; min-height: 260px; overflow-y: auto; }
    .term-body .prompt { color: #fbbf24; }
    .term-body .hl { color: #7dd3fc; }
    .term-body .err { color: #ef4444; }
    .input-line { display: flex; align-items: center; gap: 6px; margin-top: 6px; }
    .input-line input { flex: 1; background: transparent; border: none; outline: none; color: #f4f4f5; font-family: inherit; font-size: inherit; padding: 0; caret-color: #f4f4f5; }
    .output { white-space: pre-wrap; }
  `;

  private _output: string[] = [];
  private _cmdHistory: string[] = [];
  private _historyIdx = -1;

  override render() {
    return html`
      <div class="term">
        <div class="term-bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span></div>
        <div class="term-body" @click=${this._focusInput}>
          <div class="output">
            ${this._output.length === 0
              ? html`<div><span class="prompt">$</span> type <span class="hl">help</span> to get started</div>`
              : this._output.map(l => html`<div>${l}</div>`)}
          </div>
          <div class="input-line">
            <span class="prompt">$</span>
            <input type="text" autocomplete="off" spellcheck="false" @keydown=${this._onKey}>
          </div>
        </div>
      </div>
    `;
  }

  private _focusInput() {
    const inp = this.shadowRoot?.querySelector('input');
    inp?.focus();
  }

  private async _onKey(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;
    if (e.key !== 'Enter') {
      if (e.key === 'ArrowUp') {
        if (this._cmdHistory.length) {
          this._historyIdx = Math.max(0, this._historyIdx - 1);
          input.value = this._cmdHistory[this._historyIdx] || '';
        }
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        if (this._historyIdx < this._cmdHistory.length) {
          this._historyIdx = Math.min(this._cmdHistory.length, this._historyIdx + 1);
          input.value = this._cmdHistory[this._historyIdx] || '';
        }
        e.preventDefault();
      }
      return;
    }
    const cmd = input.value.trim();
    input.value = '';
    this._cmdHistory.push(cmd);
    this._historyIdx = this._cmdHistory.length;
    this._output.push(`<span class="prompt">$</span> ${cmd}`);
    if (cmd.toLowerCase() === 'clear') { this._output = []; this.requestUpdate(); return; }
    this.requestUpdate();
    try {
      const res = await fetch('/api/term', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cmd }),
      });
      const data = await res.json();
      if (data.output) for (const line of data.output) this._output.push(line);
    } catch {
      this._output.push('<span class="err">error: could not reach api</span>');
    }
    this.requestUpdate();
    requestAnimationFrame(() => {
      const body = this.shadowRoot?.querySelector('.term-body');
      if (body) body.scrollTop = body.scrollHeight;
    });
  }
}

customElements.define('less-term-demo', LessTermDemo);
