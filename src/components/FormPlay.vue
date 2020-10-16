<template>
    <v-app name="FormPlay">
        
        <form id="play">
            <!-- text -->
            
            <v-col cols="12" sm="6" md="3">
                <p> Player
                    <v-text-field id="name" type="text" v-model="name"></v-text-field>
                    {{name}}
                </p>
            </v-col>

            <p> Sala
                <input id="room" type="number" v-model="room">
                {{room}}
            </p>
            
            <v-select :items="items" label="Valor" v-model="carta">
                {{carta}}
            </v-select>
            

        </form>
    </v-app>
</template>
<script>

export default {
    name: 'FormPlay',
    data: () => ({
      items: [1,2,3,5,8,11,20,40],
    }),
    components: {
      
    }
  }

</script>