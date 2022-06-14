<script setup lang="ts">
import { computed, watch } from "vue";
import FormInput from "@/components/atoms/FormInputBase.vue";
import { Gender } from "../types/Gender";
import * as yup from "yup";
import { investigatorStore } from "@/stores/investigatorStore";
import RadioButtonBase from "../../../components/atoms/RadioButtonBase.vue";
const store = investigatorStore();
const investigator = store.investigator;

const createInvestigatorSchema = yup.object().shape({
  FirstName: yup.string().required(),
  Age: yup.number().min(15).max(90),
});
const errors = computed(() => {
  try {
    createInvestigatorSchema.validateSync(investigator, {
      abortEarly: false,
    });
    return [];
  } catch (error) {
    const validationError = error as yup.ValidationError;
    return validationError.errors;
  }
});
const emit = defineEmits<{
  (e: "validationChanged", value: boolean): void;
}>();
watch(errors, () => {
  emit("validationChanged", errors.value.length === 0);
});
</script>

<template>
  <main class="investigator-personal-data-form">
    <div class="investigator-personal-data-form__title">
      <span>Investigator's Personal Data</span>
    </div>
    <div class="investigator-personal-data-form__inputs">
      <FormInput
        v-model="investigator.FirstName"
        class="investigator-personal-data-form__input"
        watermark="Name"
        tooltip="Investigator's first name"
      />
      <FormInput
        v-model="investigator.LastName"
        class="investigator-personal-data-form__input"
        watermark="Last Name"
        tooltip="Investigator's last name"
      />
      <FormInput
        v-model.number="investigator.Age"
        class="investigator-personal-data-form__input"
        watermark="Age"
        tooltip="Age range 18-90"
        field-type="number"
      />
      <FormInput
        v-model="investigator.BirthPlace"
        class="investigator-personal-data-form__input"
        watermark="Birth Place"
        tooltip="Place where Invetigator has born"
      />
      <FormInput
        v-model="investigator.LivingPlace"
        class="investigator-personal-data-form__input"
        watermark="Living Place"
        tooltip="Place where Investigator is living"
      />
      <div class="investigator-personal-data-form__inputs">
        <div>
          <span>Gender</span>
        </div>
        <div class="investigator-personal-data-form__radio-buttons">
          <RadioButtonBase
            v-model="investigator.Gender"
            class="investigator-personal-data-form__radio-button"
            :val="Gender.Male"
          />
          <RadioButtonBase
            v-model="investigator.Gender"
            class="investigator-personal-data-form__radio-button"
            :val="Gender.Female"
          />
          <RadioButtonBase
            v-model="investigator.Gender"
            class="investigator-personal-data-form__radio-button"
            :val="Gender.Other"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.investigator-personal-data-form {
  &__title {
    font-size: 1.3rem;
    margin-top: 1.8rem;
    margin-bottom: 1.3rem;
  }
  &__inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8rem;
  }
  &__input {
    margin-bottom: 1rem;
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
}
</style>
