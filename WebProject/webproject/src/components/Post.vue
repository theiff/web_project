<template>
 <v-component>
     <!-- {{comments}} -->
<div>
      <v-toolbar style="background-color: #222E5E" app fixed clipped-left class="nav" >
      <v-toolbar-side-icon style="margin-left: 20px" v-on:click="back()"  > <v-avatar  :tile="false" class="grey lighten-4" ><img :src="require('../assets/homelink.png')"  width="35" height="35"> </v-avatar></v-toolbar-side-icon>
      
      </v-toolbar>
    </div>
    






  <v-layout row wrap align-center>
    <v-flex >
      <v-card style="width:100%">

        <v-card-title primary-title>
            <h1> {{Topic.topicname}}</h1>

        </v-card-title>
            <p style="text-align: left; padding:1.5%; font-size:20px">{{Topic.detail}}
            </p>
        
      </v-card>
    </v-flex>
  </v-layout>

<!-- <v-layout row> -->
<v-flex xs12 v-for="x in comments" v-bind:key="x">
    <v-card style="width: 80%; margin: auto" class="px-2" >
      <!-- <v-layout row wrap align-center > -->
        <v-flex md10 style="padding-top: 0px;margin-right: 0px;padding-right:0px">
            <h2 style="text-align:left; padding:1.5%">Name: {{x.comname}}</h2>
                
        </v-flex>
      <!-- </v-layout> -->
      <!-- <v-layout row> -->
      
        <v-flex md10 style="padding-top: 0px;margin-right: 0px;padding-right:0px">
            <h2 style="text-align:left; padding:1.5%">Comment: {{x.content}}</h2>
                
                
        </v-flex>
    <!-- </v-layout> -->
  </v-card>
  <br>
</v-flex>
<!-- </v-layout> -->







<v-layout>
<v-card style="width: 80%; margin: 0 auto" >
      <v-layout row wrap align-center >
        <v-flex md10 style="padding-top: 0px;margin-right: 0px;padding-right:0px">
            <h2 style="text-align:left; padding:1.5%">Name:</h2>
                <v-text-field v-on:keyup.enter="keymonitor" name="input-1" placeholder="Enter your name here..." id="testing" style="height: 50px; background-color: white; font-size:50px; padding:1.5%" v-model="newcomname">
                    
                </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
      
        <v-flex md10 style="padding-top: 0px;margin-right: 0px;padding-right:0px">
            <h2 style="text-align:left; padding:1.5%">Comment:</h2>
                <v-text-field  name="input-1" placeholder="Enter your comment here..." id="testing" style="height: 50px; background-color: white; font-size:50px; padding:1.5%" v-model="newcontent">
                    
                </v-text-field>
                <v-flex md4 style="padding:1.5%">
                    <v-btn depressed color="white--text" v-on:click="addComment()" style="background-color: #01579B;padding:1%;height: 50px; font-color: black;width: 100%;margin-left: 0px;padding-left:0px;margin-right: 0px;padding-right:0px">Comment</v-btn>
                </v-flex>
        </v-flex>
    </v-layout>
  </v-card> 

</v-layout>



 </v-component>
</template>
<script>
import axios from 'axios'
import Api from '../api/api'
    export default {
    
    data() {
      return {
        Topic: {
            topicname:'',
            datail:'',
          comment: [
              {
                  comname:'',
                  content:''
              }
          ]
        },
        comments:[

        ],
        newcomname: '',
        newcontent: ''
      }
    },
  mounted () {
      //alert(this.$route.params.userId)
    axios.get('http://localhost:3000/topics/' + this.$route.params._id)
      .then((response) => {
        console.log('from mounted',response.data)
        this.Topic = response.data
        this.comments = response.data.comment        
        alert(Topic)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
      addComment(){
          let newTopic = {
              _id: this.$route.params._id,
              comname: this.newcomname,
              content: this.newcontent
          }
          this.comments.push(newTopic)
          var newComment = []
          let lst = {
            comment: this.comments
        }
          Api.pushComment(this.$route.params._id, lst, callback => {
              console.log(callback)
          })
        this.newcomname=''
        this.newcontent=''

      },
    back(){
        
      this.$router.push('/home')
  }
  
  }

}
</script>
