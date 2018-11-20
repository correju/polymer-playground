import {html, LitElement} from '@polymer/lit-element';

export class NotFound extends LitElement {
  public render() {
    return html`
      <section>
        <h1>Oops page not found</h1>
        <p>Don't loose your self in this unknown path.</p>
      </section>
    `;
  }
}
customElements.define('not-found', NotFound);
