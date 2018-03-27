<template>
  <div id="app">
    <!-- <img src="./assets/homelink.png" width="300" height="300"> -->
    <!-- <h1>hjk</h1> -->
    <router-view/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
export default {
  name: 'App',
  component: Login
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
