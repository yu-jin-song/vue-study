<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :posts="posts" />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import posts from "./assets/js/posts.js";
import Container from "./components/Container.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      posts: posts,
      clickMoreCnt: 0
    }
  },
  components: {
    Container: Container,
  },
  methods: {
    more() {
      // axios.get('https://codingapple1.github.io/vue/more0.json')
      // .then(function(result) {
      //   console.log(result.data);
      // });
      axios.get('https://codingapple1.github.io/vue/more' + this.clickMoreCnt + '.json')
      .then((result) => {
        // console.log(result.data);
        this.posts.push(result.data);
        this.clickMoreCnt++;
      })
      .catch(() => {
        alert("다음 게시물이 없습니다.");
      });
    }
  }
};
</script>

<style>
@import './assets/css/sytle.css';
</style>
