<template>
  <div>
    <div class="select-box">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="类别代码">
          <el-input v-model="selectData.lbId" placeholder="请输入类别代码" />
        </el-form-item>
        <el-form-item label="类别名称">
          <el-input v-model="selectData.lbName" placeholder="请输入类别名称" />
        </el-form-item>
        <el-form-item label="收费名称">
          <el-input v-model="selectData.sfName" placeholder="请输入收费名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="lbId" label="类别代码" width="180" />
      <el-table-column prop="lbName" label="类别名称" />
      <el-table-column prop="sfId" label="收费编码" width="180" />
      <el-table-column prop="sfName" label="收费名称" />
      <el-table-column fixed="right" label="操作" width="120">
      <template #default>
        <el-button link type="primary" size="small" 
          >编辑</el-button
        >
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table> -->
    <div>
      <p_table :columns="columns" :list="list" >
      <template v-slot:button>
        <el-button>新增</el-button>
      </template>
      <template v-slot:action>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button link type="primary" size="small" 
          >编辑</el-button
        >
            <el-button link type="primary" size="small">删除</el-button>
          </template>
        </el-table-column>
      </template>
    </p_table>
    <el-pagination
      layout="prev, pager, next"
      @current-change="currentChange"
      @size-change="sizeChange"
      :total="selectData.count * 2"
    />
    </div>
    <!-- <el-pagination
      :current-page="currentPage4"
      :page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    /> -->
  </div>
</template>

<script setup lang="ts">
import  p_table from '../../components/p-table.vue'
import { reactive, toRefs } from "vue";
import { ListInt, initData } from "../../type/meter_Category"
const data = reactive(new initData())
const columns = [
  {
    label: 'id',
    prop: 'id'
  },
  {
    label: '类别代码',
    prop: 'lbId'
  },
  {
    label: '类别',
    prop: 'lbName'
  },
  {
    label: '收费编号',
    prop: 'sfId'
  },
  {
    label: '收费名称',
    prop: 'sfName'
  },
  {
    label: '操作',
    slot: 'action'
  }
]
data.list = [
  {
    id: 1,
    lbId: 1,
    lbName: '水表',
    sfId: 1012,
    sfName: '水费'
  },
  {
    id: 2,
    lbId: 2,
    lbName: '电表',
    sfId: 1013,
    sfName: '电费'
  },
  {
    id: 3,
    lbId: 3,
    lbName: '燃气表',
    sfId: 1013,
    sfName: '燃气费'
  }
]
const onSubmit = () => {

}
const {selectData,list} = toRefs(data)
</script>

<style lang="scss" scoped>
.table_btn {
  float: right;
}
</style>