import 'whatwg-fetch';

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import Create from './routes/new.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/new',
    name: 'new',
    component: Create,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');
