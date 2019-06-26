<template>
  <div class="page">
    <md-content>
    	<snippet></snippet>
    </md-content>
    <md-content>
    	<snippet-comments></snippet-comments>
    </md-content>
  </div>
</template>

<script>
import Snippet from './Snippet.vue'
import SnippetComments from './SnippetComments.vue'

export default {
	name: 'snippet-page',
	components: {
		Snippet, SnippetComments
	}
}
</script>

<style lang="scss" scoped>

</style>
