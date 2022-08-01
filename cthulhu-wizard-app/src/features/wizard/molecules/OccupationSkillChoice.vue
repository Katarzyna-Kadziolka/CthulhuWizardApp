<script setup lang="ts">
import { mapSkills } from "@/features/composables/SkillsMapper";
import { computed, ref, watchEffect } from "vue";
import type { Investigator } from "../types/Investigator";
import type { InvestigatorSkill } from "../types/InvestigatorSkill";
import type { SkillSpecification } from "../types/SkillSpecification";
import SkillChoice from "./SkillChoice.vue";

const props = withDefaults(
  defineProps<{
    // to jest boop
    modelValue: string;
    investigator: Investigator;
    savedInvestigator: Investigator;
    occupationSkillsSpecifications: Array<SkillSpecification>;
  }>(),
  {
    modelValue: "",
    investigator: undefined,
    savedInvestigator: undefined,
    occupationSkillsSpecifications: undefined,
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

const mappedSkillsSPecification = props.occupationSkillsSpecifications.map(
  (element) => mapSkills(element)
);

const selectedSkills = ref<Array<InvestigatorSkill>>([]);
const selectedSkillsNames = computed(() => {
  return selectedSkills.value.map((element) => element.name);
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
          @skill-changed="onSkillChanged"
        />
      </div>
    </div>
  </div>
</template>

// TODO dodac majetnosc do listy skilli zawodowych // slected-skill-changed:
resetuje juz rozdane punkty w danym SkillChoice; update zwartosci dropdownów w
SkillChoisach
