import { createStore } from 'vuex';
import axios from 'axios';
import posts from './posts';

const store = createStore({
  state() {
    return {
      posts : posts,
      step : 0,
      more : {},
      clickedMoreCnt : 0
    }
  },
  mutations : {
    clickedLikes(state, data) {
      state.posts[data.index] = data.post;

      if(state.posts[data.index].liked == false) {
        state.posts[data.index].likes++;
        state.posts[data.index].liked = true;
      } else {
        state.posts[data.index].likes--;
        state.posts[data.index].liked = false;
      }
    },
    clickedMore(state, data) {
      state.more = data.more;
      state.posts.push(state.more);

      state.clickedMoreCnt = data.clickedMoreCnt;
      state.clickedMoreCnt++;
    },
    publish(state, data) {
      const newPost = {
        name: "작성자",
        userImage: "https://picsum.photos/100?random=2",
        postImage: data.url,
        likes: 0,
        date: "Feb 8",
        liked: false,
        content: data.content,
        filter: data.filter
      };
      state.posts.unshift(newPost);
      state.step = 0;
    },
    nextStep(state) {
      state.step++;
    }
  },
  actions : {
    more(context, clickedMoreCnt) {
      axios.get('https://codingapple1.github.io/vue/more' + clickedMoreCnt + '.json')
      .then((result) => {
        const params = {
          more : result.data,
          clickedMoreCnt : clickedMoreCnt
        };
        context.commit('clickedMore', params);
      })
      .catch(() => {
        alert("다음 게시물이 없습니다.");
      });
    }
  }
})

export default store