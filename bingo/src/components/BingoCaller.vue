<template>
    <table>
        <tr>
            <td>
                <span v-for="number in numbers" :key="number">{{ ' ' + number }}</span>
            </td>
        </tr>
    </table>
</template>

<script>

export default {
    name: 'BingoCaller',
    props: {
        numbers: Array
    }
}
</script>

<style>
td {
    vertical-align: middle;
    padding: 10px;
}
</style>