<template>
  <el-card class="box-card">
    <div align="center">
      <img class="user_img" src="../assets/header.jpg" alt="logo"/>
    </div>
    <div class="user_name">
      Bigshark
    </div>
    <div class="user_info">
      从身无分文到负债累累
    </div>
    <div class="home">
      <img class="home-img" src="../assets/home.png" alt="home">
    </div>
    <div class="search-input">
      <input type="text"/><i class="el-icon-search"></i>
    </div>
    <hr color="cadetblue">
    <div class="directory">
      <router-link class="router" to="/"  v-for="item in directory" :key="item"><h5>{{item.title}}</h5></router-link>
    </div>
    <div class="call-mine">
      <ul>
        <li><a class="router" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=202087461&site=qq&menu=yes">
          <img  src="../assets/QQ.png" alt="QQ" title="QQ"/></a></li>
        <li><router-link class="router" to="/"><img src="../assets/github.png" alt="github" title="github"/></router-link></li>
        <li><router-link class="router" to="/"><img src="../assets/weixin.png" alt="微信" title="微信"/></router-link></li>
        <li><router-link class="router" to="/"><img src="../assets/sina.png" alt="新浪微博" title="新浪微博"/></router-link></li>
        <li><router-link class="router" to="/"><img src="../assets/email.png" alt="邮箱" title="邮箱"/></router-link></li>
      </ul>
    </div>
    <div>
      <img src="../assets/erweima.jpg" alt="" class="erweima"/>
    </div>

  </el-card>
</template>

<script>
  export default {
    name: "user-info",
    data:function () {
      return{
        directory:[]
      }
    },
    created(){
      this.getDirectory()
    },
    methods:{
      getDirectory(){
        this.$api.get('/class/selectList',null,r=>{
          console.log(r.data)
            this.directory = r.data

        })
      }
    },
  }
</script>

<style scoped>
  .box-card{
    height: 1000px;
    position:fixed;
  }
  .user_img {
    width: 80px;
    height: 80px;
    margin-top: 120px;
    border-radius: 50px;
    border: 3px #e3e3e3 solid;
  }
  .user_img:hover{
    transform: scale(1.2);
  }

  .user_name {
    font-size: 20px;
    color: cadetblue;
    text-align: center;
  }

  .user_info {
    text-align: center;
    font-size: 14px;
    padding-top: 4px;
  }
  .home{
    text-align: center;
  }
  .home img{
    width: 35px;
    height: 35px;
    margin-top: 6px;
  }

  .search-input {
    text-align: center;
    padding-top: 6px;
  }

  .directory {
    text-align: center;
    font-size: 16px;
  }
  .directory h5:hover{
    transform: scale(1.1);
  }

  .router{
    text-decoration: none;
    color: rgba(142, 210, 149, 0.8);
  }

  ul li{
    float:left; /* 向左漂移，将竖排变为横排 */
  }

  ul li img{
    width: 35px;
    height: 35px;
    margin-left: 15px;
  }

  ul li img:hover{
    transform: scale(1.2);
  }

  .erweima{
    height: auto;
    width: 280px;
    margin-top: 12px;
  }

</style>
