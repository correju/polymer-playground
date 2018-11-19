import { assert } from "chai";
import './index';
const mock = [
  { done: false, id: 1542433322549, item: "Test 1" },
  { done: false, id: 1542433325481, item: "Test 3" },
  { done: false, id: 1542433327598, item: "Test 4" },
];
localStorage.setItem('todoList', JSON.stringify(mock));
let element;

describe('main', () => {
  beforeEach(() => {
   element = document.createElement("todo-app");
   document.querySelector('body').appendChild(element);
  });
  describe('test', () => {
    it('Checks that header tag was added to shadowRoot', (done) => {
      (async () => {
        const res = await element.updateComplete;
        const header = element.shadowRoot.querySelector('h1');
        assert.notEqual(header, null);
        done();
      })();
    });
  });
});
