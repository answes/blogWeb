<template>
  <el-card class="">
    <div class="content">
      <h3>关于Vue.js的使用</h3>
      <div class="time">
        <span>时间：2018-11-21 11：15：59</span><span class="magin-left18">作者：BigShark</span>
      </div>
    </div>
    <div class="content-msg">
      这里是内容
    </div>
    <div class="info">
      <p>如果文章之中有什么错误之处，欢迎大家指出，如果有什么不懂之处欢迎骚扰<span style="color: aquamarine;font-size: 16px"> QQ:202087461</span></p>
    </div>
    <div class="comment">
      <input type="text" width="80%" height="60px" align="center"/>
      <p>这里是评论</p>
    </div>
  </el-card >
</template>

<script>
  import ElCard from "element-ui/packages/card/src/main";

  export default {
    components: {ElCard},
    name: "artile-content"
  }
</script>

<style scoped>
  .content {

  }
  .content h3{
    text-align: center;
  }
  .time{
    font-size: 14px;
    color: #d4d4d4;
  }
  .magin-left18{
    margin-left: 18px;
  }

  .content-msg{
    text-align: center;
    height: 700px;
  }
  .info {
    text-align: center;
    color: #9ea96d;
    font-size: 14px;
  }

  .comment {

  }

</style>
