<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script>
import { fetchNews } from "@/api";
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus";

export default {
  components: {
    ListItem
  },

  // vdata
  data() {
    return {
      newsItems: []
    };
  },

  // api callback
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      // console.log(response.data);
      this.newsItems = response.data; // Data Injection
    }
  },

  // api call
  created() {
    this.fetchNewsItems();
  }
};
</script>

<style>

</style>
