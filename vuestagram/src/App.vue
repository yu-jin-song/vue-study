<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container @content="content = $event" :posts="posts" :step="step" :url="url" :selectedFilter="filter" />
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
      posts : posts,
      clickedMoreCnt : 0,
      step : 0,
      url : "",
      content : "",
      filter : "",
    }
  },
  components: {
    Container: Container,
  },
  methods: {
    more() {
      axios.get('https://codingapple1.github.io/vue/more' + this.clickedMoreCnt + '.json')
      .then((result) => {
        this.posts.push(result.data);
        this.clickedMoreCnt++;
      })
      .catch(() => {
        alert("다음 게시물이 없습니다.");
      });
    },
    upload(e) {
      const file = e.target.files;
      this.url = URL.createObjectURL(file[0]);
      this.step = 1;
    },
    publish() {
      const newPost = {
        name: "작성자",
        userImage: "https://picsum.photos/100?random=2",
        postImage: this.url,
        likes: 0,
        date: "Feb 8",
        liked: false,
        content: this.content,
        filter: this.filter
      };
      this.posts.unshift(newPost);
      this.step = 0;
    }
  },
  mounted() {
    this.emitter.on('selectedFilter', (data) => {
      this.filter = data;
    });
  }
};
</script>

<style>
@import './assets/css/sytle.css';
</style>
