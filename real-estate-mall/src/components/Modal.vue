<template>
    <div class="bg-black" v-if="isModalOpen">
        <div class="bg-white">
            <img class="img" :src="onerooms[clickNo].image">
            <h4>{{onerooms[clickNo].title}}</h4>
            <p>{{onerooms[clickNo].content}}</p>
            <!-- <input @input="month = $event.target.value" /> -->
            <!-- <input v-model="month" /> -->

            <!-- IME 작성 시 실시간 데이터 바인딩을 위한 코드 -->
            <input @input="month = $event.target.value" :value="month" />

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
    watch : {
        month(data) {
            // if (data > 12) {
            //     alert('개월 수는 12를 넘어갈 수 없습니다.')
            // }

            if(data === '') {    // 데이터 입력이 없는 경우
                return; // 아무런 처리도 하지 않음
            }

            if(isNaN(data) || data.includes(' ')) {  // 데이터가 숫자가 아닌 경우
                alert('숫자만 입력해주세요.');

                if(/\d/.test(data)) { // 숫자가 존재하는 경우
                    this.month = data.replace(/[^0-9]/, '');   // 숫자를 제외하고 모두 삭제
                } else {    // 문자나 공백만 입력된 경우
                    this.month = '1';   // 개월 수 초기화
                }
            }
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