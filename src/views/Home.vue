<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#5985ef"
            background-color="#ffffff"
            class="el-menu-vertical-demo"
            :default-active="active_route"
            text-color="#666666"
            router
          >
            <div v-for="item in router_list" :key="item.name">
              <el-sub-menu v-if="item.children.length > 0" :index="item.path">
                <template #title>
                  <span>{{ item.meta.title }}</span>
                </template>
                <el-menu-item
                  :index="item2.path"
                  v-for="(item2, index2) in item.children"
                  :key="index2"
                >
                  <template #title>
                    <span>{{ item2.meta.title }}</span>
                  </template>
                </el-menu-item>
                <!-- <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item> -->
              </el-sub-menu>
              <el-menu-item v-else :index="item.path">
                <span>{{ item.meta.title }}</span>
              </el-menu-item>
            </div>
          </el-menu>
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
