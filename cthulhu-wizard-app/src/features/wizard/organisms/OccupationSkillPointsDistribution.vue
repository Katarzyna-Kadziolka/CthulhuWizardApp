<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProgressBar from "../atoms/ProgressBar.vue";
import DistributingPointsField from "../molecules/DistributingPointsField.vue";
import FilterSelectBase from "../../../components/atoms/FilterSelectBase.vue";
import type { SkillSpecification } from "../types/SkillSpecification";
import { investigatorStore } from "@/stores/investigatorStore";

onMounted(async () => {
  const selectedOccupation = await store.getCurrentOccupationDetails();
  skills.value = selectedOccupation.value?.skills;
});

const store = investigatorStore();
const skills = ref<Array<SkillSpecification>>();

const distributedPoints = ref(10);
const maxValue = ref(150);
const currentSkillValue = ref(0);
const options = ["Dodge", "Swim", "Jump"];
const selectedSkill = ref("");
</script>

<template>
  <div>
    <div class="occupation-skill-points-distribution__title">
      <span>Occupation's Skill Points</span>
    </div>
    <div class="occupation-skill-points-distribution__progress-bar">
      <ProgressBar
        :distributed-points="distributedPoints"
        :max-value="maxValue"
      />
    </div>
    <div class="occupation-skill-points-distribution__container">
      <FilterSelectBase v-model="selectedSkill" :options="options">
        <QItem>
          <QItemSection class="text-grey"> No results </QItemSection>
        </QItem>
      </FilterSelectBase>
      <DistributingPointsField v-model="currentSkillValue" />
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
