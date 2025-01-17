<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <label for="email">Email: </label>
            <input type="email" name="email" v-model="email"/>
            <div v-show="submitted && !email">Email is required</div>

            <br /><br />

            <label for="password">Password: </label>
            <input type="password" name="password" v-model="password"/>
            <div v-show="submitted && !password">Password is required</div>

            <br /><br />
            <p>{{ email + " " + password }}</p>


            <button>Login</button>
            <div v-if="error">{{ error }}</div>

        </form>
    </div>
</template>

<script>
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

                const password_pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/
                if(!(password_pattern.test(password))){
                    this.error = "Password not strong enough"
                    return;
                }
            

                alert('Form Submitted');
            }
        }
    }
</script>