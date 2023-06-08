<script setup lang="ts">
import type { Investigator } from "@/features/wizard/types/Investigator";
import DisplayValue from "../atoms/DisplayValue.vue";

const props = defineProps<{
  investigator: Investigator | undefined;
}>();
</script>

<template>
  <QCard dark bordered class="bg-grey-9 my-card">
    <QCardSection>
      <div class="text-h6">
        {{ props.investigator?.firstName }}
        {{ props.investigator?.lastName }}
      </div>
      <div class="text-subtitle2">
        {{ props.investigator?.occupation?.name }}
      </div>
    </QCardSection>

    <QSeparator dark inset />

    <QCardSection>
      <DisplayValue
        name="Sex"
        :display-value="props.investigator?.gender?.toString()"
        class="investigator-personal-data-card__display"
      />
      <DisplayValue
        name="Age"
        :display-value="props.investigator?.age.toString()"
        class="investigator-personal-data-card__display"
      />
      <DisplayValue
        name="Residence"
        :display-value="props.investigator?.residence"
        class="investigator-personal-data-card__display"
      />
      <DisplayValue
        name="Birthplace"
        :display-value="props.investigator?.birthPlace"
        class="investigator-personal-data-card__display"
      />
    </QCardSection>
  </QCard>
</template>

<style lang="scss">
.investigator-personal-data-card {
  &__display {
    margin: 1rem;
  }
}
</style>
