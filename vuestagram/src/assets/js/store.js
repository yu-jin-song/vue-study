import { createStore } from 'vuex';
import axios from 'axios';
import posts from './posts';

const store = createStore({
  state() {
    return {
      age : 20,
      // post : {},
      posts : posts,
      more : {},
      clickedMoreCnt : 0
    }
  },
  mutations : {
    increaseAge(state) {
        state.age++;
    },
    clickedLikes(state, data) {
      // state.post = post;
      state.posts[data.index] = data.post;

      if(state.posts[data.index].liked == false) {
        state.posts[data.index].likes++;
        state.posts[data.index].liked = true;
      } else {
        state.posts[data.index].likes--;
        state.posts[data.index].liked = false;
      }
    },
    publish(state, data) {
      state.more = data.more;
      state.posts.push(state.more);
      
      state.clickedMoreCnt = data.clickedMoreCnt;
      state.clickedMoreCnt++;
    }
  },
  actions : {
    more(context, clickedMoreCnt) {
      // context.clickedMoreCnt = clickedMoreCnt;
      console.log("clickedMoreCnt = " + clickedMoreCnt);
      axios.get('https://codingapple1.github.io/vue/more' + clickedMoreCnt + '.json')
      .then((result) => {
        console.log(JSON.stringify(result));
        const params = {
          more : result.data,
          clickedMoreCnt : clickedMoreCnt
        };
        context.commit('publish', params);
        // this.posts.push(result.data);
        // this.clickedMoreCnt++;
      })
      .catch(() => {
        alert("다음 게시물이 없습니다.");
      });
    }
  }
})

export default store