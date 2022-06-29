<script setup lang="ts"></script>

<template>
  <main class="occupation-choice">
    <div class="occupation-choice__title">
      <span>Occupation</span>
    </div>
    <div class="occupation-choice__occupation-display">
      <div>
        <span>Click the icon to choose a occupation for your investigator</span>
      </div>
    </div>
    <div class="occupation-choice__random-container">
      <QBtn
        label="Random"
        dense
        color="secondary"
        class="occupation-choice__random"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
.occupation-choice {
  margin-left: -0.8rem;
  margin-right: -0.8rem;
  &__title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
  }
  &__random-container {
    display: flex;
    justify-content: center;
  }
  &__random {
    min-width: 90%;
  }
  &__occupation-display {
    min-height: 26rem;
  }
}
</style>
