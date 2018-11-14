import { html, LitElement } from '@polymer/lit-element';

const css = require('./index.scss');

class BtnSecondary extends LitElement {
  public render() {
    return html`
      <style>${css}</style>
      <button class="btn btn-secondary"><slot></slot></button>
    `;
  }
}

window.customElements.define('btn-secondary', BtnSecondary);
