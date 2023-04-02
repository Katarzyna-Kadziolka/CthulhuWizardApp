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
      props.savedInvestigator.characteristic
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

const selectedSkill = ref<string | undefined>(
  props.skillSpecification.from.length > 1
    ? undefined
    : props.skillSpecification.from[0]
);

const canAddPoints = computed(() => {
  return (
    props.availablePoints > 0 &&
    selectedSkill.value !== undefined &&
    currentValue.value < 99
  );
});

const canSubstractPoints = computed(() => {
  return (
    selectedSkill.value !== undefined && currentValue.value !== minValue.value
  );
});
const isSkillValueLessThanMinValue = (newValue: number, minValue: number) =>
  newValue < minValue;
const isCurrentValueGreaterThanAvailablePoints = (
  newValue: number,
  oldValue: number
) => newValue - oldValue > props.availablePoints;
const _currentValue = ref(minValue.value);
const currentValue = computed({
  // getter
  get() {
    return _currentValue.value;
  },
  // setter
  set(newValue) {
    let calculatedValue = newValue;
    if (
      isCurrentValueGreaterThanAvailablePoints(
        newValue - minValue.value,
        _currentValue.value
      )
    ) {
      calculatedValue = _currentValue.value + props.availablePoints;
    } else if (isSkillValueLessThanMinValue(newValue, minValue.value)) {
      calculatedValue = minValue.value;
    } else if (newValue > 99) {
      calculatedValue = 99;
    }
    _currentValue.value = calculatedValue;
    emitSkillChanged(calculatedValue);
  },
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
    if (newValue === undefined) return;

    const previousValue = getPreviousSkillValue(oldValue);
    currentValue.value = minValue.value;

    const skill = {
      name: newValue,
      currentValue: currentValue.value,
    };

    emit("skillChanged", skill, previousValue);
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
    :can-add-points="canAddPoints"
    :can-substract-points="canSubstractPoints"
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
