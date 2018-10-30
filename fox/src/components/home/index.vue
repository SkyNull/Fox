<template>
    <div class="nav_box">
        <div class="logo_box">
            <img src="../../assets/fox.png" alt="">
        </div>
        <div class="til_box">
               <router-link to='/login' class="log">登陆</router-link>/注册
        </div>
        <div class="down_box">下载APP</div>
        <div class="banner">
            <mySwiper :ary="arr"></mySwiper>
        </div>
    </div>

</template>

<script>
import mySwiper from "@/common/myswiper.vue";
import axios from "axios";
export default {
  components: {
    mySwiper
  },
  created() {
    this.$store.dispatch("getBannerData");
  },
  computed: {
    arr() {
      return this.$store.state.bannerData;
    }
  }
};
</script>

<style scoped lang='less' type="text/css" rel="stylesheet/less">
.nav_box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.17rem;
  background: rgb(148, 113, 211);
  .logo_box {
    float: left;
    margin-top: 0.38rem;
    padding-left: 0.28rem;
    box-sizing: content-box;
    width: 3.7rem;
    height: 0.5rem;
    // background: red;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .til_box,
  .down_box {
    float: left;
    width: 1.7rem;
    height: 0.4rem;
    // background: red;
    font-size: 0.36rem;
    color: #fff;
    line-height: 0.4rem;
    margin-top: 0.38rem;
  }
  .til_box {
    margin-left: 1.9rem;
    .log {
      font-size: 0.36rem;
      color: #fff;
    }
  }
  .down_box {
    margin-left: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 1px;
  }
  .banner {
    height: 5rem;
    background: lightpink;
    margin-top: 1.17rem;
  }
}
</style>