<template>
    <div class="bg-black" v-if="isModalOpen">
        <div class="bg-white">
            <img class="img" :src="onerooms[clickNo].image">
            <h4>{{onerooms[clickNo].title}}</h4>
            <p>{{onerooms[clickNo].content}}</p>
            <!-- <input @input="month = $event.target.value" /> -->
            <!-- <input v-model="month" /> -->
            <input v-model.number="month" />
            <!-- <p>{{month}}개월  {{onerooms[clickNo].price * month}} 원</p> -->
            <p>{{month}}개월  {{onerooms[clickNo].price + month}} 원</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
  </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Modal',
    data() {
        return {
            month : 1
        }
    },
    props : {
        onerooms : Array,
        clickNo : Number,
        isModalOpen : Boolean
    }
}
</script>

<style>

</style>