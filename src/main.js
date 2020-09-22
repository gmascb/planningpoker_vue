// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

// createApp(App)
//     .use(router)
//     .mount('#app')

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app');