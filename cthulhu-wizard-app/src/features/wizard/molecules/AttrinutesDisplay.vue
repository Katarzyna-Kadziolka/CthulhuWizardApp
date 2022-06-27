<script setup lang="ts">
import AttributeDisplay from "../atoms/AttributeDisplay.vue";
import { useWizard } from "@/features/composables/Wizard";
import type { Investigator } from "../types/Investigator";

const props = defineProps<{
  investigator: Investigator;
}>();

const { getMovementRate, getHitPoints, getSanity, getMagicPoints } =
  useWizard();
const movementRate = getMovementRate(
  props.investigator.Characteristic.Strength,
  props.investigator.Characteristic.Dexterity,
  props.investigator.Characteristic.Size,
  props.investigator.Age
);
const hitPoints = getHitPoints(
  props.investigator.Characteristic.Constitution,
  props.investigator.Characteristic.Size
);
const sanity = getSanity(props.investigator.Characteristic.Power);
const magicPoints = getMagicPoints(props.investigator.Characteristic.Power);
</script>

<template>
  <QCard class="attributes-display__background">
    <QCardSection>
      <div class="attributes-display__title">
        <span>Attributes</span>
      </div>
      <AttributeDisplay label="Movement Rate" :value="movementRate" />
      <AttributeDisplay label="Hit Points" :value="hitPoints" />
      <AttributeDisplay label="Sanity" :value="sanity" />
      <AttributeDisplay label="Magic Points" :value="magicPoints" />
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
