<template>

   <v-container > 
        <div >
        <img :src="require('../assets/homelink.png')" width="300" height="300">
        <router-view/>
  </div>
       <!-- <v-avatar> <img src=""></v-avatar>  -->
        <div div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3" >
                 <h3 style="margin: 0 0 15px" class="display-3">Sign in</h3>
        </div>
    <v-layout row wrap style="margin: auto padding: 0 0 0 15px" >
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3" style="margin: auto">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
                <v-card class="user" style="margin-bottom: 15px" >
                <v-text-field prepend-icon="person" name="login" label="User Name" type="text" style="padding: 18px 0 0 15px" v-model="name" ></v-text-field>
                </v-card>
                
                <v-card style="margin-bottom: 15px">
                <v-text-field prepend-icon="lock" name="login" label="PassWord" id="password" type="password" style="padding: 18px 0 0 15px" v-model="password"></v-text-field>
                </v-card>
                
                <v-btn class="btn btn-success btn-block full-width" v-on:click="check()">Signin</v-btn>
            </div>
            </div>
            </v-layout>

   </v-container>
</template>



<script>
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
        name: '',
        password:'',
    }
  }, 
  methods: {
     
   check(){
       axios.get('http://localhost:3000/joiners')
      .then((response) => {
        console.log(response)

        if(this.name == response.data.name && this.password == response.data.password)
          {
            this.$router.push('/Home')
          }
        else{
          this.name = ''
          this.password = ''
          alert("Wrong username or password!")
        }
      })
      .catch((error) => {
        console.log(error)
    })    
    }

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
