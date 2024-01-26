<template>

  <!-- 상세페이지 modal template -->
  <div class="bg-black" v-if="isModalOpen">
  <!-- <div class="bg-black" v-if="isModalOpen == true"> -->
    <div class="bg-white">
      <img class="img" :src="onerooms[clickNo].image">
      <h4>{{onerooms[clickNo].title}}</h4>
      <p>{{onerooms[clickNo].content}}</p>
      <p>{{onerooms[clickNo].price}} 원</p>
      <button @click="isModalOpen = false">닫기</button>
    </div>
  </div>

  <!-- 상단 내비게이션 메뉴 -->
  <div class="menu">
    <a v-for="menu in menus" :key="menu"> {{ menu }} </a>
  </div>

  <div class="product" v-for="(item, i) in onerooms" :key="item">
    <!-- <img class="room-img" :src="require('./assets/room' + i + '.jpg')"> -->
    <!-- <img class="room-img" :src="onerooms[i].image"> -->
    <img class="room-img" :src="item.image">
    <!-- <h4 :style="fontColor" @click="isModalOpen = true">{{ products[i] }}</h4> -->
    <!-- <h4 :style="fontColor" @click="isModalOpen = true">{{ onerooms[i].title }}</h4> -->
    <h4 :style="fontColor" @click="isModalOpen = true; clickNo = i">{{ item.title }}</h4>
    <!-- <p>{{ prices[i] }} 만원</p> -->
    <!-- <p>{{ onerooms[i].price }} 원</p> -->
    <p>{{ item.price }} 원</p>
    <!-- <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{ reportCnts[i] }}</span> -->
    <!-- <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{ onerooms[i].reportCnt }}</span> -->
    <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{ item.reportCnt }}</span>
  </div>
</template>

<script>

import oneroomList from './assets/onerooms';

export default {
  name: 'App',
  data() {
    return {
      onerooms : oneroomList,
      clickNo : 0,
      isModalOpen: false,
      // prices : [50, 60, 70],
      fontColor : "color : blue",
      // products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      menus : ['Home', 'Shop', 'About'],
      // reportCnts : [0, 0, 0]
    }
  },
  methods : {
    increase : function(idx) {
      // this.reportCnts[idx]++;
      this.onerooms[idx].reportCnt++;
    }
  },
  components: {
  }
}
</script>

<style>
/* modal(상세페이지) */
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.bg-black {
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.bg-white {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.bg-white img {
  width: 80%;
}

.room-img {
  width: 80%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

/* navigation */
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a { /* a 태그 속성 적용 */
  color: white;
  padding: 10px;
}
</style>
