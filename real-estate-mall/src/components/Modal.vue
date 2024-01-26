<template>
    <div class="bg-black" v-if="isModalOpen">
        <div class="bg-white">
            <img class="img" :src="onerooms[clickNo].image">
            <h4>{{onerooms[clickNo].title}}</h4>
            <p>{{onerooms[clickNo].content}}</p>
            <p>{{onerooms[clickNo].price}} 원</p>
            <!-- <button @click="isModalOpen = false">닫기</button> -->
        </div>
  </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Modal',
    props : {
        onerooms : Array,
        clickNo : Number,
        isModalOpen : Boolean
    }
}
</script>

<style>

</style>