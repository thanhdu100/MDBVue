import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  CKEditor,
  render: h => h(App)
}).$mount('#app')
