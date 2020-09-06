import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import AboutHistory from './pages/subPages/AboutHistory'
import AboutNow from './pages/subPages/AboutNow'
import AboutPerformances from './pages/subPages/AboutPerformances'
import Join from './pages/Join.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
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
      },
      children: [
        {
          path: 'i-nutid',
          name: 'about-now', 
          component: AboutNow,
          meta: {
            title: 'I nutid'
          },
        },
        {
          path: 'historia',
          name: 'about-history', 
          component: AboutHistory,
          meta: {
            title: 'Historia'
          },
        },
        {
          path: 'framtradanden',
          name: 'about-performances', 
          component: AboutPerformances,
          meta: {
            title: 'Framträdanden'
          },
        }
      ]
    },
    { 
      path: '/ga-med', 
      name: 'join', 
      component: Join, 
      meta: {
        title: 'Gå med i CV'
      } 
    },
  ]
});

// Adding articles to the loader.
const requireTest = require.context('./articles', true, /\.md$/);
requireTest.keys().forEach(requireTest);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
