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
  value.value.Characteristic.MagicPoints = getMagicPoints(
    value.value.Characteristic.Power
  );
});

watchEffect(() => {
  value.value.Characteristic.MovementRate = getMovementRate(
    value.value.Characteristic.Strength,
    value.value.Characteristic.Dexterity,
    value.value.Characteristic.Size,
    value.value.Age
  );
});

watchEffect(() => {
  value.value.Characteristic.HitPoints = getHitPoints(
    value.value.Characteristic.Constitution,
    value.value.Characteristic.Size
  );
});
watchEffect(() => {
  value.value.Characteristic.Sanity = getSanity(
    value.value.Characteristic.Power
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
        :value="value.Characteristic.MovementRate"
      />
      <AttributeDisplay
        label="Hit Points"
        :value="value.Characteristic.HitPoints"
      />
      <AttributeDisplay label="Sanity" :value="value.Characteristic.Sanity" />
      <AttributeDisplay
        label="Magic Points"
        :value="value.Characteristic.MagicPoints"
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
