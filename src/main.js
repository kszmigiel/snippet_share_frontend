import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(VueRouter);

import Home from './components/Home.vue'
import SnippetPage from './components/SnippetPage.vue'
import Tag from './components/Tag.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/snippet/:id', component: SnippetPage },
  { path: '/tag/:name', component: Tag },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
