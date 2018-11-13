import { html, LitElement , property} from '@polymer/lit-element';
import '../buttonPrimary';
const css = require('./index.scss') as string;

class AddItem extends LitElement {
  @property({type: Array})
  public todoList = [];
  @property({type: String})
  public todoItem = '';

  constructor() {
    super();
  }
  private inputKeyPress(e) {
    if (e.keyCode === 13) {
      this.onAddItem();
    } else {
      this.todoItem = e.target.value;
    }
  }
  private onAddItem() {
    if (this.todoItem.length === 0) {
      return;
    }
    const todoList = localStorage.getItem('todoList');
    this.todoList = todoList ? JSON.parse(todoList) : [];
    this.todoList = [...this.todoList,
      {
        done: false,
        id: new Date().valueOf(),
        item: this.todoItem,
      },
    ];
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    this.todoItem = '';
    this.dispatchEvent(new CustomEvent('updateTodo', {composed: true, bubbles: true}));
  }
  public render() {
    return html`
      <style>${css}</style>
      <div class="input-group">
        <input
          class="input"
          type="text"
          @keyup="${(e) => this.inputKeyPress(e)}"
          .value=${this.todoItem} />
          <btn-primary
            class="input-container btn btn-primary"
            @click="${() => this.onAddItem()}">Add</btn-primary>
      </div>
    `;
  }
}

customElements.define('add-item', AddItem);
