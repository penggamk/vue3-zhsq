<template>
  <div>
    <p_table :columns="columns" :list="list">
      <template v-slot:title>
        <h2>表计列表</h2>
      </template>
      <template v-slot:button>
        <el-button  type="primary" size="small">导入</el-button>
        <el-button  type="primary" size="small">导出</el-button>
        <el-button  type="primary" size="small">报停</el-button>
        <el-button  type="primary" size="small">换表</el-button>
        <el-button  type="primary" size="small">删除</el-button>
        <el-button  type="primary" size="small">批量修改</el-button>
        <el-button  type="primary" size="small">批量添加</el-button>
      </template>
    </p_table>
  </div>
</template>

<script lang="ts">
import p_table from "../../../components/p-table.vue";
import { defineComponent, reactive, toRefs } from "vue";
import { ListInt, initData } from "../../../type/meter_management";
export default defineComponent({
  components: {
    p_table
  },
  setup() {
    const data = reactive(new initData());
    data.list = [
      {
        fjId: "1A-1001",
        bjlb: "水表",
        bh: "S0001",
        lc: 0.0,
        zbds: 0.0,
        bl: 1.0,
        bjzt: 1,
        azdate: "2019-11-01",
        btdatee: "-",
        cby: "-",
        bz: "",
      },
      {
        fjId: "1A-1001",
        bjlb: "电表",
        bh: "D0002",
        lc: 0.0,
        zbds: 0.0,
        bl: 1.0,
        bjzt: 0,
        azdate: "2019-11-01",
        btdatee: "2019-11-01",
        cby: "-",
        bz: "",
      },
      {
        fjId: "1A-1001",
        bjlb: "暖气表",
        bh: "N0003",
        lc: 0.0,
        zbds: 0.0,
        bl: 10.0,
        bjzt: 1,
        azdate: "2019-11-02",
        btdatee: "-",
        cby: "-",
        bz: "",
      },
    ];
    const columns = [
      {
        prop: "fjId",
        label: "房间号",
      },
      {
        prop: "bjlb",
        label: "表计类别",
      },
      {
        prop: "bh",
        label: "表号",
      },
      {
        prop: "zbds",
        label: "装表读数",
      },
      {
        prop: "bl",
        label: "倍率",
      },
      {
        prop: "lc",
        label: "量程",
      },
      {
        prop: "bjzt",
        label: "表计状态",
      },
      {
        prop: "azdate",
        label: "安装日期",
      },
      {
        prop: "btdatee",
        label: "报停日期",
      },
      {
        prop: "cby",
        label: "抄表员",
      },
      {
        prop: "bz",
        label: "备注",
      },
    ];

    return { ...toRefs(data), columns };
  },
});
</script>

<style scoped>
</style>