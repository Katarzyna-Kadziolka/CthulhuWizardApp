<script setup lang="ts">
import { QInput } from "quasar";
import type { QInputProps } from "quasar";
import { computed } from "@vue/reactivity";

const props = withDefaults(
  defineProps<{
    modelValue: string | number;
    watermark: string;
    tooltip: string | undefined;
    fieldType?: QInputProps["type"];
  }>(),
  {
    modelValue: "",
    watermark: "",
    tooltip: "",
    fieldType: "text",
  }
);

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
      v-if="props.tooltip"
      anchor="center right"
      self="center left"
      :offset="[10, 10]"
    >
      {{ tooltip }}
    </QTooltip>
  </QInput>
</template>
