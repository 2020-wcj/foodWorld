<template>
  <div>
    <span class="name">按省份选择：</span>
    <change
      className="province"
      :list="provinceList"
      title="省份"
      :showWrapperActive="showProvince"
      @clickPro="clickPro"
      :value="provinceValue"
      @selectPro="selectPro"
    />
    <change
      className="city"
      :list="city"
      title="城市"
      :showWrapperActive="showCity"
      @clickPro="clickCity"
      :value="cityValue"
      @selectPro="selectCity"
      :disabled="disabled"
    />
    <span>直接搜索</span>
    <el-autocomplete
      v-model="searchWord"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
import api from '@/api/index.js'
import Change from "./change.vue";
export default {
  data() {
    return {
      loading: "",
      searchList: [],
      searchWord: "",
      showCity: false,
      showProvince: false,
      disabled: true,
      city: [],
      provinceValue: "省份",
      cityValue: "城市",
      provinceList: [],
    };
  },
  components: {
    Change,
  },
  created (){
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName
        return item
      })
    })
  },
  methods: {
    querySearchAsync(queryString) {
      // 输入时执行的函数
      // queryString为input输入的值
      // console.log(queryString);
      // 这里直接过滤
    },
    handleSelect() {
      // 选择时执行的函数
    },
    clickPro(boolean) {
      this.showProvince = boolean;
      if (this.showCity) {
        this.showCity = false;
      }
    },
    clickCity(boolean) {
      if(this.disabled){
        return;
      }
      this.showCity = boolean;
      if (this.showProvince) {
        this.showProvince = false;
      }
    },
    selectPro(item) {
      let value = item.name;
      this.disabled = false;
      // 选择之后none
      this.showProvince = false;

      let list = [];
      this.provinceValue = value;
      // 选择省份再渲染城市列表
      this.provinceList.forEach((item) => {
        if (item.provinceName == value) {
          item.cityInfoList.forEach((i) => {
            list.push(i);
          });
          this.city = list;
        }
      });
    },
    selectCity(item) {
      this.cityValue = item.name;
      // 选择城市之后跳转
      this.$store.dispatch('setPosition', item)
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
