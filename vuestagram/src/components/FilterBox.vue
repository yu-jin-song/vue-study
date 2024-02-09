<template>
  <!-- <div :class="`${filter} filter-item`" :style="`background-image : url(${image})`" @click="$emit('selectedFilter', filter)"  > -->
  <div :class="`${filter} filter-item`" :style="`background-image : url(${image})`" @click="fire" >
    <slot></slot>
    <!-- <span style="color : black">{{ filter }}</span> -->
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    image: String,
    filter: String,
  },
  methods: {
    fire() {
      this.emitter.emit('selectedFilter', this.filter);
    }
  }
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>