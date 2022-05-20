<script setup lang="ts">
import { ref, computed } from "vue";
import FormInput from "../atoms/FormInput.vue";
import { Gender } from "../types/Gender";
import * as yup from "yup";
import type { CreateInvestigator } from "../types/CreateInvestigator";
const genderOptions = [Gender.Male, Gender.Female, Gender.Other];
const investigator = ref<CreateInvestigator>({
  FirstName: "",
  LastName: "",
  Age: 15,
  Gender: Gender.Male,
  BirthPlace: "",
  LivingPlace: "",
});
let createInvestigatorSchema = yup.object().shape({
  FirstName: yup.string().required(),
  Age: yup.number().min(15).max(90),
});
const errors = computed(() => {
  try {
    createInvestigatorSchema.validateSync(investigator.value, {
      abortEarly: false,
    });
    return [];
  } catch (error) {
    const validationError = error as yup.ValidationError;
    return validationError.errors;
  }
});
</script>

<template>
  <main class="q-ma-lg">
    <div class="row">
      <div class="col-12 justify-start">
        <h5>Investigator's Personal Data</h5>
      </div>
    </div>
    <div class="row justify-between q-col-gutter-md q-mb-md">
      <div class="col-6">
        <FormInput
          v-model="investigator.FirstName"
          watermark="Name"
          :has-tooltip="true"
          tooltip-text="Investigator's first name"
        />
      </div>
      <div class="col-6">
        <FormInput
          v-model="investigator.Age"
          watermark="Age"
          :has-tooltip="true"
          tooltip-text="Age range 18-90"
          field-type="number"
        />
      </div>
    </div>
    <div class="row justify-between q-col-gutter-md q-mb-md">
      <div class="col-6">
        <FormInput
          v-model="investigator.LastName"
          watermark="Last Name"
          :has-tooltip="true"
          tooltip-text="Investigator's last name"
        />
      </div>
      <div class="col-6">
        <QSelect
          v-model="investigator.Gender"
          filled
          :options="genderOptions"
          label="Gender"
          stack-label
          dense
        />
      </div>
    </div>
    <div class="row justify-between q-col-gutter-md q-mb-md">
      <div class="col-6">
        <FormInput
          v-model="investigator.BirthPlace"
          watermark="Birth Place"
          :has-tooltip="true"
          tooltip-text="Place where Invetigator has born"
        />
      </div>
      <div class="col-6">
        <FormInput
          v-model="investigator.LivingPlace"
          watermark="Living Place"
          :has-tooltip="true"
          tooltip-text="Place where Investigator is living"
        />
      </div>
    </div>
    <div v-if="errors">
      <p v-for="error in errors" :key="error" class="error">{{ error }}</p>
    </div>
  </main>
</template>

<style lang="scss">
.padding-between-rows {
  padding-bottom: 50px;
}
.error {
  color: #b80719;
}
</style>
