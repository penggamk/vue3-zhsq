<template>
  <div>
    <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="表计管理" name="first">
      <Meter_managementVue></Meter_managementVue>
    </el-tab-pane>
    <el-tab-pane label="房间表计统计" name="second">房间表计统计</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Meter_managementVue from "./modal/meter_management.vue";

const activeName = ref('first')
const handleClick = () => {
  
}
</script>

<style scoped>

</style>