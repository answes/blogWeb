<template>
  <el-card class="box-card">
    <ul>
      <artile v-for="item in articles" :key="item" :title="item.title"
              :createTime="item.createTime" :tips="item.tips" :info="item.info" :redes="item.zan"
              :commemts="item.comment"/>
    </ul>
    <el-pagination
      class="page"
      background
      layout="prev, pager, next"
      :total="10">
    </el-pagination>
  </el-card>
</template>

<script>
    import Artile from "./Artile";

    export default {
      components: {Artile},
      name: "main",
      created(){
        this.getData()
      },
      data:function () {
        return{
          articles:[]
        }
      },
      methods:{
        getData(){
          var params = {page:1,parentId:0}
          this.$api.get("/article/getAll",params,r=>{
            this.articles = r.data.list
          })
        }
      }
    }
</script>

<style scoped>
  .page{
    text-align: center;
    margin-top: 12px;
  }

</style>
