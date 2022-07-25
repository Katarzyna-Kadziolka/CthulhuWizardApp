<script setup lang="ts">
import SkillSearchBar from "../atoms/SkillSearchBar.vue";
import { computed, ref, watch } from "vue";
import type { SkillSpecification } from "../types/SkillSpecification";
import DistributingPointsField from "../molecules/DistributingPointsField.vue";
import { getSkillDefaultValue } from "../../composables/SkillDefaults";
import type { Investigator } from "../types/Investigator";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    allowCustom: boolean;
    skillSpecification: SkillSpecification;
    savedInvestigator: Investigator;
  }>(),
  {
    modelValue: "",
    allowCustom: false,
    skillSpecification: () => ({
      howMany: 1,
      from: ["Any"],
    }),
    savedInvestigator: undefined,
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
  (e: "skillValueChanged", value: number): void;
}>();

const minValue = computed(() => {
  if (props.savedInvestigator && props.savedInvestigator.skills) {
    const investigatorSkillValue = props.savedInvestigator.skills.find(
      (a) => a.name === value.value
    );
    if (investigatorSkillValue) {
      return investigatorSkillValue.currentValue;
    }

    return getSkillDefaultValue(value.value, props.savedInvestigator);
  }
  return 0;
});

const currentValue = ref(minValue.value);
watch(currentValue, (newValue: number) => {
  emit("skillValueChanged", newValue);
});
</script>

<template>
  <SkillSearchBar
    v-if="
      props.skillSpecification.from.length > 1 ||
      props.skillSpecification.from[0] === 'Any'
    "
    v-model="value"
    :allow-custom="props.allowCustom"
  />
  <div v-else>
    <span>{{ props.skillSpecification.from[0] }}</span>
  </div>

  <DistributingPointsField v-model="currentValue" :min-skill-value="minValue" />
</template>
