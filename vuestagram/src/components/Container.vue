<template>
  <div>
    <!-- 게시글 -->
    <div v-if="step === 0">
      <Post :post="post" :index="i" v-for="(post, i) in posts" :key="i" />
    </div>

    <!-- 필터 선택 페이지 -->
    <div v-if="step === 1">
      <div :class="`${selectedFilter} upload-image`" :style="{ backgroundImage : `url(${url})`}"></div>
      <div class="filters">
        <FilterBox :image="url" :filter="filter" v-for="filter in filters" :key="filter">
          <span style="color : black">{{ filter }}</span>
        </FilterBox>
      </div>
    </div>

    <!-- 글 작성 페이지 -->
    <div v-if="step === 2">
      <div :class="`${selectedFilter} upload-image`" :style="{ backgroundImage : `url(${url})` }"></div>
      <div class="write">
        <textarea class="write-box" :placeholder="placeholder" @focus="handleFocus" @blur="handleBlur" @input="$emit('content', $event.target.value)" />
      </div>
    </div>

    <!-- 팔로워 페이지 -->
    <div v-if="step === 3">
      <MyPage />
    </div>
  </div>
</template>

<script>
import filters from "../assets/js/filter.js";
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import MyPage from "./MyPage.vue";

export default {
  name: "Container",
  data() {
    return {
      filters : filters,
      isPlaceHolderActive : true,
      placeholder : 'write!'
    }
  },
  props: {
    posts: Array,
    url: String,
    selectedFilter : String
  },
  components: {
    Post: Post,
    FilterBox: FilterBox,
    MyPage: MyPage
  },
  methods: {
    handleFocus() {
      this.placeholder = '';
      this.isPlaceHolderActive = false;
    },
    handleBlur(event) {
      this.isPlaceHolderActive = true;
      if(event.target.value === '') {
        this.placeholder = 'write!';
      }
    }
  },
  computed: {
    step() {
      return this.$store.state.step;
    }
  }
};
</script>

<style>
@import "../assets/css/sytle.css";
</style>