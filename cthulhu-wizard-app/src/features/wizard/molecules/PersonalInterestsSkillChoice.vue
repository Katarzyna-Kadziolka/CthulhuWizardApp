<script setup lang="ts">
import { mapSkills } from "@/features/composables/SkillsMapper";
import { computed, ref, watch } from "vue";
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
  selectedSkills,
  (
    newValue: Array<InvestigatorSkill>,
    oldValue: Array<InvestigatorSkill> | undefined
  ) => {
    if (investigatorSkills.value) {
      // tutaj trzeba dodac tylko selectedSkills tak żeby mie usunąc starych a te co się powtarzają nadpisać
      // jeśli w newValue czegoś nie ma już, a było to powinnismy przywrocić wartość do wartośc z occupation
      const newSkills = [...ocuppationSkills];
      for (const newSkill of newValue) {
        const foundIndex = newSkills.findIndex((x) => x.name === newSkill.name);
        if (foundIndex === -1) {
          newSkills.push(newSkill);
          continue;
        }
        const foundSkill = newSkills[foundIndex];
        foundSkill.currentValue = newSkill.currentValue;
      }

      for (const currentSkill of oldValue as Array<InvestigatorSkill>) {
        const missingSkill = newSkills.find(
          (x) => x.name === currentSkill.name
        );
        if (missingSkill === undefined) {
          const occupationSkill = ocuppationSkills.find(
            (x) => x.name === currentSkill.name
          );
          if (occupationSkill === undefined) throw Error();
          newSkills.push(occupationSkill);
        }
      }

      investigatorSkills.value = newSkills;
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
