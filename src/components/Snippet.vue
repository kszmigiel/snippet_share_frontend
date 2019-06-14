<template>
  <div class="snippet">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <md-avatar class="md-avatar-icon">A</md-avatar>

          <div class="md-title">Hello World in VueJs</div>
          <div class="md-subhead"><md-chip>vuejs</md-chip><md-chip>javascript</md-chip><md-chip>nodejs</md-chip></div>
        </md-card-header-text>

        <md-menu md-size="big" md-direction="bottom-end">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item @click="doACall">
              <span>Call</span>
              <md-icon>phone</md-icon>
            </md-menu-item>

            <md-menu-item @click="sendMessage">
              <span>Send a message</span>
              <md-icon>message</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-card-header>

      <md-card-media>
        <img src="https://cdn-images-1.medium.com/max/1200/1*HyGwWABsk9likhgSGfn1Sg.jpeg" alt="COBOL">
      </md-card-media>

      <md-card-content>
        Simple Hello World component.
      </md-card-content>

      <md-card-actions>
        <md-button>View</md-button>
        <md-button>Copy</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'snippet',
  props: {
    title: String
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.md-card {
    margin: 4px;
    display: block;
    vertical-align: top;
  }

  .md-card-example {
    .md-subhead {
      .md-icon {
        $size: 16px;

        width: $size;
        min-width: $size;
        height: $size;
        font-size: $size !important;
      }

      span {
        vertical-align: middle;
      }
    }

    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .md-icon {
        margin: 8px;
      }
    }

    .md-button-group {
      display: flex;

      .md-button {
        min-width: 60px;
        border-radius: 2px;
      }
    }
  }
</style>
