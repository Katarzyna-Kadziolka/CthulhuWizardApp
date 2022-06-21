<script setup lang="ts">
import { ref } from "vue";
import InvestigatorPersonalData from "./organisms/InvestigatorPersonalData.vue";
import CharacteristicsForm from "./organisms/CharacteristicsForm.vue";
import NavigationButtons from "./organisms/NavigationButtons.vue";

const isValid = ref(false);
const step = ref(1);
const stepper = ref();
</script>

<template>
  <main>
    <div class="row flex-center WizardPage__block">
      <QStepper
        ref="stepper"
        v-model="step"
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
          <InvestigatorPersonalData @validation-changed="isValid = $event" />
        </QStep>
        <QStep
          :name="2"
          title="Characteristics"
          :done="step > 2"
          :header-nav="step > 2"
          icon="fas fa-solid fa-dumbbell"
        >
          <CharacteristicsForm />
        </QStep>
        <template #navigation>
          <QStepperNavigation>
            <NavigationButtons
              :can-go-next="isValid"
              :can-go-back="step > 1"
              @next-button-clicked="stepper.next()"
              @previous-button-clicked="stepper.previous()"
            />
          </QStepperNavigation>
        </template>
      </QStepper>
    </div>
  </main>
</template>

<style scoped lang="scss">
.WizardPage {
  &__block {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
}
</style>
