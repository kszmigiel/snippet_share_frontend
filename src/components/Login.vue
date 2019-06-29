<template>
  <div class="login">
    <form novalidate class="md-layout md-alignment-center-center">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
			  		<label>Email</label>
			    	<md-input v-model="initial" type="text"></md-input>
				</md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
          	<div class="md-layout-item md-small-size-100">
            	<md-field>
			  		<label>Password</label>
			    	<md-input v-model="password" type="password"></md-input>
				</md-field>
            </div>
          </div>

          <a href="#">Forgot your password?</a>

        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Login</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login'    
  }
</script>

<style lang="scss" scoped>
.login {
	margin-top: 10%;
}
</style>