import { LitElement, html } from '@polymer/lit-element'

const css = <string>require('./index.scss');

class BtnSecondary extends LitElement {
  
  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  render() {
    return html`
      <style>${css}</style>
      <button class="btn btn-secondary"><slot></slot></button>
    `;
  }
}

window.customElements.define('btn-secondary', BtnSecondary)
