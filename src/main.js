import singleSpaSvelte from 'single-spa-svelte';
import App from './App.svelte';

const svelteLifecycles = singleSpaSvelte({
  component: App,
  domElementGetter: () => document.getElementById('single-spa-application:@feedme/restaurants'),
  props: { someData: 'data' }
});
export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
