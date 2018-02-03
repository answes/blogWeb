<template>
  <el-card class="">
    <div class="content">
      <h3 v-html="title">关于Vue.js的使用</h3>
      <div class="time">
        <span>时间：{{time}}</span><span class="magin-left18">作者：{{author}}</span>
      </div>
    </div>
    <div class="content-msg">
      {{content}}
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

  export default {
    name: "artile-content",
    props:['detail'],
    data:function () {
      return{
        title:'',
        time:'',
        author:'',
        content:'',
        comments:[]
      }
    },
    created(){
      var d = this.detail
      this.title = d.title
      this.time = this.$utils.formatTime(d.createTime)
      this.author = d.author
      this.content = d.content
      //this.comments = d.comment
    },

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
