<script setup lang="ts">
import { mapSkills } from "@/features/composables/SkillsMapper";
import { computed, ref, watch } from "vue";
import type { Investigator } from "../types/Investigator";
import type { InvestigatorSkill } from "../types/InvestigatorSkill";
import type { SkillSpecification } from "../types/SkillSpecification";
import SkillChoice from "./SkillChoice.vue";

const props = withDefaults(
  defineProps<{
    modelValue: Investigator;
    savedInvestigator: Investigator;
    availableSkillPoints: number;
  }>(),
  {
    modelValue: undefined,
    savedInvestigator: undefined,
    availableSkillPoints: 0,
  }
);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: Investigator) {
    emit("update:modelValue", value);
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: Investigator): void;
}>();

const anySkillSpecification: SkillSpecification = {
  howMany: 1,
  from: ["Any"],
};
const mappedSkills = computed(() => mapSkills(anySkillSpecification));

const selectedSkills = ref<Array<InvestigatorSkill>>([]);
const selectedSkillsNames = computed(() => {
  return selectedSkills.value.map((element) => {
    if (element.name !== undefined) {
      return element.name as string;
    }
  }) as string[];
});

function onSkillChanged(
  newValue: InvestigatorSkill,
  oldValue: InvestigatorSkill | undefined
) {
  removeSkill(oldValue);
  addOrUpdateSkill(newValue);
}

const removeSkill = (skill: InvestigatorSkill | undefined) => {
  if (skill) {
    const foundOldValueIndex = selectedSkills.value.findIndex(
      (x) => x.name === skill.name
    );
    if (foundOldValueIndex !== -1) {
      selectedSkills.value.splice(foundOldValueIndex, 1);
    }
  }
};

const addOrUpdateSkill = (skill: InvestigatorSkill) => {
  const foundIndex = selectedSkills.value.findIndex(
    (x) => x.name === skill.name
  );
  if (foundIndex !== -1) {
    selectedSkills.value[foundIndex] = skill;
    return;
  }
  selectedSkills.value.push(skill);
};

watch(
  selectedSkills.value,
  (newValue: Array<InvestigatorSkill>) => {
    if (value.value) {
      value.value.skills = newValue;
    }
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div>
    <SkillChoice
      :skill-specification="mappedSkills"
      :disabled-skills="selectedSkillsNames"
      :saved-investigator="props.savedInvestigator"
      :available-points="props.availableSkillPoints"
      @skill-changed="onSkillChanged"
    />
  </div>
</template>
