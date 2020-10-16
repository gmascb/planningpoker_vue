<template>
  <v-app name="HelloWorld">
    <div>
      <h1> h1 </h1>

      <!-- <v-select v-model="selected" name="userName">        
        <option v-for="option in vm.users" v-bind:key="option.name">
          
        </option>
      </v-select> -->

      <v-select v-model="user" :options="users" name="selectUsers">
        <option v-for="option in this.users" v-bind:key="option.name">
         {{ user.name }} 
        </option>
      </v-select>

      <v-btn dark x-large > Carregar
      </v-btn>
      <span>{{ this.users }}</span>
      <ul id="example-1">
        <li v-for="user in users" :key="user.name" v-text="user.name" >
        </li>
      </ul>
      <h2> h2 </h2>
 
    </div>
    
  </v-app>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      users: null
    }),
  }
</script>
