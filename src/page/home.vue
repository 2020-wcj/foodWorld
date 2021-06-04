<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="iStyle" :list="gediao"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="recomment" :list="youhui"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/home/menu.vue";
import MLife from "@/components/home/life.vue";
import Container from "@/components/home/container.vue";
import axios from "axios";
export default {
  data() {
    return {
      menu: [1, 2, 3],
      gediao : [],
      youhui : [],
      iStyle: {
        class: "istyle",
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all",
          },
          {
            text: "约会聚餐",
            tab: "food",
          },
          {
            text: "丽人SPA",
            tab: "spa",
          },
          {
            text: "电影演出",
            tab: "movie",
          },
          {
            text: "品质出游",
            tab: "travel",
          },
        ],
      },
      recomment: {
        class: "youhui",
        title: "很优惠",
        list: [
          {
            text: "全部",
            tab: "all",
          },
          {
            text: "美食",
            tab: "food",
          },
          {
            text: "休闲",
            tab: "xiuxian",
          },
        ],
      },
    };
  },
  components: {
    MMenu,
    MLife,
    Container,
  },
  created() {
    axios.get("/static/container1.json", { params: { location: "true" } }).then(
      (res) => {
        this.gediao = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
    axios.get("/static/container2.json", { params: { location: "true" } }).then(
      (res) => {
        this.youhui = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>


<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
