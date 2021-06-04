<template>
   <div class="page-changeCity">
       <el-row>
           <select-addre />
       </el-row>
       <el-row>
           <hot title="热门城市:" :list="hotList" />
       </el-row>
       <el-row>
           <hot title="最近访问:" :list="rencentList" />
       </el-row>
       <el-row>
           <categorey />
       </el-row>
   </div>
</template>

<script>
import Categorey from '@/components/changeCity/categorey'
import Hot from '@/components/changeCity/hot'
import SelectAddre from '@/components/changeCity/selectAddre'
export default {
    components : {
        SelectAddre,
        Hot,
        Categorey
    },
    data (){
        return {
            hotList : ["北京","上海","广州", "深圳","天津","西安","重庆"],
            rencentList : ["澳门", "西安", "广州", "安宁","北京","安陆市"]
        }
    }
}
</script>