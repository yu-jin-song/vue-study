<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="nextStep">Next</li>
      <li v-if="step == 2" @click="publish({url : url, content : content, filter : filter})">publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container @content="content = $event" :posts="posts" :url="url" :selectedFilter="filter" />
  <button v-if="step == 0" @click="$store.dispatch('more', clickedMoreCnt)">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

</template>

<script>
import {mapState, mapMutations} from 'vuex';
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
    ...mapMutations(['nextStep', 'publish']),
    upload(e) {
      const file = e.target.files;
      this.url = URL.createObjectURL(file[0]);
      this.$store.state.step = 1;
    }
  },
  computed: {
    ...mapState(['step', 'posts', 'clickedMoreCnt'])
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
