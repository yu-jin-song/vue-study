<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔎" @input="search"/>
    <div class="post-header" v-for="follower in followers" :key="follower">
      <div class="profile" :style="`background-image : url(${follower.image})`"></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "MyPage",
  setup() {
    const originalFollowers = ref([]);
    const followers = ref([]);

    onMounted(() => {
      axios.get("/vuestagram/follower.json").then((result) => {
        originalFollowers.value = result.data;
        followers.value = result.data;
      });
    });

    function search(event) {
        const searchText = event.target.value;

        if(searchText.trim() === '') {
            followers.value = [...originalFollowers.value];
        } else {
            followers.value = originalFollowers.value.filter((follower) => {
            return follower.name.includes(searchText);
        });
        }
    }

    return { followers, search };
  },
};
</script>

<style>
</style>