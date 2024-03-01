<template>
  <div>
    <button @click="pushButton(buttonName)">{{ buttonName }}</button>
  </div>
  <Caller :numbers="callerNumbers"/>
  <Player
    :playerId="index"
    :numbers="players[index]" 
    :calledNumber="calledNumber" 
    :callerNumbers="callerNumbers" 
    :winner="winner"
    v-for="(playerNumbers, index) in players" :key="index"
  />
</template>

<script>
import { onMounted, ref } from 'vue';
import Caller from './components/BingoCaller.vue';
import Player from './components/BingoPlayer.vue';

export default {
  name: 'App',
  components: {
    Caller,
    Player
  },
  setup() {
    
    // 호출된 숫자
    const calledNumber = ref('');
    // caller의 숫자 목록
    const callerNumbers = ref([]);
    // 플레이어들의 숫자 목록
    const players = ref([[], [], [], [], []]);
    // 승자
    const winner = ref('');
    // 버튼 이름
    const buttonName = ref('call');

    /**
     * 게임 초기화 함수
     */
    const resetGame = () => {
      calledNumber.value = '';
      callerNumbers.value = [];
      // 플레이어 숫자 배열 초기화
      players.value.forEach(playerNumbers => {
        resetPlayerNumbers(playerNumbers);
      });
      winner.value = '';
      buttonName.value = 'call';
    };

    /**
     * 플레이어의 숫자 배열을 초기화하는 함수
     * 
     * @param playerNumbers - 플레이어의 숫자 배열
     */
    const resetPlayerNumbers = (playerNumbers) => {
      playerNumbers.splice(0, playerNumbers.length);

      for (let repeatCount = 0; repeatCount < 5; repeatCount++) {
        const createdNumber = findUniqueNumber(playerNumbers, createAndGetNumber());
        playerNumbers.push(createdNumber);
      }
    };


    /**
     * 중복되지 않는 숫자를 찾는 함수
     * 
     * @param numbers - 숫자 배열
     * @param number - 숫자
     * @return 숫자(중복 X)
     */
    const findUniqueNumber = (numbers, number) => {
      while (numbers.includes(number)) {
        number = createAndGetNumber();
      }
      return number;
    };

    /**
     * 무작위 숫자를 생성하는 함수
     * 
     * @return 새로 생성된 숫자
     */
    const createAndGetNumber = () => {
      return Math.floor(Math.random() * 45) + 1;
    };

    /**
     * 버튼 클릭 이벤트 핸들러 함수
     * 
     * @param name - button 이름
     */
    const pushButton = (name) => {
      if (name === 'call') {
        const number = createAndGetNumber();
        callNumber(number);
      }
      
      if (name === 'reset') {
        resetGame();
      }
    };

    /**
     * 번호를 호출하는 함수
     * 
     * @param number - 호출된 숫자
     */
    const callNumber = (number) => {
      // 호출된 숫자를 caller의 숫자 목록에 추가
      calledNumber.value = findUniqueNumber(callerNumbers.value, number);
      callerNumbers.value.push(calledNumber.value);

      // players의 숫자 목록 확인
      let allNumbersExist = false;
      for (let index = 0; index < players.value.length; index++) {
        const playerNumbers = players.value[index];

        // caller가 가지고 있는 모든 숫자들과 player의 숫자 목록을 비교하여 호출된 숫자가 있는 경우만 처리
        if (playerNumbers.includes(calledNumber.value)) {
          allNumbersExist = playerNumbers.every(playerNumber => callerNumbers.value.includes(playerNumber));
        }

        // winner 설정
        if (allNumbersExist) {
          winner.value = index;
          buttonName.value = 'reset';
          alert(`Game Over! winner is P${winner.value + 1}`);
          return;
        }
      }
    };

    onMounted(() => {
      // 게임 초기화
      resetGame();
    });

    return {
      calledNumber,
      callerNumbers,
      players,
      winner,
      buttonName,
      pushButton
    };
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
