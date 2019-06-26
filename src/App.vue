<template>
  <div id="app">
    <md-toolbar class="md-primary">
        <h1 class="md-title"><router-link to="/">SnippetShare</router-link></h1>
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
