<template>
  <div
    class="choose-wrap"
    @click="selectFun"
    v-document-click="documentClick"
  >
    <div :class="['choose', disabled ? 'disabled' : '']">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active': showWrapperActive }">
        <h2>{{title}}</h2>
        <div :class="['wrapper', className]">
          <div class="col" v-for="(item,index) in newList" :key="index">
            <span
              :class="{'mt-item': true , 'active': i == value}"
              v-for="i in item"
              @click="selectItem(i, $event)"
              :key="i.name">{{ i.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["className", "list", "showWrapperActive", "value", "disabled",'title'],
  methods: {
    selectFun(e) {
      // 阻止事件冒泡，给document设置了点击事件，所以给给这个点击的时候会冒泡到document上
      e.stopPropagation();
      this.$emit("clickPro", true);
    },
    selectItem(item, event) {
      if (event) {
        event.stopPropagation();
      }
      this.$emit("selectPro", item);
    },
    documentClick() {
      this.$emit("clickPro", false);
    },
  },
  computed: {
    newList() {
      const col = Math.ceil(this.list.length / 12)
      const newList = []
      for (var i = 0; i < col; i++) {
        const data = this.list.slice(i * 12, i * 12 + 12)
        newList.push(data)
      }
      return newList;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
