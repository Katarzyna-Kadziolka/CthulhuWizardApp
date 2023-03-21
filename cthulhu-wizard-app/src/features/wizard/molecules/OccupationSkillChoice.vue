<script setup lang="ts">
import { mapSkills } from "@/features/composables/SkillsMapper";
import { computed, ref, watch } from "vue";
import type { Investigator } from "../types/Investigator";
import type { InvestigatorSkill } from "../types/InvestigatorSkill";
import type { SkillSpecification } from "../types/SkillSpecification";
import SkillChoice from "./SkillChoice.vue";

const props = withDefaults(
  defineProps<{
    modelValue: InvestigatorSkill[];
    savedInvestigator: Investigator;
    occupationSkillsSpecifications: Array<SkillSpecification>;
    availableSkillPoints: number;
  }>(),
  {
    modelValue: undefined,
    savedInvestigator: undefined,
    occupationSkillsSpecifications: undefined,
    availableSkillPoints: 0,
  }
);

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

const mappedSkillsSPecification = computed(() =>
  props.occupationSkillsSpecifications?.map((element) => mapSkills(element))
);

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
  if (skill.name === undefined) return;
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
    if (investigatorSkills.value) {
      investigatorSkills.value = newValue;
    }
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div>
    <div
      v-for="(skillSpecification, index) in mappedSkillsSPecification"
      :key="index"
    >
      <div v-for="(_, step) in skillSpecification.howMany" :key="step">
        <SkillChoice
          :skill-specification="skillSpecification"
          :disabled-skills="selectedSkillsNames"
          :saved-investigator="props.savedInvestigator"
          :available-points="props.availableSkillPoints"
          @skill-changed="onSkillChanged"
        />
      </div>
    </div>
  </div>
</template>
