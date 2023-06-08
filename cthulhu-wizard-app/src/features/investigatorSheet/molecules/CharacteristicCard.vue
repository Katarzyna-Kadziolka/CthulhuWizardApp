<script setup lang="ts">
import type { Characteristic } from "@/features/wizard/types/Characteristic";
import { CharacteristicName } from "@/features/wizard/types/CharacteristicName";
import DisplayStatisticPoints from "../atoms/DisplayStatisticPoints.vue";
import DisplayValue from "../atoms/DisplayValue.vue";

const props = defineProps<{
  characteristic: Characteristic;
}>();
</script>

<template>
  <QCard dark bordered class="bg-grey-9 my-card">
    <QCardSection>
      <div class="text-h6">Characteristic</div>
    </QCardSection>

    <QSeparator dark inset />

    <QCardSection>
      <DisplayStatisticPoints
        :name="CharacteristicName.Strength"
        :display-value="props.characteristic?.strength"
        class="characteristic-card__display"
      />
      <DisplayStatisticPoints
        :name="CharacteristicName.Constitution"
        :display-value="props.characteristic?.constitution"
        class="characteristic-card__display"
      />
      <DisplayStatisticPoints
        :name="CharacteristicName.Size"
        :display-value="props.characteristic?.size"
        class="characteristic-card__display"
      />
      <DisplayStatisticPoints
        :name="CharacteristicName.Dexterity"
        :display-value="props.characteristic?.dexterity"
        class="characteristic-card__display"
      />
      <DisplayStatisticPoints
        :name="CharacteristicName.Appearance"
        :display-value="props.characteristic?.appearance"
        class="characteristic-card__display"
      />
      <DisplayStatisticPoints
        :name="CharacteristicName.Intelligence"
        :display-value="props.characteristic?.intelligence"
        class="characteristic-card__display"
      />
      <DisplayStatisticPoints
        :name="CharacteristicName.Power"
        :display-value="props.characteristic?.power"
        class="characteristic-card__display"
      />
      <DisplayStatisticPoints
        :name="CharacteristicName.Education"
        :display-value="props.characteristic?.education"
        class="characteristic-card__display"
      />
    </QCardSection>

    <QSeparator dark inset />

    <QCardSection>
      <DisplayValue
        name="Move rate"
        :display-value="props.characteristic?.movementRate.toString()"
        class="characteristic-card__display"
      />
      <DisplayValue
        name="Hit Points"
        :display-value="props.characteristic?.hitPoints.toString()"
        class="characteristic-card__display"
      />
      <DisplayValue
        name="Sanity"
        :display-value="props.characteristic?.sanity.toString()"
        class="characteristic-card__display"
      />
      <DisplayValue
        name="Luck"
        :display-value="props.characteristic?.luck.toString()"
        class="characteristic-card__display"
      />
      <DisplayValue
        name="Magic Points"
        :display-value="props.characteristic?.magicPoints.toString()"
        class="characteristic-card__display"
      />
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss">
.characteristic-card {
  &__display {
    margin: 1rem;
  }
}
</style>
