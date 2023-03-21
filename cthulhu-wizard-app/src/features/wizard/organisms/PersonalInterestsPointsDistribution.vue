<script setup lang="ts">
import { useSkillPoints } from "@/features/composables/SkillPoints";
import { investigatorStore } from "@/stores/investigatorStore";
import { computed, ref, watch } from "vue";
import ProgressBar from "../atoms/ProgressBar.vue";
import { CharacteristicName } from "../types/CharacteristicName";
import type { SkillPointsPattern } from "../types/SkillPointsPattern";
import PersonalInterestsSkillChoice from "../molecules/PersonalInterestsSkillChoice.vue";
import { getSkillDefaultValue } from "@/features/composables/SkillDefaults";

const store = investigatorStore();
const investigator = store.investigator;
const savedInvestigator = store.savedInvestigator;
const savedSkills = savedInvestigator.skills;

const { getOccupationSkillPoints } = useSkillPoints();
const personalInterestPointsPattern: SkillPointsPattern[] = [
  {
    multiplier: 2,
    possibleAttributes: [CharacteristicName.Intelligence],
  },
];
const maxSkillPoints = computed(() =>
  getOccupationSkillPoints(
    personalInterestPointsPattern,
    investigator.characteristic
  )
);

const distributedPoints = computed(() => {
  let distributedPoints = 0;
  investigator.skills.forEach((element) => {
    if (element.name === undefined) return;
    const minValue = getMinValueForSkill(element.name);
    distributedPoints = distributedPoints + element.currentValue - minValue;
  });
  return distributedPoints;
});

const getMinValueForSkill = (skillName: string) => {
  const savedSkill = savedSkills.find((x) => x.name === skillName);
  if (savedSkill) return savedSkill.currentValue;
  return getSkillDefaultValue(skillName, investigator.characteristic);
};

watch(distributedPoints, (newValue) => {
  emit("validationChanged", newValue === maxSkillPoints.value);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (e: "validationChanged", value: boolean): void;
}>();

let numberOfSkillChoices = ref(1);

const onAddSkillClick = () => {
  numberOfSkillChoices.value++;
};
</script>

<template>
  <div>
    <div class="personal-interests-points-distribution__title">
      <span>Personal Interests Skills Points</span>
    </div>
    <div class="personal-interests-points-distribution__progress-bar">
      <ProgressBar
        :distributed-points="distributedPoints"
        :max-value="maxSkillPoints"
      />
    </div>
    <div class="personal-interests-points-distribution__container">
      <div
        v-for="number in numberOfSkillChoices"
        :key="number"
        class="personal-interests-points-distribution__skill-choice"
      >
        <PersonalInterestsSkillChoice
          v-model="investigator.skills"
          :saved-investigator="savedInvestigator"
          :available-skill-points="maxSkillPoints - distributedPoints"
        />
      </div>
      <QBtn
        label="Add skill"
        dense
        :disable="maxSkillPoints === distributedPoints"
        color="secondary"
        class="personal-interests-points-distribution__add-skill"
        @click="onAddSkillClick"
      />
    </div>
    <div class="personal-interests-points-distribution__random-container">
      <QBtn
        label="Random"
        dense
        color="secondary"
        class="personal-interests-points-distribution__random"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.personal-interests-points-distribution {
  &__title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
  }
  &__container {
    min-height: 23rem;
    display: flex;
    align-content: center;
    flex-direction: column;
  }
  &__random-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  &__random {
    min-width: 95%;
  }
  &__progress-bar {
    margin-bottom: 1.5rem;
  }
  &__add-skill {
    min-width: 95%;
    margin-bottom: 1.5rem;
  }
  &__skill-choice {
    margin-bottom: 1rem;
  }
}
</style>
