<template>
  <div>
    <el-card class="box-card">
      <div>
        <img src="../assets/erweima.png" alt="" class="erweima"/>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="artile-box">
        <div class="title">文章分类</div>
        <hr color="#cccccc">
        <ul>
          <li>Vue是个什么鬼</li>
          <li>Vue是个什么鬼</li>
          <li>Vue是个什么鬼</li>
          <li>Vue是个什么鬼</li>
          <li>Vue是个什么鬼</li>
          <li>Vue是个什么鬼</li>
          <li>Vue是个什么鬼</li>
        </ul>
      </div>
    </el-card>

    <el-card class="box-card">
      <div>可能这里还有什么广告</div>
      <div>
        <img src="../assets/erweima.png" alt="" class="erweima"/>
      </div>
    </el-card>
    <el-card class="box-card">
      <div>可能这里还有什么广告</div>
      <div>
        <img src="../assets/erweima.png" alt="" class="erweima"/>
      </div>
    </el-card>
    <el-card class="box-card">
      <div>可能这里还有什么广告</div>
      <div>
        <img src="../assets/erweima.png" alt="" class="erweima"/>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="artile-box">
        <div class="title">友情链接</div>
        <hr color="#cccccc">
        <ul>
          <li>
            <router-link class="link" to="/"> 百度是什么</router-link>
          </li>
          <li>
            <router-link class="link" to="/">百度是什么</router-link>
          </li>
          <li>
            <router-link class="link" to="/">百度是什么</router-link>
          </li>
          <li>
            <router-link class="link" to="/">百度是什么</router-link>
          </li>
          <li>
            <router-link class="link" to="/">百度是什么</router-link>
          </li>
          <li>
            <router-link class="link" to="/">百度是什么</router-link>
          </li>
          <li>
            <router-link class="link" to="/">百度是什么</router-link>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "advertis"
  }
</script>

<style scoped>
  .box-card {
    height: auto;
    margin: 0 10px 10px 0;
  }

  .erweima {
    height: auto;
    width: 95%;
    margin-top: 12px;
  }

  .artile-box {
  }

  .artile-box ul {
    font-size: 16px;
    color: darkgray;
  }

  .artile-box ul li {
    border-bottom: 1px #cccccc solid;
  }

  .link {
    text-decoration: none;
  }
</style>
