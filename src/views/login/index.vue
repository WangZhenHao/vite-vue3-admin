<template>
  <div class="login-wrap abs">
    <div class="ms-login">
      <div class="text-center color-6 m-b-10">后台管理系统</div>
      <el-form
        :model="form"
        :rules="rules"
        class="ms-content"
        label-width="0px"
        ref="loginFormRef"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="username"
            v-model="form.username"
          >
            <template #prepend>
              <el-button :icon="User"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            @keyup.enter="submitForm(loginFormRef)"
            placeholder="password"
            type="password"
            v-model="form.password"
          >
            <template #prepend>
              <el-button :icon="Lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button
            :loading="loading"
            @click="submitForm(loginFormRef)"
            class="width-100"
            size="large"
            type="primary"
          >登录</el-button>
        </div>
        <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import * as typeLogin from '@api/login/type';
import { ref, reactive } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue';
import user from '@store/user';
import { useRouter } from 'vue-router';

const userStore = user();
const router = useRouter();

const rules: FormRules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};
const loading = ref(false);

let form = reactive<typeLogin.getMenuListData>({
  username: 'admin',
  password: '123456',
});
const loginFormRef = ref<FormInstance>();

const submitForm = (loginForm: FormInstance | undefined) => {
  if (!loginForm) return;

  loginForm.validate((valid) => {
    if (valid) {
      userStore.login(form).then(() => {
        router.replace({ path: '/system/roleList' });
      });
    }
  });
};
</script>
<style lang="scss" scoped>
.login-wrap {
  width: 320px;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>