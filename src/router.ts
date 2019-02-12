import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/watchers',
      name: 'watchers',
      component: () => import('./views/Watchers.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/Form.vue'),
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import('./views/LifecycleHooks.vue'),
    },
  ],
});
