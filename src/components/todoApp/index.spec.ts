import { assert } from "chai";
import './index';

localStorage.setItem('todoList', `[{"done":false,"id":1542433322549,"item":"tomate"},{"done":false,"id":1542433325481,"item":"cebolla"},{"done":false,"id":1542433327598,"item":"carne"}]`);
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
  afterEach(() => {
    
  })
});