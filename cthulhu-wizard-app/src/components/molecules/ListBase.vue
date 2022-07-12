<script setup lang="ts">
import { computed } from "vue";
import ListItemBase from "../atoms/ListItemBase.vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    list: Array<string>;
  }>(),
  {
    modelValue: "",
    list: undefined,
  }
);
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
  <QList v-for="listItem in list" :key="listItem" dark bordered separator>
    <ListItemBase :item="listItem" @click="value = listItem" />
  </QList>
</template>
