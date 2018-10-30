<template>
    <div class="second_til">
      <router-link to="/lesson/money/transfer">转让</router-link>
        <router-link to="/lesson/money/hying">慧盈</router-link>
            <router-link to="/lesson/money/hyou">慧优</router-link>
              <router-link to="/lesson/money/hbao">慧保</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.second_til {
  width: 100%;
  height: 1.18rem;
  line-height: 1.18rem;
  text-align: center;
  position: fixed;
  display: flex;
  z-index: 6;
  top: 1.3rem;
  border-bottom: 1px solid #ddd;
  a {
    color: #999;
    font-size: 0.38rem;
    flex: 1;
    text-decoration: none;
  }
  a:nth-child(1).current {
    color: #008af5;
    &::after {
      //伪类
      content: "";
      display: block;
      width: 25%;
      height: 0.05rem;
      position: absolute;
      background: #008af5;
    }
  }
  a:nth-child(2).current {
    color: #008af5;
    &::after {
      //伪类
      content: "";
      display: block;
      width: 25%;
      height: 0.05rem;
      position: absolute;
      background: #008af5;
    }
  }
  a:nth-child(3).current {
    color: #008af5;
    &::after {
      //伪类
      content: "";
      display: block;
      width: 25%;
      height: 0.05rem;
      position: absolute;
      background: #008af5;
    }
  }
  a:nth-child(4).current {
    color: #008af5;
    &::after {
      //伪类
      content: "";
      display: block;
      width: 25%;
      height: 0.05rem;
      position: absolute;
      background: #008af5;
    }
  }
}
</style>
