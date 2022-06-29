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

const { getDamageBonus, getBuild } = useWizard();

watchEffect(() => {
  value.value.Characteristic.DamageBonus = getDamageBonus(
    value.value.Characteristic.Strength,
    value.value.Characteristic.Size
  );
});

watchEffect(() => {
  value.value.Characteristic.Build = getBuild(
    value.value.Characteristic.Strength,
    value.value.Characteristic.Size
  );
});
</script>

<template>
  <QCard class="fight-attributes-display__background">
    <QCardSection>
      <div class="fight-attributes-display__title">
        <span>Fight</span>
      </div>
      <AttributeDisplay
        label="Damage Bonus"
        :value="value.Characteristic.DamageBonus"
      />
      <AttributeDisplay label="Build" :value="value.Characteristic.Build" />
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
