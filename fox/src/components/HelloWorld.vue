<template>
  <div class="hello">
    <router-view ></router-view>
    <div class="btn_box">
      <router-link to="/home">
      <i class="iconfont icon-home"><span>首页</span></i>
      </router-link>
      <router-link to="/lesson">
       <i class="iconfont icon-listalt"><span>投资理财</span></i>
       </router-link>
      <router-link to="/about">
       <i class="iconfont icon-heart"><span>关于我们</span></i>
       </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.btn_box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  display: flex;
  background: #fff;
  border-top: 1px solid #ccc;
  a {
    flex: 1;
    font-size: 0.4rem;
    text-align: center;
    color: #999;
    padding-top: 0.3rem;
    box-sizing: border-box;
    text-decoration: none;
    i {
      display: block;
      font-size: 0.4rem;
    }
    span {
      display: block;
    }
  }
  a.current {
    color: rgb(89, 0, 255);
  }
}
</style>

</style>
