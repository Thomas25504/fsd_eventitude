<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label for="title">Event Name: </label><br/>
            <input type="text" name="name" v-model="name" placeholder="Title"/>
    

            <br /><br />

            <label for="description">Description: </label>
            <input type="text" name="description" v-model="description" placeholder="Description"/>


            <br /><br />

            <label for="startDate"> Start Date: </label>
            <input type="date" name="start" v-model="start" placeholder="Date"/>


            <br /><br />

            <label for="closeRegistration">Close Registration: </label>
            <input type="date" name="close_registration" v-model="close_registration" placeholder="Date"/>

            <br /><br />

            <label for="location">Location: </label>
            <input type="text" name="location" v-model="location" placeholder="Location"/>
         

            <br /><br />

            <label for="maxattendees">Max Atendees: </label>
            <input type="number" name="max_attendees" v-model="max_attendees" placeholder="Max Atendees"/>
         

            <br /><br />

            <button>Create Event</button>

        </form>
    </div>
</template>

<script>
    import {postService} from "../../services/posts.service";

    export default {
        data(){
            return {
                name: '',
                description: '',
                start: '',
                close_registration: '',
                location: '',
                max_attendees: '',
                submitted: false
            }
        },

        methods:{
            handleSubmit(e){
                this.submitted = true;
                const{ name, description, start, close_registration, location, max_attendees} = this
              

                postService.createEvent(name, description, start, close_registration, location, max_attendees)
                    .then(response => {
                        // handle successful response
                        console.log('Event Creation successful', response);
                    })
                    .catch(error => {
                        // handle error response
                        console.error('Creation failed', error);
                        this.error = 'Creation failed. Please check your credentials and try again.';
                    });
            }
        }
}
</script>

<style scoped>
    form {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    label {
        font-weight: 600;
        margin-bottom: 8px;
        display: block;
        color: #333;
    }

    input[type="text"],
    input[type="date"],
    input[type="time"],
    input[type="number"] {
        width: 100%;
        padding: 12px;
        margin-bottom: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    button {
        padding: 12px 24px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #0056b3;
    }

    div {
        color: #e74c3c;
        font-size: 0.875em;
    }
</style>