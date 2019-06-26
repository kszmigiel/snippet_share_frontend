<template>
  <div class="snippet" v-bind:class="{slideDown: slideDown}" v-bind:style="{display: display}">                                        
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <md-avatar class="md-avatar-icon">A</md-avatar>

          <div class="md-title"><router-link to="/snippet/1337">Hello World in VueJs</router-link></div>
          <div class="md-subhead">
            <md-chip v-for="tag in tags" :key="tag"><router-link :to="'/tag/' + tag">{{ tag }}</router-link></md-chip>
          </div>
        </md-card-header-text>

        <md-menu md-size="big" md-direction="bottom-end">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item @click="hideRecommendation">
              <span>I am not interested</span>
            </md-menu-item>

            <md-menu-item>
              <span>Send a message</span>
              <md-icon>message</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-card-header>

      <md-card-media>
        <vue-code-highlight>
          def math_op(func, operand_1, operand_2): return func(operand_1, operand_2)

          def plus(a, b): return a+b
          def mult(a, b): return a*b


          print (math_op(plus, 4, 5)) #  9
          print (math_op(mult, 4, 5)) # 20
        </vue-code-highlight>
      </md-card-media>

      <md-card-content>
        Simple Hello World component. {{ $route.params.id }}

      </md-card-content>

      <md-card-actions>
        <md-button class="md-icon-button" @click="star">
          <md-icon v-bind:class="{'active': starred}">stars</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>bookmark</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>

    </md-card>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';
import '../assets/prism-twilight.css';

export default {
  name: 'snippet',
  props: {
    title: String
  },
  data: function(){
    return {
      'slideDown': false,
      'display': 'block',
      'starred': false,
      'tags': ['vuejs', 'javascript', 'nodejs']
    }
  },
  components: {
    VueCodeHighlight
  },
  methods: {
    hideRecommendation () {
      this.slideDown = true;
      var that = this;
      setTimeout(function(){
        that.display = 'none';
      }, 400);
    },
    star () {
      this.starred = !this.starred;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .snippet {
    width: 60%;
  }
  .md-card {
    display: block;
    vertical-align: top;
  }

  i.active {
    color: red!important;
  }

  a {
    color: black!important;
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
  .slideDown {
    opacity: 0;
    -moz-transition: opacity 0.4s ease-in-out;
    -o-transition: opacity 0.4s ease-in-out;
    -webkit-transition: opacity 0.4s ease-in-out;
    transition: opacity 0.4s ease-in-out;
  }
</style>
