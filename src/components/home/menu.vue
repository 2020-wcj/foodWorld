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

      this.detailList = [{
    "items": [{
      "items": ["代金券", "甜品饮品", "火锅", "自助餐", "小吃快餐"],
      "title": "美食"
    }],
    "name": "美食",
    "type": "food"
  }, {
    "items": [{
      "items": ["美团外卖"],
      "title": "外卖"
    }],
    "name": "外卖",
    "type": "takeout"
  }, {
    "items": [{
      "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "酒店星级"
    }],
    "name": "酒店",
    "type": "hotel"
  },
  {
    "items": [{
      "items": ["上海", "成都", "北京", "深圳"],
      "title": "热门城市"
    }],
    "name": "民宿",
    "type": "homestay"
  },
  {
    "items": [{
      "items": ["不知名电影", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "电影"
    }],
    "name": "猫眼电影",
    "type": "movie"
  },
  {
    "items": [{
      "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "酒店星级"
    }],
    "name": "机票/火车票",
    "type": "airport"
  },
  {
    "items": [{
      "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "酒店星级"
    }],
    "name": "休闲娱乐/ktv",
    "type": "ktv"
  },
  {
    "items": [{
      "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "酒店星级"
    }],
    "name": "生活服务",
    "type": "life"
  },
  {
    "items": [{
      "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "酒店星级"
    }],
    "name": "丽人/美发/医学美容",
    "type": "hair"
  },
  {
    "items": [{
      "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "酒店星级"
    }],
    "name": "结婚/婚纱摄影/婚宴",
    "type": "marry"
  },
  {
    "items": [{
      "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "酒店星级"
    }],
    "name": "亲子/儿童乐园/幼教",
    "type": "offspring"
  },
  {
    "items": [{
      "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "酒店星级"
    }],
    "name": "运动健身",
    "type": "furniture"
  },
  {
    "items": [{
      "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "酒店星级"
    }],
    "name": "学习培训/音乐培训",
    "type": "study"
  },
  {
    "items": [{
      "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "酒店星级"
    }],
    "name": "医疗健康/宠物/爱车",
    "type": "health"
  },
  {
    "items": [{
      "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
      "title": "酒店星级"
    }],
    "name": "酒吧/密室逃脱",
    "type": "bar"
  }
]

      // axios.get('/static/menu.json', {params : { "location" : "true" }}).then(res => {
      //   // console.log(res.data);
      //   this.detailList = res.data;
      // }, err => {
      //   console.log(err);
      // });
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