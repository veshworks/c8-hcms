<script setup lang="ts">
defineProps<{
  value: string;
}>();
</script>

<template>
  <p
    contenteditable="true"
    v-text="value"
  />
</template>

<style lang="scss">
</style>
