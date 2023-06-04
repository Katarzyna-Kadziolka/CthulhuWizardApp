<script setup lang="ts">
import type { Investigator } from "@/features/wizard/types/Investigator";

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
        Sex: {{ props.investigator?.gender }} <br />
        Age: {{ props.investigator?.age }} <br />
        Residence: {{ props.investigator?.livingPlace }} <br />
        Birthplace: {{ props.investigator?.birthPlace }} <br />
      </QCardSection>
    </QCard>
    <QCard dark bordered class="bg-grey-9 my-card investigator-sheet__card">
      <QCardSection>
        <div class="text-h6">Characteristic</div>
      </QCardSection>

      <QSeparator dark inset />

      <QCardSection class="investigator-sheet__columns">
        <div>
          Strength: <br />
          Constitution: <br />
          Size: <br />
          Dexterity: <br />
          Appearance: <br />
          Intelligence: <br />
          Power: <br />
          Education: <br />
          Move Rate: <br />
          Hit Points: <br />
          Sanity: <br />
          Luck: <br />
          Magic points: <br />
        </div>
        <div>
          {{ props.investigator?.characteristic.strength }} /
          {{
            getHalfValue(props.investigator?.characteristic.strength as number)
          }}
          /
          {{
            getQuarterValue(
              props.investigator?.characteristic.strength as number
            )
          }}
          <br />
          {{ props.investigator?.characteristic.constitution }} /
          {{
            getHalfValue(
              props.investigator?.characteristic.constitution as number
            )
          }}
          /
          {{
            getQuarterValue(
              props.investigator?.characteristic.constitution as number
            )
          }}
          <br />
          {{ props.investigator?.characteristic.size }} <br />
          {{ props.investigator?.characteristic.dexterity }} <br />
          {{ props.investigator?.characteristic.appearance }} <br />
          {{ props.investigator?.characteristic.intelligence }} <br />
          {{ props.investigator?.characteristic.power }} <br />
          {{ props.investigator?.characteristic.education }} <br />
          {{ props.investigator?.characteristic.movementRate }} <br />
          {{ props.investigator?.characteristic.hitPoints }} <br />
          {{ props.investigator?.characteristic.sanity }} <br />
          {{ props.investigator?.characteristic.luck }} <br />
          {{ props.investigator?.characteristic.magicPoints }} <br />
        </div>
      </QCardSection>
    </QCard>
  </div>
</template>

<style scoped lang="scss">
.investigator-sheet {
  &__card {
    margin-bottom: 1rem;
  }
  &__columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
