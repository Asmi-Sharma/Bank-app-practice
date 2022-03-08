<template>
        <div class="login d-flex items-top justify-content-center">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        <v-form v-model="valid" class="form shadow">
            <v-text-field v-model="userInfo.email" 
                label="Email" 
                :rules="[required('email'), emailFormat()]"
            />

            <v-text-field v-model="userInfo.password"
                label="Password"
                :type="showPassword ? 'text' : 'password'" 
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                counter=true
                :rules="[required('password'), minLength('password', 8)]"
            />
            <!-- <nuxt-link :to="{ name: 'Dashboard', params: { loginInfo: response }}" v-if="response">         -->
              <v-btn @click="response = submitForm(userInfo)" :disabled="!valid">LOGIN</v-btn>
            <!-- </nuxt-link> -->
        </v-form>
        
    </div> 
</template>

<script>
  import validations from "@/utils/validations";
  export default {
    data() {
      return {
        valid: false,
        showPassword: false,
        userInfo: {
          email: '',
          password: ''
        },
        ...validations
      }
    },
    methods: {
      async submitForm(logininfo){
          try{
            let response = await this.$auth.loginWith('local', {
              data: logininfo
            })
            let email = response.data.iam.email
            this.$store.commit('STORE_EMAIL', email);
            this.$router.push('/Dashboard')
          }catch(error){
            console.log('error occured',error)
          }
      },
    }
  }
</script>

<style>
.form{
    margin-top: 9em;
    padding-right: 3em;
    padding-left: 3em;
    padding-bottom: 2em;
    max-width: 70%;
    width: 70%;
}
.login{
  width: 100%;
}

</style>
