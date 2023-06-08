<script setup lang="ts">
const props = defineProps<{
  name: string;
  displayValue: number | undefined;
}>();

const getHalfValue = (value: number) => Math.floor(+value / 2);
const getQuarterValue = (value: number) => Math.floor(+value / 4);
</script>

<template>
  <div class="display-statistic-points__column">
    <div>
      <b>{{ props.name }}:</b>
    </div>
    <div>
      {{ props.displayValue }} /
      {{ getHalfValue(props.displayValue as number) }} /
      {{ getQuarterValue(props.displayValue as number) }}
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
