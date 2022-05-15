<script setup lang="ts">
import { QInput } from "quasar";
import { ref } from "vue";
import type { IFormInput } from "./IFormInput";

const value = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<IFormInput>(), {
  watermark: "",
  hasTooltip: false,
  tooltipText: "",
  fieldType: "text",
});
</script>

<template>
  <QInput v-model="value" filled :label="watermark" :type="fieldType">
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
