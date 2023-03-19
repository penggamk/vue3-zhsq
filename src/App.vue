<template>
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
          :default-active="state.currentPath"
          text-color="#666666"
          router
        >
          <el-menu-item index="/charge_Homepage">
            <span>收费首页</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <span>抄表管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/meter_Category">表计类别</el-menu-item>
              <el-menu-item index="/accounting_Archives">表计档案</el-menu-item>
              <el-menu-item index="/test">抄表管理</el-menu-item>
              <el-menu-item index="1-2">抄表历史</el-menu-item>
              <el-menu-item index="1-1">换表记录</el-menu-item>
              <el-menu-item index="1-2">能耗分析</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>收费管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-2">收费项目</el-menu-item>
              <el-menu-item index="2-2">房间收费</el-menu-item>
              <el-menu-item index="2-1">收费管理</el-menu-item>
              <el-menu-item index="2-2">应收管理</el-menu-item>
              <el-menu-item index="2-1">收费记录</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>报表统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">应收明细查询</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from "../src/layout/header.vue";
// import Aside from "../src/layout/aside.vue"
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
const noMenu = ["/login"];
const state = reactive({
  showMenu: true,
  defaultOpen: ["1", "2", "3", "4"],
  currentPath: "/",
  title: ""
});
const router = useRouter();
const route = useRoute();
router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next();
  } else {
    next(); 
  }
  // state.title = route.meta.value.title
  state.showMenu = !noMenu.includes(to.path);
  state.currentPath = to.path;
  console.log(to.path, state.currentPath);
});
</script>


<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.el-header {
  height: 90px;
  background: #0079fe;
}
.el-aside {
}
</style>
