<script setup lang="ts">
import type { Characteristic } from "@/features/wizard/types/Characteristic";
import DisplayValue from "../atoms/DisplayValue.vue";
import DisplayStatisticPoints from "../atoms/DisplayStatisticPoints.vue";

const props = defineProps<{
  characteristic: Characteristic;
  dodge: number;
}>();
</script>

<template>
  <QCard dark bordered class="bg-grey-9 my-card">
    <QCardSection>
      <div class="text-h6">Combat</div>
    </QCardSection>

    <QSeparator dark inset />

    <QCardSection>
      <DisplayValue
        name="Damage Bonus"
        :display-value="props.characteristic.damageBonus.toString()"
        class="combat-card__display"
      />
      <DisplayValue
        name="Build"
        :display-value="props.characteristic.build.toString()"
        class="combat-card__display"
      />
      <DisplayStatisticPoints
        name="Dodge"
        :display-value="props.dodge"
        class="combat-card__display"
      />
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss">
.combat-card {
  &__display {
    margin: 1rem;
  }
}
</style>
