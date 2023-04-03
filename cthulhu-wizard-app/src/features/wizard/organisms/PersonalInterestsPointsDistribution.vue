<script setup lang="ts">
import { useSkillPoints } from "@/features/composables/SkillPoints";
import { investigatorStore } from "@/stores/investigatorStore";
import { computed, reactive, ref, watch } from "vue";
import ProgressBar from "../atoms/ProgressBar.vue";
import { CharacteristicName } from "../types/CharacteristicName";
import type { SkillPointsPattern } from "../types/SkillPointsPattern";
import PersonalInterestsSkillChoice from "../molecules/PersonalInterestsSkillChoice.vue";
import { getSkillDefaultValue } from "@/features/composables/SkillDefaults";
import type { InvestigatorSkill } from "../types/InvestigatorSkill";

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

const selectedSkills = reactive<Array<InvestigatorSkill>>([]);
watch(selectedSkills, (newValue) => {
  investigator.skills = [
    ...savedSkills.filter((a) => newValue.every((x) => x.name !== a.name)),
    ...newValue,
  ];
});

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

const onSkillAdded = (skill: InvestigatorSkill) => {
  selectedSkills.push(skill);
};

const onSkillRemoved = (skill: InvestigatorSkill) => {
  // const savedSkillFoundIndex = savedSkills.findIndex(
  //   (x) => x.name === skill.name
  // );
  const skillFoundIndex = selectedSkills.findIndex(
    (x) => x.name === skill.name
  );
  selectedSkills.splice(skillFoundIndex, 1);

  // if (savedSkillFoundIndex === -1) {
  //   return;
  // }
  // selectedSkills[skillFoundIndex].currentValue ==
  //   savedSkills[savedSkillFoundIndex].currentValue;
};

const onSkillUpdated = (skill: InvestigatorSkill) => {
  const skillFoundIndex = selectedSkills.findIndex(
    (x) => x.name === skill.name
  );
  if (skillFoundIndex !== -1) {
    selectedSkills[skillFoundIndex].currentValue = skill.currentValue;
    return;
  }

  selectedSkills.push(skill);
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
          :saved-investigator="savedInvestigator"
          :available-skill-points="maxSkillPoints - distributedPoints"
          :selected-skills="selectedSkills"
          @skill-added="onSkillAdded"
          @skill-removed="onSkillRemoved"
          @skill-updated="onSkillUpdated"
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
