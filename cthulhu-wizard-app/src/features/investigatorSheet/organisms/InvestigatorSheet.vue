<script setup lang="ts">
import type { Investigator } from "@/features/wizard/types/Investigator";
import InvestigatorPersonalDataCard from "../molecules/InvestigatorPersonalDataCard.vue";
import { computed } from "vue";
import { getSkillDefaultValue } from "../../composables/SkillDefaults";
import CharacteristicCard from "../molecules/CharacteristicCard.vue";
import SkillsCard from "../molecules/SkillsCard.vue";
import CombatCard from "../molecules/CombatCard.vue";

const props = defineProps<{
  investigator: Investigator;
}>();

const calculatedDodge = computed(() => {
  const dodgeName = "Dodge";
  let dodge = props.investigator?.skills.find(
    (a) => a.name === dodgeName
  )?.currentValue;
  if (!dodge && props.investigator) {
    dodge = getSkillDefaultValue(dodgeName, props.investigator?.characteristic);
  }
  return dodge ?? 0;
});
</script>

<template>
  <div>
    <InvestigatorPersonalDataCard
      :investigator="props.investigator"
      class="investigator-sheet__card"
    />
    <CharacteristicCard
      :characteristic="props.investigator.characteristic"
      class="investigator-sheet__card"
    />
    <SkillsCard
      :skills="props.investigator.skills"
      class="investigator-sheet__card"
    />
    <CombatCard
      :characteristic="props.investigator.characteristic"
      :dodge="calculatedDodge"
      class="investigator-sheet__card"
    />
  </div>
</template>

<style scoped lang="scss">
.investigator-sheet {
  &__card {
    margin-bottom: 1rem;
  }
  &__display {
    margin: 1rem;
  }
}
</style>
