<template>
    <v-app name="FormPlay">
        
        <form @submit="onSubmit" id="play">
            <v-col>
                <v-text-field placeholder="Player name" id="name" type="text" v-model="form.playerName"></v-text-field>
                <span> 
                </span>
            </v-col>

            <v-col>
                <input  id="room" 
                        type="number" 
                        placeholder="Room"  
                        v-model="form.roomId"
                        style="background: #F0F8FF;">
            </v-col>
            
            <v-col>
                <v-select :items="items" label="Card Value" v-model="form.cardValue" />
            </v-col>

            <div style="display: flex; justify-content: center; ">
                <v-btn dark id="send-button" type="submit">Send</v-btn>
            </div>

            <div style="margin-top: 50px; ">
            {
                "name": null,
                "value": {{form.cardValue || 0}},
                "user": {{form.playerName}},
                "room": {{form.roomId || 0}}
            }
            </div>

        </form>

    </v-app>
</template>

<style lang="css">

    v-col {
        margin: 10%;
    }

    #send-button {
        width: 90%;
    }

</style>

<script>

import ServiceTechPoker from '../services/service-techpoker';

export default {

    name: 'FormPlay',
    data: () => ({
      items: [1,2,3,5,8,11,20,40,100],
      errorMessage: "Erro Teste",
      form: {
          cardValue: null,
          playerName: null,
          roomId: null
      },
      users: null
    }),
    components: {
      
    },
    methods: {
        onSubmit() {
            ServiceTechPoker.playCard(this.data.form)
        }
    }
  }

</script>