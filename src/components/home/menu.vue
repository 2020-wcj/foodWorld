<template>
  <div class="m-menu" >
    <dl class="nav" @mouseleave="out">
      <dt>全部分类</dt>
      <dd v-for="item in detailList" :key="item.type" @mouseenter="enter(item)">
        <i :class="item.type"></i>
        <span>{{ item.name }}</span>
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="current" @mouseenter="menuEnter" @mouseleave="out">
      <template v-for="item in current.items">
        <h4 :key="item.title">{{ item.title }}</h4>
        <span v-for="span in item.items" :key="span">{{ span }}</span>
      </template>
    </div>
  </div>
</template>


<script>
// import api from '@/api'
import axios from 'axios';
export default {
  data() {
    return {
      current: false,
      timer : null,
      detailList: [],
    };
  },
  created (){
      axios.get('/static/menu.json', {params : { "location" : "true" }}).then(res => {
        // console.log(res.data);
        this.detailList = res.data;
      }, err => {
        console.log(err);
      });
      // api.getMenuList().then(res => {
      //   this.detailList = res.data.data;
      //   console.log(this.detailList);
      // });

  },
  methods: {
    enter(item) {
      // console.log(item);
      this.current = item;
      clearTimeout(this.timer);
    },
    out() {
      let self = this;
      this.timer = setTimeout(() => {
        self.current = false;
      }, 200);
    },
    menuEnter (){
      clearTimeout(this.timer);
    },
  },
};
</script>