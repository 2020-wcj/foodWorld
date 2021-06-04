<template>
  <el-container class="layout-default">
    <el-header height="">
      <m-header/>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer height="">
      <m-footer />
    </el-footer>
  </el-container>
</template>

<script>
import MHeader from "@/components/layout/header";
import MFooter from "@/components/layout/footer";
export default {
  components: {
    MHeader,
    MFooter,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>
