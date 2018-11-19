import { html, LitElement, property } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { ITodoItem } from '../../interfaces/todoItem.interface';
import '../buttonClose';
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
      },
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
        <li class="list-item-wrapper">
          <div class="list-item-left-wrapper">
            <input
              class="list-item-checkbox"
              id="todo-state"
              @change="${(e) => this.toggleTodo(e)}"
              type="checkbox"
              ?checked=${this.todoItem.done} />
            <label
              class="list-item-label ${this.todoItem.done ? 'list-item-done' : ''}"
              for="todo-state">${this.todoItem.item}</label>
          </div>
          <btn-danger
            class="list-item-close"
            @click="${() => this.deleteItem()}"
            btnSm>x</btn-danger>
        </li>
      `;
    }
    return html``;
  }
}

customElements.define('list-item', ListItem);
