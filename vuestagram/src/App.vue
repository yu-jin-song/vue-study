<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="$store.state.step == 1" @click="$store.commit('nextStep')">Next</li>
      <li v-if="$store.state.step == 2" @click="$store.commit('publish', {url : url, content : content, filter : filter})">publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container @content="content = $event" :posts="$store.state.posts" :step="$store.state.step" :url="url" :selectedFilter="filter" />
  <button @click="$store.dispatch('more', $store.state.clickedMoreCnt)">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

</template>

<script>
import Container from "./components/Container.vue";

export default {
  name: "App",
  data() {
    return {
      url : "",
      content : "",
      filter : ""
    }
  },
  components: {
    Container: Container,
  },
  methods: {
    upload(e) {
      const file = e.target.files;
      this.url = URL.createObjectURL(file[0]);
      this.$store.state.step = 1;
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
