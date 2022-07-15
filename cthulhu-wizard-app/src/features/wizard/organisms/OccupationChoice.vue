<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from "vue";
import SearchInputBase from "../../../components/atoms/SearchInputBase.vue";
import OccupationsDisplay from "../molecules/OccupationsDisplay.vue";
import { investigatorStore } from "@/stores/investigatorStore";
import type { Occupation } from "../types/Occupation";
import { computed } from "@vue/reactivity";
import OccupationDisplay from "../molecules/OccupationDisplay.vue";
import type { OccupationDetails } from "../types/OccupationDetails";

onMounted(async () => {
  if (store.occupations.length === 0) {
    await store.loadOccupations();
  }
});

const showOccupations = ref(false);
const store = investigatorStore();
const occupation = ref("");
const occupationsNames = computed(() => {
  if (store.occupations) {
    return store.occupations.map((a) => a.name);
  } else {
    return [];
  }
});
const searchValue = ref("");
const selectedOccupationDetails = ref<OccupationDetails>();

watchEffect(() => {
  if (store.occupations) {
    store.investigator.occupation = store.occupations.find(
      (a) => a.name === occupation.value
    ) as Occupation;
  }
});

watchEffect(async () => {
  if (store.investigator.occupation) {
    selectedOccupationDetails.value = await store.getCurrentOccupationDetails();
    showOccupations.value = false;
  }
});
// watch(occupation, async () => {
//   selectedOccupationDetails.value = await store.getCurrentOccupationDetails();
//   showOccupations.value = false;
// });
</script>

<template>
  <main class="occupation-choice">
    <div class="occupation-choice__title">
      <span>Choose occupation</span>
    </div>
    <div class="occupation-choice__occupation-display-container">
      <SearchInputBase
        v-model="searchValue"
        watermark="Search..."
        @click="showOccupations = true"
      />
      <div v-if="showOccupations">
        <OccupationsDisplay
          v-model="occupation"
          :occupations="occupationsNames"
        />
      </div>
      <div v-if="!showOccupations && selectedOccupationDetails">
        <OccupationDisplay :occupation="selectedOccupationDetails" />
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
