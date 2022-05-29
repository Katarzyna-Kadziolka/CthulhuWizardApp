<script setup lang="ts">
import { investigatorStore } from "@/stores/investigatorStore";
import { ref } from "vue";
import InvestigatorPersonalData from "./organisms/InvestigatorPersonalData.vue";
import NavigationButtons from "./organisms/NavigationButtons.vue";

const store = investigatorStore();
const isValid = ref(false);
const investigator = store.investigator;
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
