<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchNews, NewsItem } from "@/api";
import ListItem from "../components/ListItem.vue";

export default Vue.extend({
  components: {
    ListItem,
  },

  // vdata
  data() {
    return {
      newsItems: [] as NewsItem[],
    };
  },

  // api callback
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      // console.log(response.data);
      this.newsItems = response.data; // Data Injection
    },
  },

  // api call
  created() {
    this.fetchNewsItems();
  },
});
</script>
