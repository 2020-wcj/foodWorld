<template>
  <div class="m-header">
    <el-row>
      <m-nav></m-nav>
    </el-row>
    <el-row>
      <m-search></m-search>
    </el-row>
  </div>
</template>

<script>
import MNav from "./nav";
import MSearch from "./search";
export default {
  components: {
    MNav,
    MSearch,
  },
};
</script>


<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>
