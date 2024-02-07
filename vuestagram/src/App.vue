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

  <Container :posts="posts" :step="step" />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

<!-- tab 기능 테스트
  <div v-if="selectedTabNum === 0">내용0</div>
  <div v-if="selectedTabNum === 1">내용1</div>
  <div v-if="selectedTabNum === 2">내용2</div>
  <button @click="selectedTabNum = 0">버튼0</button>
  <button @click="selectedTabNum = 1">버튼1</button>
  <button @click="selectedTabNum = 2">버튼2</button>
 -->
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
      step : 2
    }
  },
  components: {
    Container: Container,
  },
  methods: {
    more() {
      // axios.get(`https://codingapple1.github.io/vue/more${this.clickMoreCnt}.json`)
      axios.get('https://codingapple1.github.io/vue/more' + this.clickMoreCnt + '.json')
      .then((result) => {
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
