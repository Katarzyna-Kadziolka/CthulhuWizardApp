<script setup lang="ts">
import { computed } from "vue";
import ListBase from "../../../components/molecules/ListBase.vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    occupations: Array<string>;
  }>(),
  {
    modelValue: "",
    occupations: undefined,
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
  <QScrollArea class="occupation-display">
    <ListBase v-model="value" :list="occupations" />
  </QScrollArea>
</template>

<style scoped lang="scss">
.occupation-display {
  height: 20rem;
  max-width: 20rem;
}
</style>
