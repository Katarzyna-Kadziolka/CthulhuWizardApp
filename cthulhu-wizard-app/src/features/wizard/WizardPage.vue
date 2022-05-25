<script setup lang="ts">
import { investigatorStore } from "@/stores/investigatorStore";
import { ref } from "vue";
import InvestigatorPersonalData from "./organisms/InvestigatorPersonalData.vue";
import NavigationButtons from "./organisms/NavigationButtons.vue";
import type { Investigator } from "./types/Investigator";

const store = investigatorStore();
const isValid = ref(false);
const investigator = ref<Investigator>({
  Id: store.investigator.Id,
  FirstName: store.investigator.FirstName,
  LastName: store.investigator.LastName,
  Age: store.investigator.Age,
  Gender: store.investigator.Gender,
  BirthPlace: store.investigator.BirthPlace,
  LivingPlace: store.investigator.LivingPlace,
});
</script>

<template>
  <main>
    <div class="row flex-center">
      <div class="col-auto">
        <InvestigatorPersonalData @validation-changed="isValid = $event" />
        <NavigationButtons
          :form-is-valid="isValid"
          @next-button-clicked="store.saveInvestigator(investigator)"
        />
      </div>
    </div>
  </main>
</template>
