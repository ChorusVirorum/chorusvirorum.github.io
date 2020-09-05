import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Join from './pages/Join.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: Home, 
      meta: {
        title: 'Startsidan'
      } 
    },
    { 
      path: '/om-koren', 
      name: 'about', 
      component: About, 
      meta: {
        title: 'Om kören'
      } 
    },
    { 
      path: '/ga-med', 
      name: 'joint', 
      component: Join, 
      meta: {
        title: 'Gå med i kören'
      } 
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
