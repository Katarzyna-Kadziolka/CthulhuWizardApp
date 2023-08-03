<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string;
    value: number | string;
  }>(),
  {
    label: "",
    value: 0,
  }
);
</script>

<template>
  <div class="attribute-display">
    <div data-testid="label">
      <span
        ><b>{{ props.label }}</b></span
      >
    </div>
    <div data-testid="value">
      <span>{{ props.value }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.attribute-display {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
}
</style>
