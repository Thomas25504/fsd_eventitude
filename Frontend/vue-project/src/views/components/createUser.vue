<template>
    <div class="createUser-container">
        <h1>Create User</h1>
        <form @submit.prevent="handleSubmit">
            <label for="first_name">First Name: </label><br/>
            <input type="text" name="first_name" v-model="first_name" placeholder="First Name"/>
            

            <label for="last_name">Last Name: </label><br/>
            <input type="text" name="last_name" v-model="last_name" placeholder="Last Name"/>

            <label for="email">Email: </label><br/>
            <input type="email" name="email" v-model="email" placeholder="Email"/>
    

            <label for="password">Password: </label>
            <input type="password" name="password" v-model="password" placeholder="Password"/>

            
            <button>Create User</button>
        </form>
    </div>
</template>

<script>
    import {postService} from "../../services/posts.service";
    import createUser from "../components/createUser.vue";

    export default {
        data(){
            return {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                submitted: false
            }
        },

        methods:{
            handleSubmit(e){
                this.submitted = true;
                const{ first_name, last_name, email, password } = this
                if(!(email && password)){
                    return;
                }

                postService.createUser(first_name, last_name, email, password)
                    .then(response => {
                        // handle successful response
                        console.log('User Creation successful', response);
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

<style>
.createUser-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 40px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .login-box {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 5px;
        font-weight: bold;
    }

    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #0056b3;
    }

    .error-message {
        color: red;
        font-size: 14px;
        margin-top: -15px;
        margin-bottom: 20px;
    }
</style>