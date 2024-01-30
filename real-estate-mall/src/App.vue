<template>

  <!-- 상세페이지 modal template -->
  <Transition name="fade">
    <Modal @closeModal="isModalOpen = false" :onerooms="onerooms" :clickNo="clickNo" :isModalOpen="isModalOpen" />
  </Transition>

  <!-- 상단 내비게이션 메뉴 -->
  <div class="menu">
    <a v-for="menu in menus" :key="menu"> {{ menu }} </a>
  </div>

  <!-- 할인 배너 출력 -->
  <Discount />

  <button @click="priceAscSort">가격순정렬</button>
  <button @click="priceDescSort">가격역순정렬</button>
  <button @click="titleAscSort">상품명정렬(가나다순)</button>
  <button @click="sortBack">되돌리기</button>

  <!-- 상품 목록 출력 -->
  <Card @openModal="isModalOpen = true; clickNo = $event" @increaseReportCnt="increase($event)" :item="item" v-for="item in onerooms" :key="item" />
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
      originalOnerooms : [...oneroomList],
      onerooms : oneroomList,
      clickNo : 0,
      isModalOpen: false,
      fontColor : "color : blue",
      menus : ['Home', 'Shop', 'About'],
    }
  },
  methods : {
    increase : function(idx) {
      this.onerooms[idx].reportCnt++;
    },
    priceAscSort() {
      this.onerooms.sort(function(left, right) {
        return left.price - right.price;
      });
    },
    priceDescSort() {
      this.onerooms.sort(function(left, right) {
        return right.price - left.price;
      });
    },
    titleAscSort() {
      this.onerooms.sort(function(left, right) {
        const leftTitle = left.title.toLowerCase();
        const rightTitle = right.title.toLowerCase();

        if(leftTitle > rightTitle) {
          return 1;
        } else if(leftTitle < rightTitle) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    sortBack() {
      this.onerooms = [...this.originalOnerooms];
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
