<template>
    <v-app name="FormPlay">
        
        <form @submit="onSubmit" id="play" v-on:submit.prevent="onSubmit">
            <v-col>
                <v-text-field placeholder="Player name" id="name" type="text" v-model="form.user"></v-text-field>
            </v-col>

            <v-col>
                <input  id="room" 
                        type="number" 
                        placeholder="Room"  
                        v-model="form.room"
                        style="background: #F0F8FF;">
            </v-col>
            
            <v-col>
                <v-select :items="items" 
                            label="Card Value" 
                            v-model="form.value" />
            </v-col>

            <div style="display: flex; justify-content: center; ">
                <v-btn dark 
                        id="send-button" 
                        type="submit"> Play!
                </v-btn>
            </div>

            <div style="margin: 100; ">
            <!-- {
                "name": {{form.name}},
                "value": {{form.value || 0}},
                "user": {{form.user}},
                "room": {{form.room || 0}}
            } -->
            </div>

            <span v-if="responseMessage">{{responseMessage}}</span> 
            
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
      responseMessage: null,
      form: {
          value: null,
          user: null,
          room: null,
          name: null
      },
      users: ServiceTechPoker.findUsers()
    }),
    components: {
      
    },
    methods: {
        onSubmit() {
            
            try{
                    ServiceTechPoker.playCard(this.form)
                    .then((resp) => { 

                        if (resp.status == 200){
                            this.responseMessage = "Sucess!"
                        }
                        else{
                            this.responseMessage = resp.data.message
                        }
                    } )

            }catch(error){
                this.responseMessage = error.message
            }
        }
    }
  }
</script>