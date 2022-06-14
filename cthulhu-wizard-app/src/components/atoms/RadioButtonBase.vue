<script setup lang="ts">
import { computed } from "@vue/reactivity";
const props = defineProps<{
  modelValue: string | number;
  val: string | number | null | undefined;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | number) {
    emit("update:modelValue", value);
  },
});
const label = computed(() => {
  return props.val?.toString();
});
</script>

<template>
  <QRadio
    v-model="value"
    color="secondary"
    checked-icon="task_alt"
    unchecked-icon="panorama_fish_eye"
    dense
    :val="props.val"
    :label="label"
  />
</template>
