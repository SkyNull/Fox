<template>
    <div>
      <div class="btn">
        <!-- router-link 默认是A标签 -->
          <router-link to="/lesson/net">网贷</router-link>
           <router-link to="/lesson/money">理财</router-link>
            <router-link to="/lesson/rry">日日盈</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.btn {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.3rem;
  line-height: 1.3rem;
  text-align: center;
  // color: #fff;
  background: #3f80e2;
  display: flex;
  z-index: 8;
}
.btn a {
  flex: 1;
  color: #fff;
  font-size: 0.46rem;
  text-decoration: none;
  opacity: 0.6;
}
.btn a.current {
  opacity: 1;
}
</style>