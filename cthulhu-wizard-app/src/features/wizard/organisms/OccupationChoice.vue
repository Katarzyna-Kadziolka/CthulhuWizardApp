<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from "vue";
import SearchInputBase from "../../../components/atoms/SearchInputBase.vue";
import OccupationsDisplay from "../molecules/OccupationsDisplay.vue";
import { useInvestigatorStore } from "@/stores/investigatorStore";
import { computed } from "@vue/reactivity";
import OccupationDisplay from "../molecules/OccupationDisplay.vue";
import type { OccupationDetails } from "../types/OccupationDetails";

onMounted(async () => {
  if (store.occupations.length === 0) {
    await store.loadOccupations();
  }
});

const showOccupations = ref(false);
const store = useInvestigatorStore();
const occupationName = ref("");
const occupationsNames = computed(() => {
  if (store.occupations) {
    const result = store.occupations.map((a) => a.name).sort();
    if (searchValue.value !== "") {
      return result.filter((a) => a.startsWith(searchValue.value));
    }
    return result;
  } else {
    return [];
  }
});
const searchValue = ref("");
const selectedOccupationDetails = ref<OccupationDetails>();

watchEffect(() => {
  if (store.occupations) {
    const foundOccupation = store.occupations.find(
      (a) => a.name === occupationName.value
    );
    if (foundOccupation) {
      store.investigator.occupation = foundOccupation;
    }
  }
});

watchEffect(async () => {
  if (store.investigator.occupation) {
    selectedOccupationDetails.value = await store.getCurrentOccupationDetails();
    showOccupations.value = false;
  }
});
watch(
  () => store.investigator.occupation,
  (newValue) => {
    emit("validationChanged", newValue !== undefined);
  },
  {
    immediate: true,
  }
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (e: "validationChanged", value: boolean): void;
}>();
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
          v-model="occupationName"
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
    margin-top: 1rem;
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
