<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in ary" :key="index">
          <img :src="item.src" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: ["ary"],
  updated() {
    //初始化swiper
    this.swiperInit();
  },
  methods: {
    //这个方法是用来自定义的初始化swiper方法的
    swiperInit() {
      new Swiper(".swiper-container", {
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      });
    }
  }
};
</script>

<style scoped lang="less" type="text/css" rel="stylesheet/less">
.swiper-container {
  height: 100%;
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>