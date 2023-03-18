<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Header from "../layout/header.vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
const router = useRouter();
const router_list = router.getRoutes().filter((v) => v.meta.isShow);
const route = useRoute()
const active_route = route.path
onMounted(() => {
console.log("router", router_list,active_route);
})
</script>
<style lang="scss" scoped>
.el-header {
  height: 90px;
  background: #0079fe;
}
.el-aside {
  .el-menu {
    height: calc(100vh - 80px);
  }
}
</style>
