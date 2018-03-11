// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from "vue-resource";
import App from './App';
import Users from './components/users';
import Demo from './components/demo';

//Vue middle-ware
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: Users},
    {path:'/demo', component: Demo}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app">
    <ul>
      <li> <router-link to="/"> Users </router-link> </li>
      <li> <router-link to="/demo"> Demo </router-link> </li>
    </ul>
    <router-view> </router-view>
  </div>
  `
}).$mount('#app')
