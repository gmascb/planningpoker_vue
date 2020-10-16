<template>
  <v-app>
    <nav-bar />
    <hello-world />
  </v-app>
</template>



<script>
  import NavBar from '../components/NavBar'
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      NavBar,
    },
  }
</script>
