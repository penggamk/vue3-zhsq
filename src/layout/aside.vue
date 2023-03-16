<template>
  <div>
    <!-- <el-menu
      active-text-color="#5985ef"
      background-color="#ffffff"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#666666"
    >
      <el-sub-menu index="1">
        <template #title>
          <span>收费首页</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="2">
        <span>抄表管理</span>
      </el-menu-item>2
      <el-menu-item index="3" disabled>
        <span>收费管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span>报表统计</span>
      </el-menu-item>
    </el-menu> -->
    <el-menu
      active-text-color="#5985ef"
      background-color="#ffffff"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#666666"
    >
      <div v-for="(item,index) in router_list" :key="index">
        <el-sub-menu v-if="item.children" :index="item.path">
          <template #title>
            <span>{{item.meta.title}}</span>
          </template>
          <el-menu-item index="2" v-for="(item2,index2) in item" :key="index2">
            <template #title>
            <span>{{item2.meta.title}}</span>
          </template>
          </el-menu-item
        >
        </el-sub-menu>
        <el-menu-item v-else :index="item.path">
          <span>{{item.meta.title}}</span> </el-menu-item
        >
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  list: {
    type: Array as () => Array<any>,
    default: () => {
      return [];
    },
  },
});
const router_list = props.list
console.log(router_list);
</script>

<style scoped>
</style>