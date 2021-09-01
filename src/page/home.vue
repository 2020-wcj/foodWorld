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
// import axios from "axios";
export default {
  data() {
    return {
      menu: [1, 2, 3],
      gediao : {
    "all" : [{
        "address" : "崇文门新世界店",
        "image" : "https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
        "price" : 398,
        "subTitle" : "木北造型（崇文门新世界店）",
        "title": "木北造型"
    },{
        "address" : "长风公园地区",
        "image" : "http://p1.meituan.net/iphoenix/fc3f0f3ffb782d27d89f0edb9932b69b3537605.jpg",
        "price" : 378,
        "subTitle" : "长风公园地区",
        "title": "13号线带飘窗舒适温馨房-近儿童医院/近真北路地铁站"
    },
    {
        "address" : "浦东机场",
        "image" : "http://p0.meituan.net/iphoenix/7b4f9a9de543146154f601e7d1301f38415952.jpg",
        "price" : 398,
        "subTitle" : "浦东机场",
        "title": "特惠大床房（浦东机场免费24小时随时接定时送，地铁站随时接定时送）"
    }
],
    "food": [{
        "address" : "周浦康桥地区",
        "image" : "https://img.meituan.net/avatar/b58361b674de41b19419604d5ce1c059246905.jpg",
        "price" : 398,
        "subTitle" : "周浦康桥地区",
        "title": "超大投影、地铁就在家门口、整套一居公寓独享、月租优惠、楼下万达广场配套丰富、提供迪士尼班车、高层夜景"
    }],
    "movie" : [{
        "address" : "彭浦地区",
        "image" : "https://img.meituan.net/avatar/fc6b4d86ea40764a38ea046d80f10501465474.jpg",
        "price" : 398,
        "subTitle" : "彭浦地区",
        "title": "[静安区|彭浦新村|民宿]日式榻榻米小屋|地铁一号线直达人民广场@上海火车站@上海南站@汉中路@衡山路@徐家汇"
    }],
    "spa" : [{
        "address" : "崇文门新世界店",
        "image" : "http://p0.meituan.net/iphoenix/b65d53aa160f8e0d7331e70d7e0336542272618.jpg",
        "price" : 398,
        "subTitle" : "木北造型（崇文门新世界店）",
        "title": "木北造型"
    }],
    "travel" : [{
        "address" : "周浦康桥地区",
        "image" : "http://p0.meituan.net/iphoenix/ea49f523f5c21d756a37648a433b75263447915.jpg",
        "price" : 398,
        "subTitle" : "周浦康桥地区",
        "title": "蜜糖/楼下十米地铁口/免费停车/迪士尼直达/周浦万达广场楼上独立整套公寓/厨具齐有调料做饭免费/投影仪/牌游"
    }],
    "xiuxian" : [{
        "address" : "顺义温泉休闲区",
        "image" : "https://img.meituan.net/phoenix/09f4d60734f8f830567277f379afacb41280003.jpg",
        "price" : 398,
        "subTitle" : "顺义温泉休闲区",
        "title": "空乘之家六环外外地车牌福音精装一居"
    }]
},
      youhui : {
    "all" : [{
        "address" : "周浦康桥地区",
        "image" : "http://p0.meituan.net/iphoenix/ea49f523f5c21d756a37648a433b75263447915.jpg",
        "price" : 398,
        "subTitle" : "周浦康桥地区",
        "title": "蜜糖/楼下十米地铁口/免费停车/迪士尼直达/周浦万达广场楼上独立整套公寓/厨具齐有调料做饭免费/投影仪/牌游"
    },{
        "address" : "彭浦地区",
        "image" : "https://img.meituan.net/phoenix/12dfcccf56e3feeb5237e5a4cf7e49f72805575.jpg",
        "price" : 398,
        "subTitle" : "彭浦地区",
        "title": "[静安区|彭浦新村|民宿]日式榻榻米小屋|地铁一号线直达人民广场@上海火车站@上海南站@汉中路@衡山路@徐家汇"
    },
    {
        "address" : "浦东机场",
        "image" : "http://p0.meituan.net/iphoenix/7b4f9a9de543146154f601e7d1301f38415952.jpg",
        "price" : 398,
        "subTitle" : "浦东机场",
        "title": "特惠大床房（浦东机场免费24小时随时接定时送，地铁站随时接定时送）"
    }
],
    "food": [{
        "address" : "周浦康桥地区",
        "image" : "https://img.meituan.net/avatar/b58361b674de41b19419604d5ce1c059246905.jpg",
        "price" : 398,
        "subTitle" : "周浦康桥地区",
        "title": "超大投影、地铁就在家门口、整套一居公寓独享、月租优惠、楼下万达广场配套丰富、提供迪士尼班车、高层夜景"
    }],
    "movie" : [],
    "spa" : [{
        "address" : "崇文门新世界店",
        "image" : "http://p0.meituan.net/iphoenix/b65d53aa160f8e0d7331e70d7e0336542272618.jpg",
        "price" : 398,
        "subTitle" : "木北造型（崇文门新世界店）",
        "title": "木北造型"
    }],
    "travel" : [{
        "address" : "周浦康桥地区",
        "image" : "http://p0.meituan.net/iphoenix/ea49f523f5c21d756a37648a433b75263447915.jpg",
        "price" : 398,
        "subTitle" : "周浦康桥地区",
        "title": "蜜糖/楼下十米地铁口/免费停车/迪士尼直达/周浦万达广场楼上独立整套公寓/厨具齐有调料做饭免费/投影仪/牌游"
    }],
    "xiuxian" : [{
        "address" : "顺义温泉休闲区",
        "image" : "https://img.meituan.net/phoenix/09f4d60734f8f830567277f379afacb41280003.jpg",
        "price" : 398,
        "subTitle" : "顺义温泉休闲区",
        "title": "空乘之家六环外外地车牌福音精装一居"
    }]
},
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
    // axios.get("/static/container1.json", { params: { location: "true" } }).then(
    //   (res) => {
    //     this.gediao = res.data;
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
    // axios.get("/static/container2.json", { params: { location: "true" } }).then(
    //   (res) => {
    //     this.youhui = res.data;
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  },
};
</script>


<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
