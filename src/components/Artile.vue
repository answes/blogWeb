<template>
  <li>
    <router-link to="/content">
    <el-card>
      <div class="title">
        <span>Vue从入门到放弃1-20</span>
        <el-tag type="success" size="small">标签二</el-tag>
        <el-tag type="info" size="small">标签三</el-tag>
        <el-tag type="warning" size="small">标签四</el-tag>
      </div>
      <div class="desc">
        Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
      </div>
      <hr color="cadetblue">
      <div class="time">
        <span>时间：2018-01-28 18：35：14</span> <span class="tips">阅读：128</span><span class="tips">评论：18</span></div>
    </el-card>
    </router-link>
  </li>

</template>

<script>
    export default {
        name: "artile"
    }
</script>

<style scoped>
  li{
    margin-bottom: 30px;
  }

  .title{
    font-size: 20px;
    color: cadetblue;
  }
  .title span:hover{
    transform: scale(1.2);
  }
  .desc{
    margin-top: 10px;

  }
  .time{
    font-size: 14px;
    color: gainsboro;
    margin-top: 8px;
  }
  .tips{
    margin-left: 18px;
  }

</style>
