<template>
  <v-app name="PaginaInicial">
    <div>
    
      <p> {{blog}} </p>

    </div>
    
  </v-app>
</template>

<script>
  import ServiceTechPoker from '../services/service-techpoker';
  this.users = ServiceTechPoker.findUsers()

  export default {
    name: 'PaginaInicial',

    data: () => ({
      users: this.users,
      blog: "teste do blog 2"
    }),

    // data() {
    //   return {
    //     // users: ServiceTechPoker.findUsers()
    //     users: null
    //   }
    // }
  }

</script>
