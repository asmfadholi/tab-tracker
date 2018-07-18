<template>
  <v-layout column>
    <v-flex>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title> Register </v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
          label="Email"
          type="email"
          v-model="email">
          </v-text-field>
          <br>
          <v-text-field
          label="Password"
          type="password"
          v-model="password">
          </v-text-field>
          <br>
          <div class="error" v-html="error"></div>
          <v-btn class= "cyan" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'register',
  data(){
    return {
      email: 'aku@gmail.com',
      password: '123',
      error: null
    }
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style lang="css">
.error {
  color: red;
}
</style>
