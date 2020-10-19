<template>
  <v-app name="PaginaInicial">
    <form-play />
  </v-app>
</template>

<script>
  import FormPlay from '../components/FormPlay'
  // this.users = ServiceTechPoker.findUsers()
  export default {
    name: 'PaginaInicial',
    
    components: {
      FormPlay
    },

    data: () => ({
      blog: "TechPoker Vuejs"
    }),
    
    // mounted() {
    //   ServiceTechPoker.findUsers()
    //   .then((resp) => { this.users = resp; } )
    // },

    // data() {ß
    //   return {
    //     // users: ServiceTechPoker.findUsers(),
    //     // blog: ["teste do blog 5", "teste 1"]
    //   }
    // }
  }

</script>
