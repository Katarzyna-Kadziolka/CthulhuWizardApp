<script setup lang="ts">
import SkillSearchBar from "../atoms/SkillSearchBar.vue";
import { computed, ref, watch } from "vue";
import type { SkillSpecification } from "../types/SkillSpecification";
import DistributingPointsField from "../molecules/DistributingPointsField.vue";
import { getSkillDefaultValue } from "../../composables/SkillDefaults";
import type { Investigator } from "../types/Investigator";
import type { InvestigatorSkill } from "../types/InvestigatorSkill";

const props = withDefaults(
  defineProps<{
    allowCustom: boolean;
    skillSpecification: SkillSpecification;
    savedInvestigator: Investigator;
    disabledSkills: Array<string>;
  }>(),
  {
    allowCustom: false,
    skillSpecification: () => ({
      howMany: 1,
      from: ["Any"],
    }),
    savedInvestigator: undefined,
    disabledSkills: undefined,
  }
);

const emit = defineEmits<{
  (
    e: "skillChanged",
    value: InvestigatorSkill,
    oldValue: InvestigatorSkill | undefined
  ): void;
}>();

const minValue = computed(() => {
  if (props.savedInvestigator && props.savedInvestigator.skills) {
    const investigatorSkillValue = props.savedInvestigator.skills.find(
      (a) => a.name === selectedSkill.value
    );
    if (investigatorSkillValue) {
      return investigatorSkillValue.currentValue;
    }

    return getSkillDefaultValue(selectedSkill.value, props.savedInvestigator);
  }
  return 0;
});

const selectedSkill = ref(props.skillSpecification.from[0]);
const currentValue = ref(minValue.value);

watch(
  currentValue,
  (newValue: number) => {
    emit(
      "skillChanged",
      {
        name: selectedSkill.value,
        currentValue: newValue,
      },
      undefined
    );
  },
  {
    immediate: true,
  }
);

watch(
  selectedSkill,
  (newValue: string, oldValue: string | undefined) => {
    var previousValue = getPreviousSkillValue(oldValue);
    currentValue.value = minValue.value;

    const skill = {
      name: newValue,
      currentValue: currentValue.value,
    };

    emit("skillChanged", skill, previousValue);
  },
  {
    immediate: true,
  }
);

const getPreviousSkillValue = (skillName: string | undefined) => {
  if (!skillName) {
    return undefined;
  }
  return {
    name: skillName,
    currentValue: currentValue.value,
  };
};
</script>

<template>
  <SkillSearchBar
    v-if="props.skillSpecification.from.length > 1"
    v-model="selectedSkill"
    :allow-custom="props.allowCustom"
    :skills="props.skillSpecification.from"
    :disabled-skills="props.disabledSkills"
  />
  <div v-else>
    <span>{{ props.skillSpecification.from[0] }}</span>
  </div>

  <DistributingPointsField v-model="currentValue" :min-skill-value="minValue" />
</template>
