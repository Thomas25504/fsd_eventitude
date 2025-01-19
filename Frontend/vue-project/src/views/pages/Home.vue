<template>
    <div>
        <h1>Eventitude</h1>
        <div v-if="loading">Events Loading...</div>

        <div class="events" v-else>
            <SingleEvent class="single" v-for="post in posts" :key="post.id" :event="post"/>
        </div>

        <div v-if="error">{{ error }}</div>
    </div>
</template>

<script>
    import {postService} from "../../services/posts.service";
    import SingleEvent from "../components/SingleEvent.vue";

    export default {
        data(){
            return {
                posts: [],
                error: "",
                loading: true
            }
        },

        mounted(){
            postService.getEvent()
                .then(response => {
                    // handle successful response
                    console.log('Events fetched', response);
                    this.posts = response;
                    this.loading = false;
                })
                .catch(error => {
                    // handle error response
                    console.error('Events fetch failed', error);
                    this.error = 'Events fetch failed. Please try again.';
                    this.loading = false;
                });
        },

        components: {
            SingleEvent
        }

    }

</script>

<style>
    .events {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        
    }

    .single{
        opacity: 0.93;
    }

    .single:hover{
        opacity: 1;
    }

    
</style>