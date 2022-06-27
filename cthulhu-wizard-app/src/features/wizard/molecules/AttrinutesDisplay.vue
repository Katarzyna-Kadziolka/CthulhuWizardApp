<script setup lang="ts">
import AttributeDisplay from "../atoms/AttributeDisplay.vue";
import { useWizard } from "@/features/composables/Wizard";
import type { Investigator } from "../types/Investigator";
import { ref } from "vue";

const props = defineProps<{
  investigator: Investigator;
}>();

const characteristic = ref(props.investigator.Characteristic);
const { getMovementRate } = useWizard();
const movementRate = getMovementRate(
  characteristic.value.Strength,
  characteristic.value.Dexterity,
  characteristic.value.Size,
  props.investigator.Age
);
const example = 10;
</script>

<template>
  <QCard class="attributes-display__background">
    <QCardSection>
      <div class="attributes-display__title">
        <span>Attributes</span>
      </div>
      <AttributeDisplay label="Movement Rate" :value="movementRate" />
      <AttributeDisplay label="Hit Points" :value="example" />
      <AttributeDisplay label="Sanity" :value="example" />
      <AttributeDisplay label="Magic Points" :value="example" />
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss">
.attributes-display {
  &__title {
    font-size: 1.1rem;
    margin-bottom: 1.3rem;
  }
  &__background {
    background-color: $primary;
    opacity: 0.8;
  }
}
</style>
