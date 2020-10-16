import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
// import serviceTechPoker from './services/service-techpoker'
// import PaginaInicial from './components/PaginaInicial.vue'

Vue.config.productionTip = false


new Vue({
  mounted: function() {
    
    // serviceTechPoker.findUsers()
    //   .then(response => fillUsers(PaginaInicial.users, response) )

    //   1+1

  },
  // data: {
  //   users: null
  // },
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')




// var fillUsers = function(PaginaInicial, data){

//   this.data = data;
//   this.PaginaInicial = PaginaInicial;

// }