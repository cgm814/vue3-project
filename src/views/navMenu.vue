<script setup>
import {ref} from 'vue'
import {
	Document,
	Menu as IconMenu,
	Flag,
	Location,
	Avatar,
	StarFilled,
	OfficeBuilding,
	Bicycle,
	Ship,
	Money,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)

// 动态加载不同组件
let asidelist = ref([
	{id: 1, title: '酒店', icon: OfficeBuilding},
	{id: 2, title: '机票', icon: Location},
	{id: 3, title: '火车票', icon: Avatar},
	{id: 4, title: '旅游', icon: StarFilled},
	{id: 5, title: '景点', icon: Flag},
	{id: 6, title: '汽车票', icon: Bicycle},
	{id: 7, title: '船票', icon: Ship},
	{id: 8, title: '门票', icon: Money},

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
				<el-icon>
					<component :is="v.icon"></component>
				</el-icon>
				<template #title>{{ v.title }}</template>
			</el-menu-item>

		</el-menu>
	</el-aside>
</template>


<style scoped>
@import "@/assets/css/index.css";
</style>