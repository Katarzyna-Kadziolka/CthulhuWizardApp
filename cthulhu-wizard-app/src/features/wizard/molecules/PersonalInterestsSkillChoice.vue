<script setup lang="ts">
import { mapSkills } from "@/features/composables/SkillsMapper";
import { computed } from "vue";
import type { Investigator } from "../types/Investigator";
import type { InvestigatorSkill } from "../types/InvestigatorSkill";
import type { SkillSpecification } from "../types/SkillSpecification";
import SkillChoice from "./SkillChoice.vue";

const props = withDefaults(
  defineProps<{
    selectedSkills: InvestigatorSkill[];
    savedInvestigator: Investigator;
    availableSkillPoints: number;
  }>(),
  {
    selectedSkills: undefined,
    savedInvestigator: undefined,
    availableSkillPoints: 0,
  }
);

const emit = defineEmits<{
  (e: "skillRemoved", value: InvestigatorSkill): void;
  (e: "skillAdded", value: InvestigatorSkill): void;
  (e: "skillUpdated", value: InvestigatorSkill): void;
}>();

const anySkillSpecification: SkillSpecification = {
  howMany: 1,
  from: ["Any"],
};
const mappedSkills = computed(() => mapSkills(anySkillSpecification));

const selectedSkillsNames = computed(() => {
  return props.selectedSkills.map((element) => {
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

  const foundOldValueIndex = props.selectedSkills.findIndex(
    (x) => x.name === skill.name
  );

  if (foundOldValueIndex !== -1) {
    emit("skillRemoved", skill);
  }
};

const addOrUpdateSkill = (skill: InvestigatorSkill) => {
  const selectedFoundIndex = props.selectedSkills.findIndex((x) => {
    return x.name === skill.name;
  });

  const savedFoundIndex = props.savedInvestigator.skills.findIndex((x) => {
    return x.name === skill.name;
  });

  if (selectedFoundIndex !== -1 || savedFoundIndex !== -1) {
    emit("skillUpdated", skill);
    return;
  }
  emit("skillAdded", skill);
};
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
