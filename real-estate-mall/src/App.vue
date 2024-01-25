<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <h4 class="red" :style="fontColor">{{ products[0] }}</h4>
    <p>{{ prices[0] }} 만원</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ prices[1] }} 만원</p>
  </div>
  <div>
    <h4 class="red" :style="fontColor">{{ products[2] }}</h4>
    <p>{{ prices[2] }} 만원</p>
  </div>
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
  margin-top: 60px;
}
</style>
