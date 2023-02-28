<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    distributedPoints: number;
    maxValue: number;
  }>(),
  {
    distributedPoints: 10,
    maxValue: 100,
  }
);

const progress = computed(() => props.distributedPoints / props.maxValue);
const barLabel = computed(
  () => props.distributedPoints + " / " + props.maxValue
);
</script>

<template>
  <QLinearProgress
    dark
    stripe
    rounded
    size="20px"
    :value="progress"
    color="secondary"
    class="q-mt-sm"
  >
    <div class="absolute-full flex flex-center">
      <QBadge
        class="progress-bar__badge"
        text-color="white"
        :label="barLabel"
      />
    </div>
  </QLinearProgress>
</template>

<style scoped lang="scss">
.progress-bar {
  &__badge {
    background-color: #535353;
  }
}
</style>
