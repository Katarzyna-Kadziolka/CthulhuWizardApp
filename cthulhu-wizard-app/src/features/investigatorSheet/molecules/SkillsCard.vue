<script setup lang="ts">
import type { InvestigatorSkill } from "@/features/wizard/types/InvestigatorSkill";
import DisplayStatisticPoints from "../atoms/DisplayStatisticPoints.vue";
import { computed } from "vue";

const props = defineProps<{
  skills: Array<InvestigatorSkill>;
}>();

const sortedSkills = computed(() => {
  const skillList = props.skills;
  return skillList?.sort((a, b) =>
    a.name ? a.name?.localeCompare(b.name ? b.name : "") : -1
  );
});
</script>

<template>
  <QCard dark bordered class="bg-grey-9 my-card">
    <QCardSection>
      <div class="text-h6">Investigator Skills</div>
    </QCardSection>

    <QSeparator dark inset />

    <QCardSection>
      <DisplayStatisticPoints
        v-for="skill in sortedSkills"
        :key="skill.toString()"
        :name="skill.name ? skill.name : ''"
        :display-value="skill.currentValue"
        class="skills-card__display"
      />
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss">
.skills-card {
  &__display {
    margin: 1rem;
  }
}
</style>
