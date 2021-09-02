<template>
  <div id="app">
    <spinner :loading="loading"></spinner>
    <tool-bar></tool-bar>
    <transition name="routing-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus';
import Vue from 'vue';
import { MutationsTypes } from "@/store/mutations";
import { ActionsTypes } from "@/store/actions";

export default Vue.extend({
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    onProgress() {
      this.loading = true;
    },
    offProgress() {
      this.loading = false;
    }
  },
  async created() {
    /**
     * store type 정의
     * vue.d.ts 소스에서 $store: Store<any>; -> $store: Store<RootState>;
     */

    // getters 보다는 this 접근하는것을 권장합니다.
    // this.$store.state.news;
    this.$store.getters.fetchedNews;

    // this.$store.commit(MutationsTypes.SET_NEWS, 1);
    // const response = await this.$store.dispatch(ActionsTypes.FETCH_NEWS);

    bus.$on('on:progress', this.onProgress);
    bus.$on('off:progress', this.offProgress);
  }
})
</script>

<style>
body {
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.routing-fade-enter-active, .routing-fade-leave-active {
  transition: opacity .3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
