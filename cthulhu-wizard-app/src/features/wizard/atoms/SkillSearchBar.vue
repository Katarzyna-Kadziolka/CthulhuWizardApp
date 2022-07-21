<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options: Array<string>;
    allowCustom: boolean;
  }>(),
  {
    modelValue: "",
    options: undefined,
    allowCustom: false,
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

<template>
  <FilterSelectBase v-model="value" :options="options">
    <QItem v-if="props.allowCustom">
      <QItemSection class="text-grey">
        <QBtn label="Add skill" />
      </QItemSection>
    </QItem>
    <QItem v-if="!props.allowCustom">
      <QItemSection class="text-grey"> No results </QItemSection>
    </QItem>
  </FilterSelectBase>
</template>
