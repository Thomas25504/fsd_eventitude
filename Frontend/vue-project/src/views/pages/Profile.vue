<template>
    <div v-if="!isLoggedIn" >
        <Login/>
    </div>
</template>

<script>
import Login from './Login.vue';


export default {
  components:{
    Login,
  }
}


</script>

<style scoped>
</style>