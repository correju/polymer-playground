import { html, LitElement, property } from '@polymer/lit-element';
import '../addItem';
import '../list-items';

class TodoApp extends LitElement {
    @property({type: Array})
    public todoList = [];
    private updateTodoList() {
        const todoList = localStorage.getItem('todoList');
        this.todoList = todoList ? JSON.parse(todoList) : [];
    }
    public firstUpdated() {
        this.updateTodoList();
    }
    public render() {
        return html`
            <add-item @updateTodo="${() => this.updateTodoList()}"></add-item>
            <list-items .todoList="${this.todoList}"></list-items>
        `;
    }
}
customElements.define('todo-app', TodoApp);
