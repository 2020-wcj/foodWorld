<template>
  <el-row class="m-header-topbar m-header">
        <el-col :span="10">
            <geo />
        </el-col>
        <el-col :span="14">
            <right-nav />
        </el-col>
    </el-row>
</template>

<script>
import RightNav from './rightNav'
import Geo from './geo'
export default {
    components : {
        RightNav,
        Geo
    }
};
</script>

<style lang="scss">
    @import "@/assets/css/public/header/topbar.scss";
</style>
