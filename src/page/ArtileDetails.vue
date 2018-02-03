<template>
  <el-container>
    <el-aside width="300px">
      <user-info></user-info>
    </el-aside>
    <el-main class="el-main">
      <artile-content :detail="detail"></artile-content>
    </el-main>
    <el-aside width="280px">
      <advertis></advertis>
    </el-aside>
  </el-container>
</template>

<script>
  import UserInfo from '../components/UserInfo'
  import ArtileContent from "../components/ArtileContent";
  import Advertis from "../components/Advertis";

  export default {
    components: {
      Advertis,
      ArtileContent,
      UserInfo
    },
    name: "artile-details",
    data: function () {
      return {
        detail:{}
      }
    },
    created(){
      let param={id:1}
      this.$api.get('/article/getById',param,r=>{
       this.detail=r.data
      })
    }
  }
</script>

<style scoped>
  .el-main{
    padding: 0px 10px 0 10px;
    margin-left: 18px;
  }
</style>
