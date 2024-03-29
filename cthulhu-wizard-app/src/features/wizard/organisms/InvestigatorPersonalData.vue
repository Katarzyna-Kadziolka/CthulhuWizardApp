<script setup lang="ts">
import { watch } from "vue";
import FormInputBase from "@/components/atoms/FormInputBase.vue";
import { Gender } from "../types/Gender";
import { useInvestigatorStore } from "@/stores/investigatorStore";
import RadioButtonBase from "../../../components/atoms/RadioButtonBase.vue";
import RandomizableInput from "../molecules/RandomizableInput.vue";
import { useWizard } from "../../composables/Wizard";

const store = useInvestigatorStore();
const investigator = store.investigator;
const { getErrors } = useWizard();

const errors = getErrors(investigator);
const emit = defineEmits<{
  (e: "validationChanged", value: boolean): void;
}>();
watch(
  errors,
  () => {
    emit("validationChanged", errors.value.length === 0);
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <main>
    <div class="investigator-personal-data-form__title">
      <span>Investigator's Personal Data</span>
    </div>
    <div class="investigator-personal-data-form__inputs">
      <div>
        <span>Gender</span>
      </div>
      <div class="investigator-personal-data-form__radio-buttons">
        <RadioButtonBase
          v-model="investigator.gender"
          class="investigator-personal-data-form__radio-button"
          :val="Gender.Male"
        />
        <RadioButtonBase
          v-model="investigator.gender"
          class="investigator-personal-data-form__radio-button"
          :val="Gender.Female"
        />
        <RadioButtonBase
          v-model="investigator.gender"
          class="investigator-personal-data-form__radio-button"
          :val="Gender.Other"
        />
      </div>
    </div>
    <div class="investigator-personal-data-form__inputs">
      <RandomizableInput>
        <FormInputBase
          v-model="investigator.firstName"
          class="investigator-personal-data-form__input"
          watermark="Name"
          :error="errors.find((a) => a.path === 'firstName')"
        />
      </RandomizableInput>
      <RandomizableInput>
        <FormInputBase
          v-model="investigator.lastName"
          class="investigator-personal-data-form__input"
          watermark="Last Name"
      /></RandomizableInput>
      <RandomizableInput
        ><FormInputBase
          v-model.number="investigator.age"
          class="investigator-personal-data-form__input"
          watermark="Age"
          field-type="number"
          :error="errors.find((a) => a.path === 'age')"
        />
      </RandomizableInput>
      <RandomizableInput
        ><FormInputBase
          v-model="investigator.birthPlace"
          class="investigator-personal-data-form__input"
          watermark="Birth Place"
      /></RandomizableInput>
      <RandomizableInput
        ><FormInputBase
          v-model="investigator.residence"
          class="investigator-personal-data-form__input"
          watermark="Residence"
      /></RandomizableInput>
    </div>
    <QBtn
      label="Random"
      dense
      color="secondary"
      class="investigator-personal-data-form__random"
    />
  </main>
</template>

<style scoped lang="scss">
.investigator-personal-data-form {
  &__title {
    font-size: 1.3rem;
    margin-bottom: 1.3rem;
  }
  &__inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8rem;
  }
  &__input {
    margin-bottom: 0.3rem;
    min-width: 15rem;
  }
  &__radio-buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 0.5rem;
    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
  }
  &__radio-button {
    @media screen and (max-width: 992px) {
      margin-bottom: 0.5rem;
    }
  }
  &__random {
    width: 100%;
  }
}
</style>
