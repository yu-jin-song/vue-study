<template>

  <!-- 상단 내비게이션 메뉴 -->
  <div class="menu">
    <a v-for="menu in menus" :key="menu"> {{ menu }} </a>
  </div>

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <div class="product" v-for="(item, i) in 3" :key="item">
    <h4 :style="fontColor">{{ products[i] }}</h4>
    <p>{{ prices[i] }} 만원</p>
    <!-- <button @click="reportCnt++">허위매물신고</button> <span>신고수 : {{ reportCnt }}</span> -->
    <!-- <button @click="increase">허위매물신고</button> <span>신고수 : {{ reportCnt }}</span> -->
    <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{ reportCnts[i] }}</span>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

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
