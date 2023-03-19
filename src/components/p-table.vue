<template>
  <div>
    <div class="table_title">
      <slot name="title"></slot>
    </div>
    <div class="table_btn">
      
      <slot name="button"></slot>
    </div>
    
    <el-table
      ref="table"
      :data="list"
      :width="width"
      :height="height"
      :maxHeight="maxHeight"
      :row-class-name="tableRowClassName || defaultClassName"
      :cell-style="cellStyle"
      :show-header="showHeader"
      :fit="fit"
      :size="size"
      v-loading="loading"
    >
      <template v-for="item in columns">
        <slot v-if="item.slot" :name="item.slot"> </slot>
          <!-- <el-table-column
            :prop="item.prop"
            :label="item.label"
            v-for="item in columns"
            :key="item.prop"
            v-bind="item"
          ></el-table-column> -->
          <el-table-column
           v-else
            :prop="item.prop"
            :label="item.label"
            :key="item.prop"
            v-bind="item"
          >
          </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    columns: {
      type: Array,
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    cellStyle: {
      type: Object,
      default() {
        return {
          borderRight: "1px solid white",
        };
      },
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    fit: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
    },
    tableRowClassName: {
      type: [Function, Boolean],
      default: false,
    },
  },
  setup(props, context) {
    name: "p_table"
    const defaultClassName = (rowIndex:any) => {
      if (rowIndex % 2 == 0) {
        return "stripe-row";
      }
      return "";
    };
    return { ...toRefs(props), defaultClassName };
  },
});
</script>

<style lang="scss" scoped>
.table_title {
  float: left;
}
.table_btn {
  float: right;
}
.el-table .stripe-row {
  background: #efefef;
}
</style>