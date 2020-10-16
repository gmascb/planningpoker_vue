<template>
  <v-app>
    <nav-bar />
    <pagina-inicial />
  </v-app>
</template>



<script>
  import NavBar from '../components/NavBar'
  import PaginaInicial from '../components/PaginaInicial'

  export default {
    name: 'Home',

    components: {
      PaginaInicial,
      NavBar,
    }
  }
</script>
