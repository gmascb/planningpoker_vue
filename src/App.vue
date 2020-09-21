<template>

   <v-app>
    <v-toolbar>
      <v-tollbar-title app dark class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">Material Design</span>
      </v-tollbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" >
      <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>
    
    <MyComponent/>
    <About/>
  
  </v-app>

  <div id="nav">
    <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
