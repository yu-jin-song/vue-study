<template>
  <div class="container">
    <Header />
    <router-view :posts="posts"></router-view>
  </div>
  <Footer />
</template>

<script>
// import List from './components/PostList.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import PostList from './assets/dist/js/posts.js';

export default {
  name: 'App',
  data() {
    return {
      posts : PostList
    }
  },
  components: {
    // List : List
    Header : Header,
    Footer : Footer
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
  @import "../src/assets/dist/css/blog.css";

  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>
