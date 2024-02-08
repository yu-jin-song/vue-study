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

  <Container :posts="posts" :step="step" :url="url"/>
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple accept="image/*" type="file" id="file" class="inputfile" />
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
      clickMoreCnt: 0,
      // selectedTabNum: 0,
      step : 0,
      url : ""
    }
  },
  components: {
    Container: Container,
  },
  methods: {
    more() {
      axios.get('https://codingapple1.github.io/vue/more' + this.clickMoreCnt + '.json')
      .then((result) => {
        this.posts.push(result.data);
        this.clickMoreCnt++;
      })
      .catch(() => {
        alert("다음 게시물이 없습니다.");
      });
    },
    upload(e) {
      const file = e.target.files;
      this.url = URL.createObjectURL(file[0]);
      this.step = 1;
    }
  }
};
</script>

<style>
@import './assets/css/sytle.css';
</style>
