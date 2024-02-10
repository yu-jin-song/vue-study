<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage: `url(${post.userImage})` }"></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <div :class="post.filter" class=" post-body" :style="{ backgroundImage: `url(${post.postImage})` }" @click="$store.commit('clickedLikes', {post : post, index : index});" />
    <div class="post-content">
      <p>{{ post.likes }} Likes</p>
      <p><strong>{{ post.name }}</strong> {{ post.content }}</p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name : "Post",
  props : {
    post : Object,
    index : Number
  },
  methods : {
  }
};
</script>

<style>
@import '../assets/css/sytle.css';
</style>