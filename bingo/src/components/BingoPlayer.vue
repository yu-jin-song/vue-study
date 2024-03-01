<template>
  <div id="player">
    <table>
        <tr>
            <td class="namebox">{{ `P${playerId + 1}` }}</td>
            <td v-for="number in numbers" :key="number" :class="{ 'highlight': isCalled(number) }">{{ number }}</td>
            <td v-if="(playerId + 1) === (winner + 1)"> 승리!</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
    name: 'BingoPlayer',
    props: {
        playerId: Number,
        numbers: Array,
        calledNumber: Number,
        callerNumbers: Array,
        winner: Number
    },
    setup(props) {
        const isCalled = (number) => {
            // Caller의 숫자 목록에 존재하는 숫자인 경우 true를 반환하여 빨갛게 표시
            return props.callerNumbers.includes(number);
        }

        return {
            isCalled
        }
    }
}
</script>

<style>
table {
    border-collapse: collapse;
    margin: auto;
    vertical-align: middle;
}

td {
    vertical-align: middle;
    padding: 10px;
}

.namebox {
    border: 1px solid black;
    padding: 5px;
    display: inline-block;
    vertical-align: middle;
}

.highlight {
    color: red;
    font-weight: bold;
}
</style>