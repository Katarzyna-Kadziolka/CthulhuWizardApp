<script setup lang="ts">
const props = defineProps<{
  name: string;
  value: string | undefined;
}>();
</script>

<template>
  <div class="display-statistic-points__column">
    <div>
      <b>{{ props.name }}:</b>
    </div>
    <div>
      {{ props.value }}
    </div>
  </div>
</template>

<style lang="scss">
.display-statistic-points {
  &__column {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
