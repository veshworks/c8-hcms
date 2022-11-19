<script setup lang="ts">
import type { Ref } from 'vue';
import { ref } from 'vue';

const content: Ref<{ block: string; props: object; }[]> = ref([]);
</script>

<template>
  <div>
    <BuilderBlock
      v-for="item in content"
      v-bind="item"
    />
    <BuilderBlockCommand
    />
  </div>
</template>

<style lang="scss">
</style>
