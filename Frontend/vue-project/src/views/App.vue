<template>
  <body>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/events">Create Events</router-link>
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
  * {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f4f4f9;
    color: #333;
  }

  nav {
    background-color: #004d40;
    padding: 15px 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  nav a {
    color: white;
    font-size: 1.1em;
    padding: 10px 20px;
    margin: 0 10px;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 5px;
  }

  nav a:hover {
    background-color: #00796b;
    color: #fff;
  }

  router-view {
    padding: 20px;
  }

</style>
