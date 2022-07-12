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
    value.value.characteristic.Power
  );
});

watchEffect(() => {
  value.value.characteristic.MovementRate = getMovementRate(
    value.value.characteristic.Strength,
    value.value.characteristic.Dexterity,
    value.value.characteristic.Size,
    value.value.Age
  );
});

watchEffect(() => {
  value.value.characteristic.HitPoints = getHitPoints(
    value.value.characteristic.Constitution,
    value.value.characteristic.Size
  );
});
watchEffect(() => {
  value.value.characteristic.Sanity = getSanity(
    value.value.characteristic.Power
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
        :value="value.characteristic.MovementRate"
      />
      <AttributeDisplay
        label="Hit Points"
        :value="value.characteristic.HitPoints"
      />
      <AttributeDisplay label="Sanity" :value="value.characteristic.Sanity" />
      <AttributeDisplay
        label="Magic Points"
        :value="value.characteristic.MagicPoints"
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
