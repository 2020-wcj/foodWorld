<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in letterList" :key="item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      v-for="(city, index) in cityList"
      :key="index + '~'"  :id="'city-' + index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span @click="selectCity(item)" v-for="item in city" :key="item.id">{{
          item.name
        }}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
import api from '@/api'
export default {
  data() {
    return {
      letterList: "ABCDEFGHJKLMNPQRSTWXYZ".split(""),
      cityList: {},
    };
  },
  created() {
    api.getCityList().then((res) => {
      var obj = {};
      res.data.data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      this.cityList = obj;
    });
  },
  methods: {
    selectCity(item) {
      this.$router.push({ name: "home" });
      this.$store.dispatch("setPosition", item);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>