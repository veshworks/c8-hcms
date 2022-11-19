<script setup lang="ts">
defineProps<{
  /** defines what will be rendered on the block */
  block: string,
  /** props passed to the renderer of the block */
  props: object;
}>();
</script>

<template>
  <component
    :is="block"
    v-bind="props"
  />
</template>

<style lang="scss">
</style>
