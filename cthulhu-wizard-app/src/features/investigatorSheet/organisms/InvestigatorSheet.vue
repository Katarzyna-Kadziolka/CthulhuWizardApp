<script setup lang="ts">
import DisplayStatisticPoints from "@/features/investigatorSheet/atoms/DisplayStatisticPoints.vue";
import type { Investigator } from "@/features/wizard/types/Investigator";
import DisplayValue from "../atoms/DisplayValue.vue";

const props = defineProps<{
  investigator: Investigator | undefined;
}>();

const getHalfValue = (value: number) => Math.floor(+value / 2);
const getQuarterValue = (value: number) => Math.floor(+value / 4);
</script>

<template>
  <div>
    <QCard dark bordered class="bg-grey-9 my-card investigator-sheet__card">
      <QCardSection>
        <div class="text-h6">
          {{ props.investigator?.firstName }} {{ props.investigator?.lastName }}
        </div>
        <div class="text-subtitle2">
          {{ props.investigator?.occupation?.name }}
        </div>
      </QCardSection>

      <QSeparator dark inset />

      <QCardSection>
        <DisplayValue name="Sex" :value="props.investigator?.gender" />
        <DisplayValue name="Age" :value="props.investigator?.age.toString()" />
        <DisplayValue
          name="Residence"
          :value="props.investigator?.livingPlace"
        />
        <DisplayValue
          name="Birthplace"
          :value="props.investigator?.birthPlace"
        />
      </QCardSection>
    </QCard>
    <QCard dark bordered class="bg-grey-9 my-card investigator-sheet__card">
      <QCardSection>
        <div class="text-h6">Characteristic</div>
      </QCardSection>

      <QSeparator dark inset />

      <QCardSection>
        <DisplayStatisticPoints
          name="Strength"
          :value="props.investigator?.characteristic.strength"
        />
        <DisplayStatisticPoints
          name="Constitution"
          :value="props.investigator?.characteristic.constitution"
        />
        <DisplayStatisticPoints
          name="Size"
          :value="props.investigator?.characteristic.size"
        />
        <DisplayStatisticPoints
          name="Dexterity"
          :value="props.investigator?.characteristic.dexterity"
        />
        <DisplayStatisticPoints
          name="Appearance"
          :value="props.investigator?.characteristic.appearance"
        />
        <DisplayStatisticPoints
          name="Intelligence"
          :value="props.investigator?.characteristic.intelligence"
        />
        <DisplayStatisticPoints
          name="Power"
          :value="props.investigator?.characteristic.power"
        />
        <DisplayStatisticPoints
          name="Education"
          :value="props.investigator?.characteristic.education"
        />
      </QCardSection>

      <QSeparator dark inset />

      <QCardSection>
        <DisplayValue
          name="Move Rate"
          :value="props.investigator?.characteristic.movementRate.toString()"
        />
        <DisplayValue
          name="Hit Points"
          :value="props.investigator?.characteristic.hitPoints.toString()"
        />
        <DisplayValue
          name="Sanity"
          :value="props.investigator?.characteristic.sanity.toString()"
        />
        <DisplayValue
          name="Luck"
          :value="props.investigator?.characteristic.luck.toString()"
        />
        <DisplayValue
          name="Magic points"
          :value="props.investigator?.characteristic.magicPoints.toString()"
        />
      </QCardSection>
    </QCard>
  </div>
</template>

<style scoped lang="scss">
.investigator-sheet {
  &__card {
    margin-bottom: 1rem;
  }
}
</style>
