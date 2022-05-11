<script setup lang="ts">
import { ref } from "vue";

const value = ref(null);
const props = defineProps({
  watermark: {
    type: String,
    default: "",
  },
  hasTooltip: {
    type: Boolean,
    default: false,
  },
  tooltipText: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <QInput v-model="value" filled :label="watermark">
    <QTooltip
      v-if="hasTooltip"
      anchor="center right"
      self="center left"
      :offset="[10, 10]"
    >
      {{ tooltipText }}
    </QTooltip>
  </QInput>
</template>
