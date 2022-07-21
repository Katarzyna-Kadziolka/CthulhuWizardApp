<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options: Array<string>;
  }>(),
  {
    modelValue: "",
    options: undefined,
  }
);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit("update:modelValue", value);
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>lista skillChoiców</template>
