<script setup lang="ts">
import { ref } from 'vue'
const test = ref(true)
test.value = false
</script>
<template>
  <div class="page">
    <h1 class="text-3xl">Hello world</h1>
  </div>
</template>
