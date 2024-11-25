<script setup>
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'


const isCollapse = ref(true)

let asidelist = ref([
    { id: 1, title: '酒店' },
    { id: 2, title: '机票' },
    { id: 3, title: '火车票' },
    { id: 4, title: '旅游' },
    { id: 5, title: '景点' },
    { id: 6, title: '汽车票' },
    { id: 7, title: '船票' },
    { id: 8, title: '门票' },

])

</script>

<template>
    <el-aside width="200px" class="aside">
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                <el-radio-button :value="false" v-show="isCollapse">|||</el-radio-button>
                <el-radio-button :value="true" v-show="!isCollapse">|||</el-radio-button>
            </el-radio-group>
            <el-menu-item index="v.id" v-for="v in asidelist" :key="v.id">
                <el-icon><icon-menu /></el-icon>
                <template #title>{{ v.title }}</template>
            </el-menu-item>

        </el-menu>
    </el-aside>
</template>


<style scoped></style>