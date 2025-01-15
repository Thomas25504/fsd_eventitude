<template>
  <div>
    <h1>{{title}}</h1>
  </div>

  <Login />
</template>

<script>

  import Login from './Login.vue'

  export default {
    data() {
      return {
        title: 'Eventitude',
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