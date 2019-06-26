<template>
	<div class="comments">
		<md-card>
			<md-card-content>
				<comment></comment>
				<comment></comment>
			</md-card-content>
		</md-card>
	</div>
</template>

<script>
import Comment from './Comment.vue';

export default {
	name: 'snippet-comments',
	components: {
		Comment
	}
}
</script>

<style lang="scss" scoped>
.comments {
	width: 60%;
}
</style>