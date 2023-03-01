<script setup lang="ts"></script>

<template>
  <div>
    <div class="personal-interests-points-distribution__title">
      <span>Personal Interests Skills Points</span>
    </div>
    <div class="personal-interests-points-distribution__progress-bar"></div>
    <div class="personal-interests-points-distribution__container"></div>
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
