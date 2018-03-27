import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import NewTopic from '@/components/NewTopic'
import Post from '@/components/Post'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home

    },
    {
      path: '/newtopic',
      name: 'NewTopic',
      component: NewTopic

    },
    {
      path: '/comment/:_id',
      name: 'Post',
      component: Post
    }
  ]
})
