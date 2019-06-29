<template>
  <div id="app">
    <md-toolbar class="md-primary" md-elevation="1">
        <h1 class="md-title" style="flex: 1"><router-link to="/">SnippetShare</router-link></h1>

        <router-link to="/login"><md-button>Login</md-button></router-link>
        <router-link to="/register"><md-button>Register</md-button></router-link>
    </md-toolbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.md-title a {
  color: white!important;
}
.md-content {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
