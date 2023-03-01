<script setup lang="ts">
import { computed } from "vue";
import FilterSelectBase from "@/components/atoms/FilterSelectBase.vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    skills: Array<string>;
    allowCustom: boolean;
    disabledSkills: Array<string>;
  }>(),
  {
    modelValue: "",
    skills: undefined,
    allowCustom: false,
    disabledSkills: undefined,
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
  <FilterSelectBase
    v-model="value"
    :options="skills"
    :disabled-options="props.disabledSkills"
    label="Choose skill"
  >
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
