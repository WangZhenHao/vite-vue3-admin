<template>
    <c-header />
    <c-siderbar />
    <div :class="{ 'content-collapse': silder.isCollapse }" class="content-box">
        <c-tags></c-tags>
        <div class="content">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component
                        :is="Component"
                        v-if="$route.meta.KeepAlive !== false"
                        :key="$route.name"
                    />
                </keep-alive>
                <component
                    :is="Component"
                    v-if="$route.meta.KeepAlive === false"
                    :key="$route.name"
                />
            </router-view>
            <!-- <KeepAlive>
                <router-view></router-view>
            </KeepAlive> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import cHeader from './component/header.vue';
import cSiderbar from './component/siderbar.vue';
import cTags from './component/tags.vue';
import useSilder from '@store/siderbar';
const silder = useSilder();
</script>
<style lang="scss" scoped>
.content-box {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 70px;
    left: 200px;
    transition: left 0.2s linear;

    &.content-collapse {
        left: 64px;
    }

    .content {
        height: 100%;
        overflow-y: auto;
    }
}
</style>
