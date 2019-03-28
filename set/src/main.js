// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/public_css/global.css';

//import $ from 'jquery'
//import 'bootstrap3/dist/css/bootstrap.css'
//import 'bootstrap3/dist/js/bootstrap.js'
Vue.use(iView);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
