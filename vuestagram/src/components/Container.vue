<template>
  <div>
    <!-- <Post :post="posts[0]" />
    <Post :post="posts[1]" />
    <Post :post="posts[2]" /> -->
    <Post :post="posts[i]" v-for="(item, i) in posts" :key="i"/>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Container",
  props: {
    posts: Array
  },
  components: {
    Post: Post,
  }
};
</script>

<style>
</style>