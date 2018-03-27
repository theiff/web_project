<template>

   <v-container > 
       <v-card >
        <div >
        <img :src="require('../assets/homelink.png')" width="200" height="200">
        <router-view/>
  </div>
       <div div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3" >
                 <h3 style="margin: 0 0 15px" class="display-3">New Topic</h3>
        </div>
       
    <v-layout row wrap style="margin: auto padding: 0 0 0 15px" >
            <v-flex xs2>
                 <v-subheader>Name :</v-subheader>
             </v-flex>
            <v-flex xs8>
                     <v-text-field
                        solo 
                        label="Name"
                        v-model="Topic.username"
                        ></v-text-field>
                 </v-flex>
    </v-layout>

    <v-layout row wrap style="margin: auto padding: 0 0 0 15px" >
            <v-flex xs2>
                 <v-subheader>Topic Name :</v-subheader>
             </v-flex>
            <v-flex xs8>
                <v-card>
                     <v-text-field
                        solo 
                        label="Topic Name"
                        v-model="Topic.topicname"
                        ></v-text-field>
                 </v-card>   
             </v-flex>
    </v-layout>
       
       <v-layout row wrap style="margin: auto padding: 0 0 0 15px" >
            <v-flex xs2>
                 <v-subheader>Detail :</v-subheader>
             </v-flex>
            <v-flex xs8>
                <v-card>
                     <v-text-field
                            label="Message"                            
                            full-width
                            multi-line
                            single-line
                            v-model="Topic.detail"
                        ></v-text-field>
                 </v-card>   
                 <div style="margin-top: 20px" >
                 <v-btn class="btn btn-success btn-block full-width" v-on:click="addToAPI(Topic.username, Topic)" >Add</v-btn>
                 <v-btn class="btn btn-success btn-block full-width" v-on:click="cancel()">Close</v-btn>
                </div>

             </v-flex>
    </v-layout>
       
       
       
       
       </v-card>

   </v-container>
</template>



<script>
// import image from "./assets/homelink.png"
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
    Topic:{
        username:'',
        topicname:'',
        detail:'',
            
    }
    }
  },
  methods:{
      cancel(){
          this.$router.push('/Home')
      },
      addToAPI (user, topic, dt) {
        //   alert(this.Topic.username)
          let newTopic = {
              username: this.Topic.username,
              topicname: this.Topic.topicname,
              detail: this.Topic.detail,
              
          }
          console.log(newTopic)
          
        axios.post('http://localhost:3000/topics', newTopic)
        .then((response) => {
          console.log(response)
         alert('New Topic Posted')
        })
        .catch((error) => {
          console.log(error)
        })   
             this.$router.push('/Home') 
        },
      }
  }

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.user {
    width: 500px;
}
</style>
