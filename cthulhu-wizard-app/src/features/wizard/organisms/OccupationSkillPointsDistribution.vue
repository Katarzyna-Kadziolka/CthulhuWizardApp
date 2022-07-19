<script setup lang="ts">
import { ref } from "vue";
import ProgressBar from "../atoms/ProgressBar.vue";
import DistributingPointsField from "../molecules/DistributingPointsField.vue";

const distributedPoints = ref(10);
const maxValue = ref(150);
const currentSkillValue = ref(0);
</script>

<template>
  <div>
    <div class="occupation-skill-points-distribution__title">
      <span>Occupation's Skill Points</span>
    </div>
    <div>
      <ProgressBar
        :distributed-points="distributedPoints"
        :max-value="maxValue"
      />
    </div>
    <div>
      <DistributingPointsField v-model="currentSkillValue" />
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
}
</style>
