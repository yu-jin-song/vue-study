<template>
    <div>
        <img class="room-img" :src="item.image">
        <h4 @click="$emit('openModal', item.id)" :style="fontColor">{{ item.title }}</h4>
        <p>{{ item.price }} 원</p>
        <button @click="$emit('increaseReportCnt', item.id)">허위매물신고</button> <span>신고수 : {{ item.reportCnt }}</span>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : 'Card',
    props : {
        item : Object
    }
}
</script>

<style>

</style>