<template>
    <div :class="{ 'width-64': silder.isCollapse }" class="silder-wrap rel">
        <el-scrollbar>
            <el-menu
                :collapse="silder.isCollapse"
                :default-active="onRoutes"
                :default-openeds="[0]"
                active-text-color="#20a0ff"
                background-color="#324157"
                class="el-menu-wrap"
                router
                text-color="#bfcbd9"
            >
                <template
                    :key="item.id"
                    v-for="(item, index) in userInfo.menuList"
                >
                    <!-- 含有子分类的 -->
                    <el-sub-menu
                        :index="index"
                        v-if="!item.path && item.child && item.child.length"
                    >
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item
                            :index="sub.path"
                            :key="sub.id"
                            v-for="sub in item.child"
                            >{{ sub.name }}</el-menu-item
                        >
                    </el-sub-menu>
                    <!-- 不含有子分类 -->
                    <el-menu-item :index="item.path" v-else>
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-scrollbar>

        <div @click="switchCollapseHanlde" class="icon-arrow abs">
            <el-icon class="color-f">
                <component :is="arrowIcon"></component>
            </el-icon>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import useSilder from "@store/siderbar";
import user from "@store/user";

const silder = useSilder();
const userInfo = user();
const arrowIcon = ref("ArrowLeftBold");

// const menuList = ref<type.menu[]>(userInfo.menuList);
const onRoutes = computed(() => {
    return silder.currentRoute.path;
});
onMounted(() => {
    // const route = useRoute();
    // console.log(route.fullPath);
});
const switchCollapseHanlde = () => {
    if (silder.isCollapse) {
        arrowIcon.value = "ArrowRightBold";
    } else {
        arrowIcon.value = "ArrowLeftBold";
    }

    silder.switchCollapce();
};
</script>
<style scoped lang="scss">
.silder-wrap {
    height: calc(100vh - 70px);
    background: #324157;

    transition: width 0.2s linear;
    padding-bottom: 30px;
    width: 200px;

    &.width-64 {
        width: 64px;
    }
}
.el-menu-wrap:not(.el-menu--collapse) {
    width: 200px;
}

.icon-arrow {
    width: 100%;
    height: 30px;
    left: 0;
    bottom: 0;
    line-height: 37px;
    text-align: center;
    cursor: pointer;
    background: #242f42;
}
</style>
