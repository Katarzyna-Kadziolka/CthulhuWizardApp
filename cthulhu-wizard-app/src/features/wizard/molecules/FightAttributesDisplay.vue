<script setup lang="ts">
import AttributeDisplay from "../atoms/AttributeDisplay.vue";
import { useWizard } from "@/features/composables/Wizard";
import { computed, watchEffect } from "vue";
import type { Characteristic } from "../types/Characteristic";
import { DamangeBonusDescrption } from "../types/DamageBonus";
import { BuildDescrption } from "../types/Build";

const props = defineProps<{
  modelValue: Characteristic;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: Characteristic): void;
}>();

const characteristic = computed({
  get() {
    return props.modelValue;
  },
  set(value: Characteristic) {
    emit("update:modelValue", value);
  },
});

const { getDamageBonus, getBuild } = useWizard();

watchEffect(() => {
  characteristic.value.damageBonus = getDamageBonus(
    characteristic.value.strength,
    characteristic.value.size
  );
});

watchEffect(() => {
  characteristic.value.build = getBuild(
    characteristic.value.strength,
    characteristic.value.size
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
        :value="DamangeBonusDescrption[characteristic.damageBonus]"
      />
      <AttributeDisplay
        label="Build"
        :value="BuildDescrption[characteristic.build]"
      />
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
