<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    item: string;
  }>(),
  {
    item: "",
  }
);
</script>

<template>
  <QItem v-ripple clickable>
    <QItemSection>
      <QItemLabel>{{ props.item }}</QItemLabel>
    </QItemSection>
  </QItem>
</template>
