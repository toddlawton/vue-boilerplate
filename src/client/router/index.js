import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '../components/Home.vue';
import HelloWorld from '../components/HelloWorld.vue';

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/hello-world', name: 'hello-world', component: HelloWorld },
  ],
});
