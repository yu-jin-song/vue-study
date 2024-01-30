<template>

  <!-- 상세페이지 modal template -->
  <!-- 방법1. CSS 적용 -->
  <!-- <div class="start" :class="{ end : isModalOpen }"> -->
  
  <!-- 방법2. Transition 태그 적용 -->
  <Transition name="fade">
    <Modal @closeModal="isModalOpen = false" :onerooms="onerooms" :clickNo="clickNo" :isModalOpen="isModalOpen" />
  </Transition>
  <!-- </div> -->

  <!-- 상단 내비게이션 메뉴 -->
  <div class="menu">
    <a v-for="menu in menus" :key="menu"> {{ menu }} </a>
  </div>

  <!-- 할인 배너 출력 -->
  <Discount />

  <!-- 상품 목록 출력 -->
  <!-- <Card @click="isModalOpen = true" :item="item" v-for="item in onerooms" :key="item" /> -->
  <!-- 방법1. 자식 컴포넌트로부터 받아온 데이터 활용 -->
  <Card @openModal="isModalOpen = true; clickNo = $event" @increaseReportCnt="increase($event)" :item="item" v-for="item in onerooms" :key="item" />
  <!-- 방법2. 데이터 보관함에 저장해놓은 데이터 활용 -->
  <!-- <Card @openModal="isModalOpen = true; clickNo = i" @increaseReportCnt="increase($event)" :item="item" v-for="item in onerooms" :key="item" /> -->
</template>

<script>

import oneroomList from './assets/onerooms';
import Discount from './components/DiscountBanner.vue';
import Modal from './components/Modal.vue'
import Card from './components/Card.vue'

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
    Discount : Discount,
    Modal : Modal,
    Card : Card
  }
}
</script>

<style>
/* 등장 애니메이션 */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to {
  opacity: 1;
}

/* 퇴장 애니메이션 */
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.5s;
}
.fade-leave-to {
  opacity: 0;
}

.start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
}

/* modal(상세페이지) */
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
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
