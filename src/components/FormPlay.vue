<template>
    <v-app name="FormPlay">
        
        <form id="play" v-on:submit.prevent="onSubmit">
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

            <div style="display: flex; align-items: center; flex-direction: column; ">
                <div>
                    <v-btn dark id="send-button" type="submit"> Play! </v-btn>
                </div>
                <div style="margin-top: 50px;">
                    <v-alert v-model="alert" v-if="type == 'success' " dismissible type="success">{{responseMessage}}</v-alert> 
                    <v-alert v-model="alert" v-if="type == 'warning' " dismissible type="warning">{{responseMessage}}</v-alert> 
                </div>
            </div>

            <div style="margin: 100; ">
            <!-- {
                "name": {{form.name}},
                "value": {{form.value || 0}},
                "user": {{form.user}},
                "room": {{form.room || 0}}
            } -->
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
      responseMessage: {
          type: String
      },
      type: {
          type: String
      },
      alert: false,
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
                            this.responseMessage = "Success!"
                            this.type = "success"
                            this.alert = true
                        }
                        else{
                            this.responseMessage = resp.data.message
                            this.type = "warning"
                            this.alert = true
                        }
                    } )

            }catch(error){
                this.responseMessage = error.message
            }
        }
    }
  }
</script>