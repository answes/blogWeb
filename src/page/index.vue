<template>
  <div>
    <!--<el-container class="container">-->
      <!--<el-header height="300px" class="el-header">-->
        <!--&lt;!&ndash; 滑块 滚动时间5秒  总是滚动&ndash;&gt;-->
         <!--<el-carousel :indicator="5000" arrow="always" class="carousel">-->
           <!--<el-carousel-item v-for=" item in imgs" :key="item">-->
             <!--&lt;!&ndash; 这里有个问题 这里的img的地址还不能设置为动态的&ndash;&gt;-->
             <!--<img class="header_img" src="../assets/115.jpg" alt="">-->
           <!--</el-carousel-item>-->
         <!--</el-carousel>-->
      <!--</el-header>-->
      <el-container>
      <el-aside width="300px" >
        <user-info></user-info>
      </el-aside>
      <el-main class="el-main">
       <main-view></main-view>
      </el-main>
        <el-aside width="280px">
          <advertis></advertis>
        </el-aside>
      </el-container>
    <!--</el-container>-->
  </div>

</template>

<script>
  //引入两个模板
  import MainView from '../components/MainView'
  import UserInfo from "../components/UserInfo";
  import Advertis from "../components/Advertis";

    export default {
      //注册两个模板
      components: {
        Advertis,
        MainView,
        UserInfo},
      name: "index",
      data:function () {
        return {
          imgs:["../assets/115.jpg","../assets/643.jpeg","../assets/653.jpeg"]
        }
      }
    }
</script>

<style scoped>
  .carousel{
    width: 100%;
    height: 100%;
  }
  .header_img{
    width: 100%;
    height: 100%;
  }
  .el-main{
    padding: 0px 10px 0 10px;
    margin-left: 18px;
  }


</style>
