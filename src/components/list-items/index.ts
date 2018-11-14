import { html, LitElement, property } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { ITodoItem } from '../../interfaces/todoItem.interface';
import '../list-item';

const css = require('./index.scss') as string;

class ListItems extends LitElement {
    @property({type: Array})
    private todoList: ITodoItem[] = [];

    public render() {
      return html`
        <style>${css}</style>
        <ul>${repeat(
          this.todoList,
          (todoItem) => todoItem.id,
          (todoItem) => html`
            <list-item .todoItem="${todoItem}"></list-item>
          `,
        )}</ul>
      `;
    }
}

customElements.define('list-items', ListItems);
