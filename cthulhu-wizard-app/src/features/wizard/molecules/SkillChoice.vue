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
    allowCustom?: boolean;
    skillSpecification: SkillSpecification;
    savedInvestigator: Investigator;
    disabledSkills: Array<string>;
    availablePoints: number;
  }>(),
  {
    allowCustom: false,
    skillSpecification: () => ({
      howMany: 1,
      from: ["Any"],
    }),
    savedInvestigator: undefined,
    disabledSkills: undefined,
    availablePoints: 0,
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
    if (selectedSkill.value == undefined) return 0;
    const minDefaultSkillValue = getSkillDefaultValue(
      selectedSkill.value,
      props.savedInvestigator
    );
    if (
      investigatorSkillValue &&
      investigatorSkillValue.currentValue > minDefaultSkillValue
    ) {
      return investigatorSkillValue.currentValue;
    }
    return minDefaultSkillValue;
  }
  return 0;
});

const canAddMorePoints = computed(() => {
  return props.availablePoints > 0;
});

const selectedSkill = ref<string | undefined>(
  props.skillSpecification.from.length > 1
    ? undefined
    : props.skillSpecification.from[0]
);
const currentValue = ref(minValue.value);

watch(currentValue, (newValue: number, oldValue: number | undefined) => {
  if (newValue - (oldValue ?? 0) > props.availablePoints) {
    currentValue.value = (oldValue ?? 0) + props.availablePoints;
    emitSkillChanged(currentValue.value);
  } else if (newValue <= minValue.value) {
    currentValue.value = minValue.value;
    emitSkillChanged(currentValue.value);
  }
});

const emitSkillChanged = (skillValue: number) => {
  emit(
    "skillChanged",
    {
      name: selectedSkill.value,
      currentValue: skillValue,
    },
    undefined
  );
};

const getPreviousSkillValue = (skillName: string | undefined) => {
  if (!skillName) {
    return undefined;
  }
  return {
    name: skillName,
    currentValue: currentValue.value,
  };
};

watch(
  selectedSkill,
  (newValue: string | undefined, oldValue: string | undefined) => {
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
</script>

<template>
  <SkillSearchBar
    v-if="props.skillSpecification.from.length > 1"
    v-model="selectedSkill"
    :allow-custom="props.allowCustom"
    :skills="props.skillSpecification.from"
    :disabled-skills="props.disabledSkills"
  />
  <div v-else class="skill-choice__single-skill">
    <span
      ><b>{{ props.skillSpecification.from[0] }}</b></span
    >
  </div>

  <DistributingPointsField
    v-model="currentValue"
    :min-skill-value="minValue"
    :can-add-more-points="canAddMorePoints"
    class="skill-choice__points-field"
  />
</template>

<style scoped lang="scss">
.skill-choice {
  &__single-skill {
    margin-bottom: 0.7rem;
  }
  &__points-field {
    margin-bottom: 2rem;
  }
}
</style>
