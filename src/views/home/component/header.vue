<template>
    <div class="header-wrap flex-box justify-s-b items-center">
        <div class="left-wrap">后台管理系统</div>
        <div class="right-wrap">
            <el-dropdown @command="handleCommand">
                <div class="flex-box items-center font-14 color-f">
                    <img class="img-block" src="@img/admin.png" />
                    <span class="p-l-10">管理员</span>
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="loginout"
                            >退出登录</el-dropdown-item
                        >
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import user from '@store/user';

const userInfo = user();
const router = useRouter();

const handleCommand = (command: string) => {
    if (command == 'loginout') {
        userInfo.loginOut();
        router.push('/login');
    }
};
</script>
<style lang="scss" scoped>
.header-wrap {
    height: 70px;
    background-color: #242f42;
    color: #fff;
    font-size: 22px;

    .left-wrap {
        margin-left: 30px;
    }
    .right-wrap {
        margin-right: 50px;
        cursor: pointer;
    }
    .img-block {
        width: 30px;
        height: 30px;
    }
}
</style>
