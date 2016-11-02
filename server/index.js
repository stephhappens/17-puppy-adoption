/* eslint-env node */

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');


module.exports = function (app) {
  // Log proxy requests
  const morgan  = require('morgan');
  app.use(morgan('dev'));

  // Uncomment this for client-side routing
  app.use((req, res, next) => {
    const acceptHeaders = req.headers.accept || [];
    const hasHTMLHeader = acceptHeaders.indexOf('text/html') !== -1;

    if (hasHTMLHeader) {
      req.serveUrl = '/index.html';
    }

    next();
  });
};
