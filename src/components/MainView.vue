<template>
  <el-card class="box-card">
    <ul>
      <artile v-for="item in 10" :key="item"></artile>
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
      name: "main"
    }
</script>

<style scoped>
  .page{
    text-align: center;
    margin-top: 12px;
  }

</style>
