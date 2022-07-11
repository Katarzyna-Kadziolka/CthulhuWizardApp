<script setup lang="ts">
import { QInput } from "quasar";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    watermark: string;
  }>(),
  {
    modelValue: "",
    watermark: "",
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

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
  <QInput
    v-model="value"
    bottom-slots
    filled
    :label="props.watermark"
    type="search"
    dense
  >
    <template #append>
      <QIcon name="search" />
    </template>
  </QInput>
</template>
