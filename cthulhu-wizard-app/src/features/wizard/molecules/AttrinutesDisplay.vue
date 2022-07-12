<script setup lang="ts">
import AttributeDisplay from "../atoms/AttributeDisplay.vue";
import { useWizard } from "@/features/composables/Wizard";
import type { Investigator } from "../types/Investigator";
import { computed, watchEffect } from "vue";

const props = defineProps<{
  modelValue: Investigator;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: Investigator): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: Investigator) {
    emit("update:modelValue", value);
  },
});

const { getMovementRate, getHitPoints, getSanity, getMagicPoints } =
  useWizard();

watchEffect(() => {
  value.value.characteristic.magicPoints = getMagicPoints(
    value.value.characteristic.power
  );
});

watchEffect(() => {
  value.value.characteristic.movementRate = getMovementRate(
    value.value.characteristic.strength,
    value.value.characteristic.dexterity,
    value.value.characteristic.size,
    value.value.age
  );
});

watchEffect(() => {
  value.value.characteristic.hitPoints = getHitPoints(
    value.value.characteristic.constitution,
    value.value.characteristic.size
  );
});
watchEffect(() => {
  value.value.characteristic.sanity = getSanity(
    value.value.characteristic.power
  );
});
</script>

<template>
  <QCard class="attributes-display__background">
    <QCardSection>
      <div class="attributes-display__title">
        <span>Attributes</span>
      </div>
      <AttributeDisplay
        label="Movement Rate"
        :value="value.characteristic.movementRate"
      />
      <AttributeDisplay
        label="Hit Points"
        :value="value.characteristic.hitPoints"
      />
      <AttributeDisplay label="Sanity" :value="value.characteristic.sanity" />
      <AttributeDisplay
        label="Magic Points"
        :value="value.characteristic.magicPoints"
      />
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
