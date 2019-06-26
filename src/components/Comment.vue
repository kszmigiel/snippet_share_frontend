<template>
	<div class="comment">
		<div class="comment-header">
			<md-avatar class="md-avatar-icon">A</md-avatar>
			<router-link to="/user/dayuum">dayuum</router-link>
		</div>
		<div class="comment-content">
			<span>
				>tell faggot brother he just got pranked<br>
				>"how?"<br>
				>tell him to look in his room<br>
				>he spends 10 minutes looking for the prank<br>
				>there was no prank
			</span>
		</div>
		<div class="comment-actions">
			<md-button class="md-icon-button" @click="star" :style="{'vertical-align': 'middle', 'margin-left': '0'}">
          		<md-icon v-bind:class="{'active': starred}">stars</md-icon>
        	</md-button>
        	<span ref="counter">163</span>
        	<a href="javascript:;" @click="replyToggleHandler">Reply</a>
		</div>
		<subcomment v-for="reply in replies" :key="reply.id" :content="reply.content"></subcomment>
		<div class="reply_container">
			<md-field :class="[reply_active ? 'show' : 'hide']">
		      <label>Reply to {{reply_username}}</label>
		      <md-textarea ref="reply_textarea"></md-textarea>
		      <md-button class="md-primary" @click="reply">Send</md-button>
		    </md-field>
		</div>
	</div>
</template>

<script>
import Subcomment from './Subcomment.vue';

export default {
	name: 'comment',
	data: function () {
		return {
			'starred': false,
			'reply_active': false,
			'reply_username': 'dayuum',
			'replies': []
		}
	},
	methods: {
		star () {
      		this.starred = !this.starred;
      		if (this.starred) {
      			this.$refs.counter.innerHTML = Number(this.$refs.counter.innerHTML) + 1;
      		}
      		else 
      		{
      			this.$refs.counter.innerHTML = Number(this.$refs.counter.innerHTML) - 1;
      		}
    	},
    	replyToggle (username) {
    		this.reply_active = !this.reply_active;
    		if (this.reply_active){
    			this.$refs.reply_textarea.$el.focus();
    		}
    		if (username){
    			this.reply_username = username;
    		}
    		else
    		{
    			this.reply_username = 'dayuum';
    		}
    	},
    	replyToggleHandler () {
    		this.replyToggle('dayuum');
    	},
    	reply() {
    		this.replies.push({'content': '@' + this.reply_username + ': ' + this.$refs.reply_textarea.$el.value, 'id': Math.floor(Math.random() * 200)});
    		this.$refs.reply_textarea.$el.value = '';
    		this.replyToggle();
    	}
	},
	components: {
		Subcomment
	}
}
</script>

<style scoped>
.comment {
	margin-bottom: 35px;
}
.comment-header {
	margin-bottom: 6px;
}

.comment-header a {
	margin-left: 4px;
	font-size: 16px;
}

.comment-actions {
	float: left;
	width: 100%;
}

.comment-actions a {
	margin-left: 20px;
}

i.active {
	color: red!important;
}

.reply_container .show {
	-moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    max-height: 1000px;
    overflow: hidden;
}

.reply_container .hide {
	overflow: hidden;
    max-height: 0;
    min-height: 0!important;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
</style>