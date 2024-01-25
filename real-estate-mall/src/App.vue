<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <h4 class="red" :style="fontColor">XX 원룸</h4>
    <p>{{ price1 }} 만원</p>
  </div>
  <div>
    <h4>XX 원룸</h4>
    <p>{{ price2 }} 만원</p>
  </div>
</template>

<script>

// document.getElementById().innerHTML = ?; js 데이터 바인딩 방법

export default {
  name: 'App',
  data() {  // 데이터 보관, 자료형은 object
    return {
      price1 : 60,  // 자료이름 : 내용
      price2 : 70,
      fontColor : "color : blue",
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
