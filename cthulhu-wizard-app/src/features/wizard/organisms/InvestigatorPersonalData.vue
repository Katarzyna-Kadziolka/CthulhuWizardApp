<script setup lang="ts">
import { ref } from "vue";
import FormInput from "../atoms/FormInput.vue";
import { Gender } from "../types/Gender";
const gender = ref(Gender.Male);
const options = [Gender.Male, Gender.Female, Gender.Other];
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
          watermark="Name"
          :has-tooltip="true"
          tooltip-text="Investigator's first name"
        />
      </div>
      <div class="col-6">
        <FormInput
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
          watermark="Last Name"
          :has-tooltip="true"
          tooltip-text="Investigator's last name"
        />
      </div>
      <div class="col-6">
        <QSelect
          v-model="gender"
          filled
          :options="options"
          label="Gender"
          stack-label
          dense
        />
      </div>
    </div>
    <div class="row justify-between q-col-gutter-md q-mb-md">
      <div class="col-6">
        <FormInput
          watermark="Birth Place"
          :has-tooltip="true"
          tooltip-text="Place where Invetigator has born"
        />
      </div>
      <div class="col-6">
        <FormInput
          watermark="Living Place"
          :has-tooltip="true"
          tooltip-text="Place where Investigator is living"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.padding-between-rows {
  padding-bottom: 50px;
}
</style>
