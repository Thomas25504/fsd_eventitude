<template>
  <div>
    <h1>{{welcome_message}}</h1>
  </div>

  <Login />
</template>

<script>

  import Login from './Login.vue'

  export default {
    data() {
      return {
        welcome_message: 'Eventitude',
      }
    },
    methods: {
      
      },
    components: {
      Login
    }
  }
  
</script>

<style scoped>
  
</style>