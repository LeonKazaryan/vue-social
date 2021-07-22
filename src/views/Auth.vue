<template>
    <section class="auth">
        <div class="login">
            <h2>Log in</h2>
            <input class="login__input" v-model.trim="phone" type="text" placeholder="Phone number" >
            <input class="login__input" v-model.trim="password" type="password" placeholder="Password">

            <p v-show="isLoading && !hasError"> Идет загрузка... </p>
            <p v-show="hasError && !isLoading" style="color:red">{{ errorMsg }} </p>

            <button @click="login" v-show="!isLoading" class="login__button">Log in</button>
            <button class="login__button" >Register</button>

        </div>
    </section>
</template>
<script>

export default{
    name: 'AuthPage',

    data: () => ({
        isLoading: false,
        hasError: false,
        errorMsg: '',
        phone: '',
        password: '',
    }),

    mounted(){
        console.log(this.$store.state)
    },

    methods: {
        async login(){
           if (!this.password.length || !this.phone.length){
               return
           }

           try{
               this.isLoading = true
               this.hasError = false;
               this.errorMsg = "";

            const userData = {
                phone: this.phone,
                password: this.password, 
            }
            await this.$store.dispatch('LOGIN', userData)
             
             this.$router.push({ name: "HomePage" })
           } catch(e){
               this.hasError = true
               this.errorMsg = e.response.data.message

           } finally {
               this.isLoading = false
           }
        }
    }
}

</script>

<style>
    .auth{
        padding-top:9rem;
    }

    .login{
        width: 300px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .login__input{
        margin-bottom: 0.6rem;
        padding: 0.6rem;
        border-radius: 20px;
        border: 1px solid gray;
        height: 40px;
        font-size: 20px;
    }

    .login__button{
        padding: 0.6rem;
        border-radius: 5px;
        border: 1px solid black;
        margin-top:1rem;
    }

    input, button{
        outline: none;
        border: none
    }

    button{
        cursor: pointer;
    }
</style>