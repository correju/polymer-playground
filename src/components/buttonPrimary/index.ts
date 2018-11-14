import { html, LitElement } from '@polymer/lit-element';

const css = require('./index.scss') as string;

class BtnPrimary extends LitElement {
  public render() {
    return html`
      <style>${css}</style>
      <button class="btn btn-primary"><slot></slot></button>
    `;
  }
}

window.customElements.define('btn-primary', BtnPrimary);
