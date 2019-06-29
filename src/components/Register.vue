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
              <md-field :class="messageClass">
                <label>Username</label>
                <md-input v-model="required" type="text" required></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="messageClass">
                <label>Email</label>
			    	    <md-input v-model="required" type="text" required></md-input>
				      </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
          	<div class="md-layout-item md-small-size-100">
            	<md-field>
                <label>Password</label>
                <md-input v-model="password" type="password" required></md-input>
				      </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Repeat password</label>
                <md-input v-model="password" type="password" required></md-input>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Register</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data: function () {
      return {
        username: null,
        email: null
      }
    }
  }    
</script>

<style lang="scss" scoped>
.login {
	margin-top: 10%;
}
</style>