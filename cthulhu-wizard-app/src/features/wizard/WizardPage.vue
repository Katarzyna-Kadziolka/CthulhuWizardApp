<script setup lang="ts">
import { ref } from "vue";
import InvestigatorPersonalData from "./organisms/InvestigatorPersonalData.vue";
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
        contracted
        color="primary"
        animated
      >
        <QStep
          :name="1"
          title="Select campaign settings"
          icon="settings"
          :done="step > 1"
        >
          <InvestigatorPersonalData @validation-changed="isValid = $event" />
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
