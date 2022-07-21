<script setup lang="ts">
import SkillSearchBar from "../atoms/SkillSearchBar.vue";
import { computed, ref } from "vue";
import type { OccupationSkillSpecification } from "../types/OccupationSkillSpecification";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    occupationSkillSpecification: OccupationSkillSpecification;
    allowCustom: boolean;
  }>(),
  {
    modelValue: "",
    occupationSkillSpecification: undefined,
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

const selectedSkill = ref("");
</script>

<template>
  <SkillSearchBar v-model="selectedSkill" :allow-custom="props.allowCustom" />
  <span></span>
  <DistributingPointsField v-model="currentSkillValue" />
</template>
