import { LitElement, html, property } from '@polymer/lit-element'
import { repeat } from 'lit-html/directives/repeat'
import '../buttonPrimary'
import '../buttonSecondary'
console.log('comp')
// const css = <string>require('./index.scss');

class MyComponent extends LitElement {
  @property({type: Array})
  photos = [
    { id: 201, userId: 1, title: 'Mop the floor', completed: false },
    { id: 202, userId: 10, title: 'Prepare fancy salad', completed: true },
    { id: 203, userId: 2, title: 'Get a funky haircut', completed: false }
  ];

  constructor() {
    super();
  }
  private clickHandler (e) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(async json => {
          this.photos = [...json, ...this.photos]
          await this.updateComplete;
        })
  }
  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  render() {
    return html`
      <ol>${repeat(
        this.photos,
        todo => todo.id,
        item => html`
          <li>
            <h5>${item.title}</h5>
          </li>
        `
      )}</ol>
      <btn-primary @click="${(e) => this.clickHandler(e)}">Click</btn-primary>
      <btn-secondary @click="${(e) => this.clickHandler(e)}">Click</btn-secondary>
    `;
  }
}

window.customElements.define('my-component', MyComponent)