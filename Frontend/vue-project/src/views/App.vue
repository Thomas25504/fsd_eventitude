<template>
  <body>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/profile">Profile</router-link>      
    </nav>
    <router-view />
  </div>
  </body>
</template>

<script>
import Login from './pages/Login.vue';
import Events from './pages/Events.vue';
import NewEvents from './pages/NewEvent.vue';
import Profile from './pages/Profile.vue';


  export default {
    data(){
      return {
        
      }
    },

    methods:{
      
    },

    components:{
      Login,
      Events,
      Profile,
    }
  }
</script>

<style scoped>
  *{
    font-family: Arial, sans-serif;
    background-color: #003B36;
    
    
    
  }

  nav{
    background-color: #012622;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
  }

  nav a{
    color: white;
    font-size:large;
    padding: 10px;
    margin-right: 10px;
    text-decoration: none;
  }

  nav a:hover{
    background-color: black;
    color: white;
  }

</style>
