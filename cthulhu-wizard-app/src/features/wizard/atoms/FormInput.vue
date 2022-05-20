<script setup lang="ts">
import { QInput } from "quasar";
import type { QInputProps } from "quasar";
import { computed } from "@vue/reactivity";

export interface FormInput {
  modelValue: string | number;
  watermark: string;
  hasTooltip: boolean;
  tooltipText: string;
  fieldType?: QInputProps["type"];
}
const props = withDefaults(defineProps<FormInput>(), {
  modelValue: "",
  watermark: "",
  hasTooltip: false,
  tooltipText: "",
  fieldType: "text",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | number) {
    emit("update:modelValue", value);
  },
});
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
