<template>
    <div class="login_box">
        <header>
            <img src="../../assets/error.png" alt="">
        </header>
        <section>
            <div class="img_box">
                <img src="../../assets/huizh.png" alt="">
            </div>
            <ul class="ul_box">
                <li class="btnline"><input type="text" placeholder="手机号/昵称/邮箱(可用搜狐账号登录)"></li>
                <li class="btnline"><input type="text" placeholder="登录密码"></li>
            </ul>
            <a href="#">登录</a>
        </section>
        <footer></footer>


    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
header {
  width: 100%;
  height: 1.17333333rem;
  img {
    width: 0.8rem;
    height: 0.8rem;
    float: left;
    padding-left: 0.1rem;
  }
}
section {
  .img_box {
    width: 3.7rem;
    height: 4.1rem;
    position: relative;
    left: 0;
    right: 0;
    margin: 0 auto;
    img {
      width: 3.7rem;
      height: 1.28rem;
      margin-top: 0.93333333rem;
    }
  }
  .ul_box {
    list-style: none;
    // width: 100%;
    // height: auto;

    .btnline {
      border-bottom: 1px solid #ddd;
      width: 100%;
      height: 1.47rem;
      line-height: 1.47rem;
      input {
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.37333333rem;
        outline: none;
        border: 0;
        color: #333;
        padding-left: 0.3rem;
        box-sizing: border-box;
      }
    }
  }
  a {
    display: inline-block;
    background: #3f80e2;
    color: #fff;
    width: 100%;
    height: 1.23rem;
    line-height: 1.23rem;
    border-radius: 0.04rem;
    font-size: 0.45rem;
    text-align: center;
    text-decoration: none;
    margin-top: 1.8rem;
  }
}
</style>