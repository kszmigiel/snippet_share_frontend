<template>
  <div>
    <div v-for="(snippet, $index) in snippets" :key="$index">
      <md-content>
        <snippet></snippet>
      </md-content>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import Snippet from './Snippet.vue'
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'home',
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
      this.snippets.push(1, 2);
      $state.loaded();
      $state.complete();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
