<template>
    <h1>Login</h1>
    <div class="login-container">
        
        <form class="login-box" @submit.prevent="handleSubmit">
            <label for="email">Email: </label><br/>
            <input type="email" name="email" v-model="email" placeholder="Email"/>
            <div v-show="submitted && !email">Email is required</div>

            <br /><br />

            <label for="password">Password: </label>
            <input type="password" name="password" v-model="password" placeholder="Password"/>
            <div v-show="submitted && !password">Password is required</div>

            <br /><br />


            <button>Login</button>
        </form>

        <br/>

        <button @click="logout">Logout</button>
        
    </div>
</template>

<script>
    import {postService} from "../../services/posts.service";

    export default {
        data(){
            return {
                email: '',
                password: '',
                submitted: false
            }
        },

        methods:{
            handleSubmit(e){
                this.submitted = true;
                const{ email, password } = this
                if(!(email && password)){
                    return;
                }

                postService.getUser(email, password)
                    .then(response => {
                        // handle successful response
                        console.log('Login successful', response);
                    })
                    .catch(error => {
                        // handle error response
                        console.error('Login failed', error);
                        this.error = 'Login failed. Please check your credentials and try again.';
                    });
            },

            logout(){
                postService.logout()
                    .then(response => {
                        // handle successful response
                        console.log('Logout successful', response);
                    })
                    .catch(error => {
                        // handle error response
                        console.error('Logout failed', error);
                        this.error = 'Logout failed. Please try again.';
                    });
            }
            
        },
    }
</script>

<style scoped>
    .login-container{
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #f9f9f9;
    }

    .login-box{
        width: 300px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    input{
        width: 90%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button{
        width: 100%;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover{
        background-color: #45a049;
    }

    div{
        color: red;
    }

</style>