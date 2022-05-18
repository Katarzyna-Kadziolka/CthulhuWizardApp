<script setup lang="ts">
import { QInput } from "quasar";
import type { QInputProps } from "quasar";
import { computed } from "@vue/reactivity";

interface FormInput {
  modelValue: string;
  watermark: string;
  hasTooltip: boolean;
  tooltipText: string;
  fieldType?: QInputProps["type"];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<FormInput>(), {
  modelValue: "",
  watermark: "",
  hasTooltip: false,
  tooltipText: "",
  fieldType: "text",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
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
