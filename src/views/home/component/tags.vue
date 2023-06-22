<template>
    <div class="tabs-wrap flex w-full items-center">
        <div
            :class="{ active: isActive(item.fullPath) }"
            :key="item.fullPath"
            class="item flex items-center"
            v-for="(item, index) in silder.tabs"
        >
            <router-link
                :to="item.fullPath"
                class="tags-li-title text-color-6"
                >{{ item.title }}</router-link
            >
            <el-icon @click="closeTagsHanlde(index)">
                <Close class="font-b" />
            </el-icon>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import useSilder from '@store/siderbar';

const route = useRoute();
const silder = useSilder();

silder.addTabs(route);
onBeforeRouteUpdate((to) => {
    silder.addTabs(to);
});
const closeTagsHanlde = (index: number) => {
    silder.removeTabs(index);
};
const isActive = (path: string) => {
    return path === route.fullPath;
};
</script>
<style lang="scss" scoped>
.tabs-wrap {
    height: 30px;
    box-shadow: 0 5px 10px rgba(221, 221, 221, 0.3);
    padding: 0 5px;
    font-size: 12px;
    .item {
        height: 23px;
        padding: 0 5px;
        border: 1px solid #e9eaec;
        cursor: pointer;
        border-radius: 4px;

        .tags-li-title {
            padding-right: 5px;
        }
    }
    .item + .item {
        margin-left: 10px;
    }
    .item.active {
        border: 1px solid #409eff;
        background-color: #409eff;
        color: #fff;
        .tags-li-title {
            color: #fff;
        }
    }
}
</style>
