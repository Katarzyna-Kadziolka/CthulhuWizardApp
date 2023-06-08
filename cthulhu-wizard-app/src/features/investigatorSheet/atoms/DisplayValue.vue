<script setup lang="ts">
import { watch } from "fs";
import { watchEffect } from "vue";

const props = defineProps<{
  name: string;
  displayValue: string | undefined;
}>();

watchEffect(() => console.log(props.name + "-" + props.displayValue));
</script>

<template>
  <div class="display-statistic-points__column">
    <div>
      <b>{{ props.name }}:</b>
    </div>
    <div>
      {{ props.displayValue }}
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
