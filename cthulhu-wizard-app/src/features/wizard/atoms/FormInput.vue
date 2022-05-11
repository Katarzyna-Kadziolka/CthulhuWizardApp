<script setup lang="ts">
import { ref } from "vue";
import IFormInput from "/atoms/IFormInput.ts"

const value = ref(null);
const props = withDefaults(defineProps<IFormInput>(), {
  watermark: {
    default: "",
  },
  hasTooltip: {
    default: false,
  },
  tooltipText: {
    default: "",
  },
  fieldType: {
    default: 'text',
  }
});
</script>

<template>
  <QInput v-model="value" filled :label="watermark" :type="'text'">
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
