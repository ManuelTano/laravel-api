// Import di vue e di vue router
import Vue from 'vue'
import VueRouter from 'vue-router'

// Importo i componenti delle pagine
import HomePage  from './components/pages/HomePage.vue';
import AboutPage  from './components/pages/AboutPage.vue';
import ContactsPage  from './components/pages/ContactsPage.vue';

// Dico a Vue di usare VueRouter
Vue.use(VueRouter)

// Definizione delle rotte
const routes = new VueRouter({

mode: 'history', // ci tiene la cronologia 
linkExactActiveClass: 'active',
routes: [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/contacts', component: ContactsPage, name: 'contacts' },
  
]
});  // inizializzo una nuova istanza di router

// lo rendo esportabile
export default routes;
