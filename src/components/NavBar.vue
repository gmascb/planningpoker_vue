<template>
    <v-app-bar app color="primary" dark name="navbar_name">
      
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
               src="../assets/icon.png" transition="scale-transition"
               width="40" />
      </div>

      <v-spacer></v-spacer>
      
      <v-btn href="https://techpoker.herokuapp.com" target="_blank" text>
        <span class="mr-2"></span>
        <v-img alt="Vuetify Logo" class="shrink mr-2"
            contain src="../assets/ruby.png" 
            transition="scale-transition" width="40"/>
      </v-btn>
      


    </v-app-bar>
</template>

<script>  
  export default {
    name: 'NavBar',

    data: () => ({
      
    })
  }

</script>
