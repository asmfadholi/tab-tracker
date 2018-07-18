<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
      TabTracker
    </v-toolbar-title>

    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browser
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark>
        <router-link to="register">  Sign Up </router-link>      
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
