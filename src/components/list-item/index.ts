import { html, LitElement, property } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { ITodoItem } from '../../interfaces/todoItem.interface';
import '../buttonDanger';
const css = require('./index.scss') as string;

class ListItem extends LitElement {
  @property({type: Object})
  private todoItem: ITodoItem = {
    done: false,
    id: undefined,
    item: undefined,
  };
  private toggleTodo(e) {
    this.dispatchEvent(new CustomEvent('toggleTodo', {
      bubbles: true,
      composed: true,
      detail: {
        id: this.todoItem.id,
      }
    }));
  }
  private deleteItem() {
    this.dispatchEvent(new CustomEvent('deleteTodo', {
      bubbles: true,
      composed: true,
      detail: {
        id: this.todoItem.id,
      }}));
  }
  public render() {
    const btnSm = 'hola';
    if (this.todoItem.item) {
      return html`
        <style>${css}</style>
        <li>
          <label class="${this.todoItem.done ? 'done': ''}" for="todo-state">${this.todoItem.item}</label>
          <input id="todo-state" @change="${(e) => this.toggleTodo(e)}" type="checkbox" ?checked=${this.todoItem.done} />
          <btn-danger @click="${() => this.deleteItem()}" btnSm="1">Delete</btn-danger>
        </li>
      `;
    }
    return html``;
  }
}

customElements.define('list-item', ListItem);
