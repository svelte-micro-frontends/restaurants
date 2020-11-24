import singleSpaSvelte from 'single-spa-svelte';
import App from './App.svelte';

/*
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
*/

const svelteLifecycles = singleSpaSvelte({
  component: App,
  domElementGetter: () => document.getElementById('single-spa-application:@feedme/restaurants'),
  props: { someData: 'data' }
});
export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
