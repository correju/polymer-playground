const Navigo = require('navigo/lib/navigo');

interface IComponentLoader {
  component: string;
  title: string;
  lazyModule?: boolean;
}

const loadModule = async ({component, params, query }) => {
  switch (component) {
    default:
      appendComponent({component, params, query});
      const NotFound = await import(/* webpackChunkName: "not_found" */ './components/notFound');
      break;
  }
};

const appendComponent = ((selector) => ({component, params, query}) => {
  document.querySelector(selector).innerHTML  = `<${component}></${component}>`;
})('main#view');

const setComponent = ({component, title, lazyModule}: IComponentLoader) => (params, query) => {
  document.title = title;
  if (lazyModule) {
    loadModule({component, params, query});
  }
  else {
    appendComponent({component, params, query});
  }
};
const root = `${location.protocol}//${location.host}`;
const useHash = false;
const hash = '#';
const router = new Navigo(root, useHash, hash);

router
  .on('/',  setComponent({component: 'todo-app', title: 'Home todo'}))
  .notFound(setComponent({component: 'not-found', title: 'Page not found', lazyModule: true}))
  .resolve();


