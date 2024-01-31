<template>
    <div class="discount">
        <!-- <h4>지금 결제하면 30% 할인</h4> -->
        <h4>지금 결제하면 {{ discountRate }}% 할인</h4>
    </div>
</template>

<script>
export default {
    name: 'DiscountBanner',
    props : {
        discountRate : Number
    }
}
</script>

<style>

</style>