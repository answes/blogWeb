<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  import  Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(Element)

export default {
  name: 'App'
}
</script>

<style>
  body{margin: 0;height: 100%;width: 100%;background-color: gainsboro}
  ul{
    list-style:none; /* 去掉ul前面的符号 */
    margin: 0px; /* 与外界元素的距离为0 */
    padding: 0px; /* 与内部元素的距离为0 */
    width: auto; /* 宽度根据元素内容调整 */
  }
  a{
    text-decoration: none;
  }
#app {
}
</style>
