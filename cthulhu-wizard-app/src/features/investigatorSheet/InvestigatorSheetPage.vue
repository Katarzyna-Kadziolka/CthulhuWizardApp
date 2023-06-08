<script setup lang="ts">
import investigatorService from "@/api/investigatorService";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import type { Investigator } from "../wizard/types/Investigator";
import InvestigatorSheet from "./organisms/InvestigatorSheet.vue";

const route = useRoute();
const id = route.params.id.toString();
const service = investigatorService;
const investigator = ref<Investigator>();

onMounted(async () => {
  investigator.value = await service.getDetails(id);
});
</script>

<template>
  <div v-if="investigator === undefined">Loading...</div>
  <InvestigatorSheet
    v-else
    :investigator="investigator"
    class="investigator-sheet-page__container"
  />
</template>

<style scoped lang="scss">
.investigator-sheet-page {
  &__container {
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }
}
</style>
