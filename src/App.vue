<template>
  <div id="app">
    <md-toolbar class="md-primary">
        <h1 class="md-title">SnippetShare</h1>
    </md-toolbar>
 
    <div v-for="(snippet, $index) in snippets" :key="$index">
    	<md-content>
    		<snippet></snippet>
    	</md-content>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>

    <!--</md-content>-->
  </div>
</template>

<script>
import Snippet from './components/Snippet.vue'
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'app',
  components: {
    Snippet, InfiniteLoading
  },
  data() {
  	return {
  		page: 1,
  		snippets: [1,2,3]
  	}
  },
  methods: {
  	infiniteHandler ($state) {
  		this.page += 1;
  		this.snippets.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
  		$state.loaded();
  		$state.complete();
  	}
  }
}
</script>

<style>
.md-content {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
