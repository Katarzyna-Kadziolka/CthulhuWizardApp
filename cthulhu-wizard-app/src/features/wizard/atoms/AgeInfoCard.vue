<script setup lang="ts">
import { getInfoForAge } from "../../data/AgeInfo";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    age: number;
  }>(),
  {
    age: 15,
  }
);

const ageInfo = computed(() => getInfoForAge(props.age));
</script>

<template>
  <div>
    <QCard class="age-info-card__background">
      <QCardSection>
        <div class="age-info-card">
          <QItemLabel class="age-info-card__title">Age Info</QItemLabel>
          <QIcon name="fas fa-info-circle" size="sm" />
        </div>
        <QCardSection>
          <QItemLabel>{{ ageInfo }}</QItemLabel>
        </QCardSection>
      </QCardSection>
    </QCard>
  </div>
</template>

<style scoped lang="scss">
.age-info-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &__title {
    font-size: 1.2rem;
  }
  &__background {
    background-color: $primary;
    opacity: 0.8;
  }
}
</style>
