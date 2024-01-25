<template>

  <!-- 상단 내비게이션 메뉴 -->
  <div class="menu">
    <!-- 1. <태그 v-for="작명 in 반복횟수" :key="작명"> -->
    <!-- <a v-for="menu in 3" :key="menu">Home</a> -->

    <!-- 2. <태그 v-for="작명 in 배열" :key="작명"> {{ 작명 }} -->
    <a v-for="menu in menus" :key="menu"> {{ menu }} </a>

    <!-- 3. <태그 v-for="(작명(n),순서(i)) in 배열" :key="작명"> {{ 작명/순서 }} -->
    <!-- <a v-for="(menu,i) in menus" :key="menu"> {{ menu }},{{ i }} </a> -->
  </div>

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <div v-for="(item, i) in 3" :key="item">
    <h4 class="red" :style="fontColor">{{ products[i] }}</h4>
    <p>{{ prices[i] }} 만원</p>
  </div>
  <!-- 다른 방법
        <div v-for="(item, i) in products" :key="item">
          <h4 class="red" :style="fontColor">{{ item }}</h4>
          <p>{{ prices[i] }} 만원</p>
        </div>
  -->
  <!-- <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ prices[1] }} 만원</p>
  </div>
  <div>
    <h4 class="red" :style="fontColor">{{ products[2] }}</h4>
    <p>{{ prices[2] }} 만원</p>
  </div> -->
</template>

<script>

// document.getElementById().innerHTML = ?; js 데이터 바인딩 방법

export default {
  name: 'App',
  data() {  // 데이터 보관, 자료형은 object
    return {
      prices : [50, 60, 70],  // 자료이름 : 내용
      fontColor : "color : blue",
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      menus : ['Home', 'Shop', 'About']
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
