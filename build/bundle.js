!function(t){"use strict";function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n,o,r=e((function(t,e){function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("object"!==c(t))throw new Error("single-spa-svelte requires a configuration object");var e=o(o({},u),t);if(!e.component)throw new Error("single-spa-svelte must be passed opts.component");var n={};return{bootstrap:l.bind(null,e,n),mount:i.bind(null,e,n),unmount:s.bind(null,e,n),update:a.bind(null,e,n)}};var u={component:null,domElementGetter:null,props:{}};function l(t){return Promise.resolve()}function i(t,e,n){var r=Object.keys(u),c=Object.keys(t).reduce((function(e,n){return r.includes(n)||(e[n]=t[n]),e}),{});return Promise.resolve().then((function(){var r=function(t,e){return(e=e&&e.customProps?e.customProps:e).domElement?function(){return e.domElement}:e.domElementGetter?e.domElementGetter:t.domElementGetter?t.domElementGetter:function(t){var e=t.appName||t.name;if(!e)throw Error("single-spa-svelte was not given an application name as a prop, so it can't make a unique dom element container for the svelte application");var n="single-spa-application:".concat(e);return function(){var t=document.getElementById(n);return t||((t=document.createElement("div")).id=n,document.body.appendChild(t)),t}}(e)}(t,n)();e.instance=new t.component(o(o({},c),{},{target:r,props:Object.assign({},n,t.props)}))}))}function s(t,e){return Promise.resolve().then((function(){e.instance.$destroy?e.instance.$destroy():e.instance.destroy()}))}function a(t,e,n){return Promise.resolve().then((function(){e.instance.$set?e.instance.$set(n):e.instance.set(n)}))}}(o={path:n,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&o.path)}},o.exports),o.exports));function c(){}function u(t){return t()}function l(){return Object.create(null)}function i(t){t.forEach(u)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function b(){return h(" ")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let $;function v(t){$=t}function k(){if(!$)throw new Error("Function called outside component initialization");return $}const x=[],O=[],E=[],j=[],w=Promise.resolve();let _=!1;function P(t){E.push(t)}let S=!1;const C=new Set;function D(){if(!S){S=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];v(e),G(e.$$)}for(v(null),x.length=0;O.length;)O.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];C.has(e)||(C.add(e),e())}E.length=0}while(x.length);for(;j.length;)j.pop()();_=!1,S=!1,C.clear()}}function G(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const q=new Set;let A;function N(t,e){t&&t.i&&(q.delete(t),t.i(e))}function M(t,e){const n=e.token={};function o(t,o,r,c){if(e.token!==n)return;e.resolved=c;let u=e.ctx;void 0!==r&&(u=u.slice(),u[r]=c);const l=t&&(e.current=t)(u);let s=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(A={r:0,c:[],p:A},function(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),A.c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(t,1,1,(()=>{e.blocks[n]=null})),A.r||i(A.c),A=A.p)})):e.block.d(1),l.c(),N(l,1),l.m(e.mount(),e.anchor),s=!0),e.block=l,e.blocks&&(e.blocks[o]=l),s&&D()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=k();if(t.then((t=>{v(n),o(e.then,1,e.value,t),v(null)}),(t=>{if(v(n),o(e.catch,2,e.error,t),v(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}function B(t,e){-1===t.$$.dirty[0]&&(x.push(t),_||(_=!0,w.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(t,e,n,o,r,a,f=[-1]){const p=$;v(t);const m=e.props||{},h=t.$$={fragment:null,ctx:null,props:a,update:c,not_equal:r,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:l(),dirty:f,skip_bound:!1};let b=!1;if(h.ctx=n?n(t,m,((e,n,...o)=>{const c=o.length?o[0]:n;return h.ctx&&r(h.ctx[e],h.ctx[e]=c)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](c),b&&B(t,e)),n})):[],h.update(),b=!0,i(h.before_update),h.fragment=!!o&&o(h.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);h.fragment&&h.fragment.l(t),t.forEach(d)}else h.fragment&&h.fragment.c();e.intro&&N(t.$$.fragment),function(t,e,n){const{fragment:o,on_mount:r,on_destroy:c,after_update:l}=t.$$;o&&o.m(e,n),P((()=>{const e=r.map(u).filter(s);c?c.push(...e):i(e),t.$$.on_mount=[]})),l.forEach(P)}(t,e.target,e.anchor),D()}v(p)}function T(t,e,n){const o=t.slice();return o[5]=e[n],o}function z(t){let e;return{c(){e=m("h2"),e.textContent="Some unknown error occurred, can't able to fetch the restaurants."},m(t,n){p(t,e,n)},p:c,d(t){t&&d(e)}}}function I(t){let e,n=t[0],o=[];for(let e=0;e<n.length;e+=1)o[e]=K(T(t,n,e));return{c(){e=m("div");for(let t=0;t<o.length;t+=1)o[t].c();y(e,"class","restaurant-list svelte-78rogk")},m(t,n){p(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,r){if(4&r){let c;for(n=t[0],c=0;c<n.length;c+=1){const u=T(t,n,c);o[c]?o[c].p(u,r):(o[c]=K(u),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){t&&d(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function K(t){let e,n,o,r,u,l,i,s,a,g,$,v,k=t[5].name+"",x=t[5].description+"";return{c(){e=m("a"),n=m("h2"),o=h(k),r=b(),u=m("img"),s=b(),a=m("p"),g=h(x),$=b(),u.src!==(l="https://content.demo.microfrontends.com/"+t[5].imageSrc)&&y(u,"src",l),y(u,"alt",i=t[5].imageDescription),y(e,"class","card svelte-78rogk"),y(e,"href",v="/order/"+t[5].id)},m(t,c){p(t,e,c),f(e,n),f(n,o),f(e,r),f(e,u),f(e,s),f(e,a),f(a,g),f(e,$)},p:c,d(t){t&&d(e)}}}function R(t){let e;return{c(){e=m("h2"),e.textContent="Loading..."},m(t,n){p(t,e,n)},p:c,d(t){t&&d(e)}}}function F(t){let e,n,o,r,u,l,s,a,$,v,k,x,O,E,j,w,_,P,S,C,D,G,q,A,N,B,L,T,K,F={ctx:t,current:null,token:null,hasCatch:!0,pending:R,then:I,catch:z,value:0,error:8};return M(L=t[2],F),{c(){e=m("main"),n=m("form"),o=m("label"),o.textContent="Search:",r=b(),u=m("input"),l=b(),s=m("label"),s.textContent="Price range:",a=b(),$=m("label"),v=h("$"),k=m("input"),x=b(),O=m("label"),E=h("$$"),j=m("input"),w=b(),_=m("label"),P=h("$$$"),S=m("input"),C=b(),D=m("label"),G=h("$$$$"),q=m("input"),A=b(),N=m("button"),N.textContent="Clear",B=b(),F.block.c(),y(o,"for","txtSearch"),y(u,"type","text"),y(u,"id","txtSearch"),y(k,"type","checkbox"),k.value="$",y(j,"type","checkbox"),j.value="$$",y(S,"type","checkbox"),S.value="$$$",y(q,"type","checkbox"),q.value="$$$$",y(N,"type","button"),y(n,"class","svelte-78rogk"),y(e,"id","restaurants"),y(e,"class","svelte-78rogk")},m(c,i){p(c,e,i),f(e,n),f(n,o),f(n,r),f(n,u),f(n,l),f(n,s),f(n,a),f(n,$),f($,v),f($,k),f(n,x),f(n,O),f(O,E),f(O,j),f(n,w),f(n,_),f(_,P),f(_,S),f(n,C),f(n,D),f(D,G),f(D,q),f(n,A),f(n,N),f(e,B),F.block.m(e,F.anchor=null),F.mount=()=>e,F.anchor=null,T||(K=[g(k,"click",t[1]),g(j,"click",t[1]),g(S,"click",t[1]),g(q,"click",t[1])],T=!0)},p(e,[n]){{const o=(t=e).slice();o[0]=o[8]=F.resolved,F.block.p(o,n)}},i:c,o:c,d(t){t&&d(e),F.block.d(),F.token=null,F=null,T=!1,i(K)}}}function H(t,e,n){let o=[];let r=[],c=fetch("https://api.jsonbin.io/b/5fbded3990e7c66167f6aa01",{headers:{"secret-key":"$2b$10$WgrEnl6Ev9ry0rK.KNhgo.lGZjT0PEuOnXTSfRAd61nH5SOrvoPz."}}).then((t=>{let e=t.json();return n(0,r=e),e})),u=r;return[r,function(t){const e=t.target.value;o.includes(e)?o.pop(e):o.push(e),u=o.length>0?r.filter((t=>o.includes(t.priceRange))):r},c]}const W=r({component:class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=c}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),L(this,t,H,F,a,{})}},domElementGetter:()=>document.getElementById("single-spa-application:@feedme/restaurants"),props:{someData:"data"}}),X=W.bootstrap,Z=W.mount,J=W.unmount;t.bootstrap=X,t.mount=Z,t.unmount=J,Object.defineProperty(t,"__esModule",{value:!0})}(this["@feedme/restaurants"]=this["@feedme/restaurants"]||{});
//# sourceMappingURL=bundle.js.map
