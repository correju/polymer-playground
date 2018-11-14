import { html, LitElement, property } from '@polymer/lit-element';

const css = require('./index.scss') as string;

class BtnDanger extends LitElement {
  @property({type: Boolean})
  public btnSm = false;

  public render() {
    return html`
      <style>${css}</style>
      <button class="btn btn-danger ${this.btnSm ? 'btn-sm' : ''}"><slot></slot></button>
    `;
  }
}

window.customElements.define('btn-danger', BtnDanger);
