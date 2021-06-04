<template>
  <div class="m-istyle">
    <dl :class="nav.class" @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd v-for="item in nav.list" :key="item.tab" :data-type="item.tab" :class="{active: kind == item.tab}" >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in list[kind]" :key="item.title">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title">{{item.title}}</div>
            <div class="sub-title">{{item.subTitle}}</div>
            <div class="price-info" >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
               <span class="sold bottom-right-info"></span>
              <!-- <span class="old-price">门市价¥{{item.price_info.old_price}}</span> -->
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <!-- <div class="price-info" v-else-if="!item.rentNum">
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">抢光了</span>
                </span>
            </div>
            <div class="price-info" v-else>
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                    <span class="units">/{{item.price_info.units}}均</span>
                </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
// import api from '@/api/index.js'
export default {
  data () {
    return {
      kind: 'all',
      resultsData: {}
    }
  },
  created () {

    // api.resultsByKeywords().then((res) => {
    //   this.resultsData = res.data.data;
    //   console.log(res.data.data);
    // })
  },
  props : ['nav',"list"],
  methods : {
    over (e){
      let dom = e.target;
      if(dom.tagName.toLowerCase() != "dd"){
        return;
      }
      this.kind = dom.getAttribute('data-type')
      // 数据请求
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
