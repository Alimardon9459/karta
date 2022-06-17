import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGeolocation from 'vue-browser-geolocation';


Vue.config.productionTip = false
Vue.use(VueGeolocation);
  
import *as VueGoogeleMap from 'vue2-google-maps'
Vue.use(VueGoogeleMap, {
  load:{
    key:''
  },
  isntallComponets:false
} )
 
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
