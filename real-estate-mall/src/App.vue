<template>

  <!-- 상세페이지 modal template -->
  <!-- <div class="bg-black" v-if="isModalOpen"> -->
  <div class="bg-black" v-if="isModalOpen == true">
    <div class="bg-white">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click="isModalOpen = false">닫기</button>
    </div>
  </div>

  <!-- 상단 내비게이션 메뉴 -->
  <div class="menu">
    <a v-for="menu in menus" :key="menu"> {{ menu }} </a>
  </div>

  <div class="product" v-for="(item, i) in 3" :key="item">
    <!-- <img src="./assets/room0.jpg" class="room-img"> -->
    <img class="room-img" :src="require('./assets/room' + i + '.jpg')">
    <h4 :style="fontColor" @click="isModalOpen = true">{{ products[i] }}</h4>
    <p>{{ prices[i] }} 만원</p>
    <!-- <button @click="reportCnt++">허위매물신고</button> <span>신고수 : {{ reportCnt }}</span> -->
    <!-- <button @click="increase">허위매물신고</button> <span>신고수 : {{ reportCnt }}</span> -->
    <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{ reportCnts[i] }}</span>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {  // state : 정보, UI의 현재 상태 저장
    return {
      isModalOpen: false,
      prices : [50, 60, 70],
      fontColor : "color : blue",
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      menus : ['Home', 'Shop', 'About'],
      // reportCnt : 0, 
      reportCnts : [0, 0, 0]
    }
  },
  methods : { // 함수
    // increase() { //
    //   this.reportCnt++;
    // }
    increase : function(idx) {
      this.reportCnts[idx]++;
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
