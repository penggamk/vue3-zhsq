<template>
  <div class="login_box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      laebl-width="80px"
      class="demo-ruleForm"
    >
      <h2>智慧社区系统</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"  type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="loginBtn"
          type="primary"
          @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
        <el-button class="loginBtn" @click="resetForm(ruleFormRef)"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { LoginData } from "../type/login";
import { defineComponent, reactive, toRefs, ref } from "vue";
import type { FormInstance } from "element-plus";
import { login } from "../request/login";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const data = reactive(new LoginData());
    const rules = {
      username: [
        {
          required: true,
          message: "请输入账号",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "长度为3到10",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "长度为3到10",
          trigger: "blur",
        },
      ],
    };
    const ruleFormRef = ref<FormInstance>();
    const router = useRouter();
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          login(data.ruleForm).then((res) => {
            localStorage.setItem("token", res.data.toekn);
            ElMessage({
              message: "登录成功",
              type: "success",
            });
            router.push("/");
          });
        } else {
          ElMessage({
            message: "校验失败",
            type: "warning",
          });
          return false;
        }
      });
    };
    const resetForm = () => {
      data.ruleForm.username = "";
      data.ruleForm.password = "";
    };
    return { ...toRefs(data), rules, resetForm, ruleFormRef, submitForm };
  },
});
</script>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.login_box {
  width: 100%;
  height: 100%;
  background: url("../assets/bg2.jpg");
  padding: 1px;
  text-align: center;
  .demo-ruleForm {
    width: 500px;
    margin: 200px auto;
    background: #fff;
    padding: 40px;
    border-radius: 20px;
  }
  .loginBtn {
    width: 48%;
  }
  h2 {
    margin-bottom: 10px;
  }
}
</style>