<template>
	<div class="subcomment">
		<div class="subcomment-header">
			<md-avatar class="md-avatar-icon">A</md-avatar>
			<router-link to="/user/dayeeem">dayeeem</router-link>
		</div>
		<div class="subcomment-content">
			<span>
				{{ content }}
			</span>
		</div>
		<div class="subcomment-actions">
			<md-button class="md-icon-button" @click="star" :style="{'vertical-align': 'middle', 'margin-left': '0'}">
          		<md-icon v-bind:class="{'active': starred}">stars</md-icon>
        	</md-button>
        	<span ref="counter">163</span>
        	<a href="javascript:;" @click="replyToggleHandler">Reply</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'subcomment',
	props: ['content'],
	data: function () {
		return {
			'starred': false
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
    	replyToggleHandler () {
    		this.$parent.replyToggle('dayeeem');
    	}
    }
}
</script>

<style scoped>
.subcomment {
	margin-bottom: 35px;
	margin-left: 35px;
}
.subcomment-header {
	margin-bottom: 6px;
}

.subcomment-header a {
	margin-left: 4px;
	font-size: 16px;
}

.subcomment-actions {
	float: left;
	width: 100%;
}

.subcomment-actions a {
	margin-left: 20px;
}

i.active {
	color: red!important;
}
</style>