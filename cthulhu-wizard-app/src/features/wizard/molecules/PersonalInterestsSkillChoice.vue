<script setup lang="ts">
import { mapSkills } from "@/features/composables/SkillsMapper";
import { computed, reactive, watch } from "vue";
import type { Investigator } from "../types/Investigator";
import type { InvestigatorSkill } from "../types/InvestigatorSkill";
import type { SkillSpecification } from "../types/SkillSpecification";
import SkillChoice from "./SkillChoice.vue";
import { cloneDeep } from "lodash";

const props = withDefaults(
  defineProps<{
    modelValue: InvestigatorSkill[];
    savedInvestigator: Investigator;
    availableSkillPoints: number;
  }>(),
  {
    modelValue: undefined,
    savedInvestigator: undefined,
    availableSkillPoints: 0,
  }
);
const ocuppationSkills = cloneDeep(props.modelValue);

const investigatorSkills = computed({
  get() {
    return props.modelValue;
  },
  set(value: InvestigatorSkill[]) {
    emit("update:modelValue", value);
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: InvestigatorSkill[]): void;
}>();

const anySkillSpecification: SkillSpecification = {
  howMany: 1,
  from: ["Any"],
};
const mappedSkills = computed(() => mapSkills(anySkillSpecification));

const selectedSkills = reactive<Array<InvestigatorSkill>>([]);

const selectedSkillsNames = computed(() => {
  return selectedSkills.map((element) => {
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
  if (skill === undefined) return;

  const foundOldValueIndex = selectedSkills.findIndex(
    (x) => x.name === skill.name
  );
  if (foundOldValueIndex !== -1) {
    selectedSkills.splice(foundOldValueIndex, 1);
  }
};

const addOrUpdateSkill = (skill: InvestigatorSkill) => {
  const foundIndex = selectedSkills.findIndex((x) => x.name === skill.name);
  if (foundIndex !== -1) {
    selectedSkills[foundIndex] = skill;
    return;
  }
  selectedSkills.push(skill);
};

watch(
  selectedSkills,
  (newValue: Array<InvestigatorSkill>) => {
    const newSkills = [...ocuppationSkills];
    for (const skill of newValue) {
      const skillFoundIndex = newSkills.findIndex((x) => x.name === skill.name);
      if (skillFoundIndex === -1) {
        newSkills.push(skill);
        continue;
      }
      newSkills[skillFoundIndex].currentValue = skill.currentValue;
    }
    investigatorSkills.value = newSkills;
    emit("update:modelValue", newSkills);
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
