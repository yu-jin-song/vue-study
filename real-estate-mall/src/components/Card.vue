<template>
    <!-- 레이아웃 여러개 한 번에 축약 -->
    <!-- <div class="product" v-for="item in onerooms" :key="item">
        <img class="room-img" :src="item.image">
        <h4 :style="fontColor">{{ item.title }}</h4>
        <p>{{ item.price }} 원</p>
    </div> -->
    
    <!-- 레이아웃 하나를 재활용 -->
    <div>
        <img class="room-img" :src="item.image">
        <h4 :style="fontColor">{{ item.title }}</h4>
        <p>{{ item.price }} 원</p>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : 'Card',
    props : {
        // onerooms : Array,
        // clickNo : Number.
        item : Object
    }
}
</script>

<style>

</style>