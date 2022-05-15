<script setup lang="ts">
import { QInput } from "quasar";
import { ref } from "vue";
import type { QInputProps } from "quasar";

interface FormInput {
  watermark: string;
  hasTooltip: boolean;
  tooltipText: string;
  fieldType?: QInputProps["type"];
}

const value = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<FormInput>(), {
  watermark: "",
  hasTooltip: false,
  tooltipText: "",
  fieldType: "text",
});

const emit = defineEmits<{
  (e: "valueChanged", id: number): void;
  (e: "update", value: string): void;
}>();
</script>

<template>
  <QInput v-model="value" filled :label="watermark" :type="fieldType" dense>
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
