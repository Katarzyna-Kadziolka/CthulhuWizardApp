<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import ProgressBar from "../atoms/ProgressBar.vue";
import type { SkillSpecification } from "../types/SkillSpecification";
import { investigatorStore } from "@/stores/investigatorStore";
import OccupationSkillChoice from "../molecules/OccupationSkillChoice.vue";
import { useSkillPoints } from "../../composables/SkillPoints";
import { getSkillDefaultValue } from "../../composables/SkillDefaults";

const store = investigatorStore();
const selectedOccupation = ref();
const skills = ref<Array<SkillSpecification>>([]);

onMounted(async () => {
  selectedOccupation.value = await store.getCurrentOccupationDetails();
  skills.value = selectedOccupation.value.skills;
});

const investigator = store.investigator;
const savedInvestigator = store.savedInvestigator;

const { getOccupationSkillPoints } = useSkillPoints();
const maxSkillPoints = computed(() =>
  getOccupationSkillPoints(
    selectedOccupation.value?.skillPointsPattern,
    investigator.characteristic
  )
);

const distributedPoints = computed(() => {
  if (investigator.skills) {
    let distributedPoints = 0;
    investigator.skills.forEach((element) => {
      if (element.name === undefined) return;
      const minValue = getSkillDefaultValue(element.name, investigator);
      distributedPoints = distributedPoints + element.currentValue - minValue;
    });
    return distributedPoints;
  }
  return 0;
});

watch(distributedPoints, (newValue) => {
  emit("validationChanged", newValue === maxSkillPoints.value);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (e: "validationChanged", value: boolean): void;
}>();
</script>

<template>
  <div>
    <div class="occupation-skill-points-distribution__title">
      <span>Occupation's Skill Points</span>
    </div>
    <div class="occupation-skill-points-distribution__progress-bar">
      <ProgressBar
        :distributed-points="distributedPoints"
        :max-value="maxSkillPoints"
      />
    </div>
    <div class="occupation-skill-points-distribution__container">
      <OccupationSkillChoice
        v-model="investigator"
        :occupation-skills-specifications="skills"
        :saved-investigator="savedInvestigator"
        :available-skill-points="maxSkillPoints - distributedPoints"
      />
    </div>
    <div class="occupation-skill-points-distribution__random-container">
      <QBtn
        label="Random"
        dense
        color="secondary"
        class="occupation-skill-points-distribution__random"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.occupation-skill-points-distribution {
  &__title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
  }
  &__container {
    min-height: 23rem;
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
}
</style>
