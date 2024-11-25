<script setup>
import { ref } from 'vue'
import router from './router';
let title = ref('首页')
</script>

<template>
  <router-view />
</template>

<style scoped></style>
