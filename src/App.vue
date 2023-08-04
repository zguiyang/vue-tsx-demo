<script setup lang="ts">
import  {  HelloWorld } from  '@/components';
</script>

<template>
  <hello-world msg="hello world" status="success"></hello-world>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
