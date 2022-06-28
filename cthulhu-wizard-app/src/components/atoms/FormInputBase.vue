<script setup lang="ts">
import { QInput } from "quasar";
import type { QInputProps } from "quasar";
import { computed } from "@vue/reactivity";
import type * as yup from "yup";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string | number;
    watermark: string;
    hint?: string | undefined;
    fieldType?: QInputProps["type"];
    error?: yup.ValidationError;
  }>(),
  {
    modelValue: "",
    watermark: "",
    hint: "",
    fieldType: "text",
    error: undefined,
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
const isDirty = ref(false);
</script>

<template>
  <QInput
    v-model="value"
    bottom-slots
    filled
    :label="props.watermark"
    :type="fieldType"
    :error="isDirty && props.error !== undefined"
    :error-message="props.error?.message"
    dense
    @blur="isDirty = true"
  >
    <template #hint> {{ props.hint }} </template>
  </QInput>
</template>
