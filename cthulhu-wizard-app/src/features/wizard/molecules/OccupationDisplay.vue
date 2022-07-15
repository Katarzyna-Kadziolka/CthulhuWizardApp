<script setup lang="ts">
import type { OccupationDetails } from "../types/OccupationDetails";

const props = withDefaults(
  defineProps<{
    occupation: OccupationDetails;
  }>(),
  {
    occupation: undefined,
  }
);
</script>

<template>
  <div>
    <div class="occupation-display__title">
      <span>{{ props.occupation.name }}</span>
    </div>
    <div class="occupation-display__credit-rating">
      <span
        >Credit rating: {{ props.occupation.minCreditRating }} -
        {{ props.occupation.maxCreditRating }}</span
      >
    </div>
    <div>
      <QCard dark bordered class="bg-primary my-card occupation-display__card">
        <QCardSection>
          {{ props.occupation.descritpion }}
        </QCardSection>
      </QCard>
    </div>
    <div>
      <QCard dark bordered class="bg-primary my-card occupation-display__card">
        <QCardSection>
          <div class="text-subtitle1">Suggested Contacts</div>
          {{ props.occupation.suggestedContacts }}
        </QCardSection>
      </QCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.occupation-display {
  &__title {
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
    display: flex;
    justify-content: center;
  }
  &__credit-rating {
    font-size: 1;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    opacity: 60%;
  }
  &__card {
    margin-bottom: 0.5rem;
  }
}
</style>
