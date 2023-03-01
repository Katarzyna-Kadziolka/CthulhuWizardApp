<script setup lang="ts">
import { ref } from "vue";
import InvestigatorPersonalData from "./organisms/InvestigatorPersonalData.vue";
import CharacteristicsForm from "./organisms/CharacteristicsForm.vue";
import NavigationButtons from "./organisms/NavigationButtons.vue";
import OccupationChoice from "./organisms/OccupationChoice.vue";
import OccupationSkillPointsDistribution from "./organisms/OccupationSkillPointsDistribution.vue";
import { investigatorStore } from "@/stores/investigatorStore";
import PersonalInterestsPointsDistributionVue from "./organisms/PersonalInterestsPointsDistribution.vue";

const isValid = ref<Array<boolean>>([true]);
const step = ref(1);
const stepper = ref();
const { saveInvestigator } = investigatorStore();

function nextButtonClicked() {
  stepper.value.next();
  saveInvestigator();
}
</script>

<template>
  <main>
    <div class="wizard-page">
      <QStepper
        ref="stepper"
        v-model="step"
        class="wizard-page__stepper"
        header-nav
        contracted
        alternative-labels
        animated
      >
        <QStep
          :name="1"
          title="Personal data"
          :done="step > 1"
          :header-nav="step > 1"
          icon="settings"
        >
          <InvestigatorPersonalData
            @validation-changed="isValid[step] = $event"
          />
        </QStep>
        <QStep
          :name="2"
          title="Characteristics"
          :done="step > 2"
          :header-nav="step > 2"
          icon="fas fa-solid fa-dumbbell"
        >
          <CharacteristicsForm @validation-changed="isValid[step] = $event" />
        </QStep>
        <QStep
          :name="3"
          title="Occupation"
          :done="step > 3"
          :header-nav="step > 3"
          icon="fas fa-solid fa-user-secret"
        >
          <OccupationChoice @validation-changed="isValid[step] = $event" />
        </QStep>
        <QStep
          :name="4"
          title="Occupation skills"
          :done="step > 4"
          :header-nav="step > 4"
          icon="fas fa-hammer"
        >
          <OccupationSkillPointsDistribution
            @validation-changed="isValid[step] = $event"
          />
        </QStep>
        <QStep
          :name="5"
          title="Personal interests"
          :done="step > 5"
          :header-nav="step > 5"
          icon="fas fa-solid fa-book"
        >
          <PersonalInterestsPointsDistributionVue />
        </QStep>
        <template #navigation>
          <QStepperNavigation>
            <NavigationButtons
              :can-go-next="isValid[step]"
              :can-go-back="step > 1"
              @next-button-clicked="nextButtonClicked"
              @previous-button-clicked="stepper.previous()"
            />
          </QStepperNavigation>
        </template>
      </QStepper>
    </div>
  </main>
</template>

<style scoped lang="scss">
.wizard-page {
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  &__stepper {
    width: 20rem;
  }
}
</style>
