import { html, LitElement, property } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat';
const css = require('./index.scss') as string;

class ListItems extends LitElement {
    @property({type: Array})
    private todoList = [];
    public render() {
      return html`
        <style>${css}</style>
        <ol>${repeat(
          this.todoList,
          (todo) => todo.id,
          (item) => html`
            <li>${item.item}</li>
          `,
        )}</ol>
      `;
    }
}

customElements.define('list-items', ListItems);
