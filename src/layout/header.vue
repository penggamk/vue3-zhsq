<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4"><img src="../assets/logo.png" class="logo" /></el-col>
      <el-col :span="16"><h1>智慧社区平台</h1></el-col>
      <el-col :span="4"><span class="quit-login">退出登录</span></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
  .logo {
    height: 90px;
  }
  h1, .quit-login  {
    text-align: center;
    height: 90px;
    line-height: 90px;
    color: #fff
  }
</style>