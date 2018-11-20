import page from 'page';

const setComponent = ((selector) => (component, title) => (ctx, next) => {
  document.title = title;
  document.querySelector(selector).innerHTML  = `<${component}></${component}>`;
  next();
})('main#view');

page.base('');
page('*', setComponent('not-found', 'Page not found'));
page('/', setComponent('todo-app', 'Home todo'));
page();
