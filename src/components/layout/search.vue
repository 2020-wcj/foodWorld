<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团"
        />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家或地点"
            @input="search"
            @focus="focus"
            @blur="blurs"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="!searchWord && isHot">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index + '*'">
              <router-link :to="{ name: 'products', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="searchWord">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{ name: 'products', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <!-- <router-link v-for="(item, index) in suggestList" :key="item + '~' + index" :to="{name: 'goods', params: {name: item}}">{{item}}</router-link> -->
          <router-link :to="{ name: 'products' }">北京故宫博物院</router-link>
          <router-link to="/"> 北京欢乐谷</router-link>
          <router-link to="/"> 尚隐·泉都市生活馆</router-link>
          <router-link to="/">故宫珍宝馆</router-link>
          <router-link to="/">北京连升商务酒店</router-link>
          <router-link to="/">北京连升商务酒店</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      searchWord: "",
      searchList: [],
      isHot: false,
      hotPlaceList: [],
      suggestList: []
    };
  },
  created() {
      api.searchHotWords().then(res => {
          this.hotPlaceList = res.data.data;
          this.hotPlaceList.length = 5;
      })
  },
  methods: {
    search(e) {
      this.searchWord = e;
      api.getSearchList().then((result) => {
        //   过滤
        console.log(result.data.data);
          result = result.data.data.list.filter((item) => {
              return !item.indexOf(this.searchWord);
          })
          this.searchList = result;
        }).catch((err) => {
          console.log(err);
        });
    },
    focus() {
      this.isHot = true;
    },
    blurs() {
      let that = this;
      setTimeout(() => {
        that.isHot = false;
      }, 200);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>