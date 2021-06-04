<template>
   <div class="m-hcity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for="(item, index) in list" :key="index" @click="selectCity(item)">
                {{item}}
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    props : ['list', 'title'],
    created (){

    },
    methods : {
        selectCity (value){
            this.$router.push({name: 'home'});
            this.$store.dispatch("setPosition", {name : value});
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/changecity/hot.scss";
</style>