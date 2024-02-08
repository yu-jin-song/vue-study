<template>
  <div>
    <!-- 게시글 -->
    <div v-if="step === 0">
      <Post :post="posts[i]" v-for="(item, i) in posts" :key="i" />
    </div>

    <!-- 필터 선택 페이지 -->
    <div v-if="step === 1">
      <div class="upload-image" :style="{ backgroundImage : `url(${url})` }"></div>
      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </div>

    <!-- 글 작성 페이지 -->
    <div v-if="step === 2">
      <div class="upload-image" :style="{ backgroundImage : `url(${url})` }"></div>
      <div class="write">
        <textarea class="write-box" @input="$emit('content', $event.target.value)">write!</textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Container",
  props: {
    posts: Array,
    step: Number,
    url: String
  },
  components: {
    Post: Post,
  }
};
</script>

<style>
@import "../assets/css/sytle.css";
</style>