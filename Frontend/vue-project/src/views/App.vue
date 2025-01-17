<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/login">Login</router-link>
      
    </nav>
    <router-view />
  </div>
</template>

<script>
import Login from './pages/Login.vue';

  export default {
    data(){
      return {
        
      }
    },

    methods:{
      
    },

    components:{
      Login
    }
  }
</script>

<style scoped>
  *{
    font-family: Arial, sans-serif;
    
  }

  nav{
    background-color: #f1f1f1;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  nav a{
    margin-right: 10px;
    text-decoration: none;
  }
</style>