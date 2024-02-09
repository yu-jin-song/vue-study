import { createStore } from 'vuex';
// import posts from './posts.js';

const store = createStore({
  state() {
    return {
      age : 20,
      // likes : 0,
      // liked : false
      post : {}
    }
  },
  mutations : {
    increaseAge(state) {
        state.age++;
    },
    // clickedLikes(state) {
    //   if (state.liked) {
    //     state.likes--;
    //     state.liked = false;
    //   } else {
    //     state.likes++;
    //     state.liked = true;
    //   }
    // }
    // 각 사진에 좋아요 기능 적용
    clickedLikes(state, post) {
      state.post = post;
      
      if(state.post.liked == false) {
        state.post.likes++;
        state.post.liked = true;
      } else {
        state.post.likes--;
        state.post.liked = false;
      }
    }
  }
})

export default store