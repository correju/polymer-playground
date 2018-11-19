import page from 'page';

const setContent = ((selector) => (ctx, next) => {
  document.title = ctx.title;
  document.querySelector(selector).innerHTML = `<${ctx.component}></${ctx.component}>`;
  next();
})('main#view');

const setComponent = (component, title) => (ctx, next) => {
  ctx.title = title;
  ctx.component = component;
  next();
};

page('/', setComponent('todo-app', 'Home todo'), setContent);
page('/home', setComponent('home-app', 'dummy page'), setContent);
page({hashbang : true});
