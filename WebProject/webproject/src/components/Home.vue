<template>
  <v-component>
      <div>
      <v-toolbar style="background-color: #222E5E" app fixed clipped-left class="nav" >
      <v-toolbar-side > <v-avatar :tile="false" class="grey lighten-4" ><img :src="require('../assets/homelink.png')"  width="35" height="35"> </v-avatar></v-toolbar-side>
      <v-spacer></v-spacer>
      <v-toolbar-side  style="color:white padding: 5px 0 0 0 0" class="contact"  >
          
        <v-text-field  
            name="input-2-3"
            label="Search"
            class="input-group--focused"
            prepend-icon="search"
            single-line
            style="color: white"
            v-model="search"

            >
        </v-text-field> 
          
         </v-toolbar-side>
      <v-toolbar-side-icon v-on:click="change()"  ><i  class="material-icons" style="color:white" >add</i></v-toolbar-side-icon>
      </v-toolbar>
    </div>
    
    
    
    
    <div style="padding-top: 50px">
    <v-layout row wrap>
    <v-flex xs12 sm6 class="px-2" style="margin-bottom: 15px" v-for="x in filterdTopics" v-bind:key="x.id" >
      <v-flex xs12>
            <v-card style="background-color: #99A8F2" class="black--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">{{x.topicname}}</div>
                      <div>{{x.detail}}</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      :src="require('../assets/homelink.png')"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
                <router-link :to="{ path: 'comment/' + x._id}">
                <v-btn class="btn btn-success btn-block full-width" color="white"  >Comment</v-btn>
                </router-link>
              </v-container>
            </v-card>
        </v-flex>
    </v-flex>
  </v-layout>
    </div>


  </v-component>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        Topic:[

        ] ,
        search:''
  }
  },
      mounted() {
        console.log('mounted')
        
        axios.get('http://localhost:3000/topics')
        .then((response) => {
            console.log(response)
            this.Topic = response.data
        })
        .catch((error) => {
            console.log(error)
        })
    },
    computed: {
        filterdTopics: function(){
            return this.Topic.filter((topic) => {
                return topic.topicname.match(this.search)
            })
        }
    },
  methods: {
      change(){
      this.$router.push('/NewTopic')
  },
  
    


},


};
</script>

<style>
.input-group__details {
    
    min-block-size: 3px;
}
.nav {
    height: 80px;
    padding-top: 10px;
}
</style>
