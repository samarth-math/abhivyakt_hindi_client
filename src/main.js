// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/main.css'
import * as Sentry from '@sentry/browser'

// Login at https://sentry.io to see errors in production.
// Username: abhivyaktcom@gmail.com
if (process.env.NODE_ENV === 'production') {
    Sentry.init({
        dsn: 'https://6ee2420664804c8089f8d5bfb1f397b6@sentry.io/1383381',
        integrations: [new Sentry.Integrations.Vue({ Vue })]
    })
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
