<script setup lang="ts">
import { ref } from "vue";
import SearchInputBase from "../../../components/atoms/SearchInputBase.vue";
import OccupationsDisplay from "../molecules/OccupationsDisplay.vue";
import { investigatorStore } from "@/stores/investigatorStore";

const showOccupations = ref(false);
const store = investigatorStore();
const occupation = store.investigator.Occupation;
const occupations = store.occupations;
</script>

<template>
  <main class="occupation-choice">
    <div class="occupation-choice__title">
      <span>Choose occupation</span>
    </div>
    <div class="occupation-choice__occupation-display-container">
      <SearchInputBase watermark="Search..." @click="showOccupations = true" />
      <div v-if="showOccupations">
        <OccupationsDisplay v-model="occupation" :occupations="occupations" />
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
    margin-bottom: 1rem;
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
    height: 24rem;
    max-width: 300px;
  }
  &__occupation-display-container {
    min-height: 26rem;
  }
}
</style>
