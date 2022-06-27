<script setup lang="ts">
import AttributeDisplay from "../atoms/AttributeDisplay.vue";
import { useWizard } from "@/features/composables/Wizard";
import type { Investigator } from "../types/Investigator";

const props = defineProps<{
  investigator: Investigator;
}>();

const { getDamageBonus, getBuild } = useWizard();
const damageBonus = getDamageBonus(
  props.investigator.Characteristic.Strength,
  props.investigator.Characteristic.Size
);

const build = getBuild(
  props.investigator.Characteristic.Strength,
  props.investigator.Characteristic.Size
);
</script>

<template>
  <QCard class="fight-attributes-display__background">
    <QCardSection>
      <div class="fight-attributes-display__title">
        <span>Fight</span>
      </div>
      <AttributeDisplay label="Damage Bonus" :value="damageBonus" />
      <AttributeDisplay label="Build" :value="build" />
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss">
.fight-attributes-display {
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
