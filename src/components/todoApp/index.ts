import { html, LitElement, property } from '@polymer/lit-element';
import { ITodoItem } from '../../interfaces/todoItem.interface';
import '../addItem';
import '../list-items';

class TodoApp extends LitElement {
  @property({type: Array})
  public todoList: ITodoItem[] = [];
  public updateTodoList() {
    const todoList = localStorage.getItem('todoList');
    this.todoList = todoList ? JSON.parse(todoList) : [];
  }
  private deleteTodo(event) {
    const todoList: ITodoItem[] = this.todoList.filter((e) => e.id !== event.detail.id);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    this.updateTodoList();
  }
  public toggleTodo(event) {
    const todoList: ITodoItem[] = this.todoList.map((e) => {
      if (e.id === event.detail.id) {
        return Object.assign({}, e, {done: !e.done});
      }
      return e;
    });
    localStorage.setItem('todoList', JSON.stringify(todoList));
    this.updateTodoList();
  }
  public firstUpdated() {
    this.updateTodoList();
  }
  public render() {
    return html`
        <h1>Todo List for Today</h1>
        <add-item
          @updateTodo="${() => this.updateTodoList()}">
        </add-item>
        <list-items
          @deleteTodo="${(e) => this.deleteTodo(e)}"
          @toggleTodo="${(e) => this.toggleTodo(e)}"
          .todoList="${this.todoList}">
        </list-items>
    `;
  }
}
customElements.define('todo-app', TodoApp);
