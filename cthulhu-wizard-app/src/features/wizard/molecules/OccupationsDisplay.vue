<script setup lang="ts">
import { computed } from "vue";
import type { Occupation } from "../types/Occupation";

const props = withDefaults(
  defineProps<{
    modelValue: Occupation;
    watermark: string;
    occupations: Array<Occupation>;
  }>(),
  {
    modelValue: undefined,
    watermark: "",
    occupations: undefined,
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: Occupation): void;
}>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: Occupation) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <QScrollArea class="occupation-display">
    <QList
      v-for="occupation in occupations"
      :key="occupation.Id"
      dark
      bordered
      separator
    >
      <QItem v-ripple clickable>
        <QItemSection>
          <QItemLabel>{{ occupation.Name }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </QScrollArea>
</template>

<style scoped lang="scss">
.occupation-display {
  height: 20rem;
  max-width: 20rem;
}
</style>
