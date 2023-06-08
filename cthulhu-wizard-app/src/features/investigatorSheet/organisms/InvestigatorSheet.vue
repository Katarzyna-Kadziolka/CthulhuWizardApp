<script setup lang="ts">
import DisplayStatisticPoints from "@/features/investigatorSheet/atoms/DisplayStatisticPoints.vue";
import type { Investigator } from "@/features/wizard/types/Investigator";
import DisplayValue from "../atoms/DisplayValue.vue";
import InvestigatorPersonalDataCard from "../molecules/InvestigatorPersonalDataCard.vue";
import { computed } from "vue";
import { getSkillDefaultValue } from "../../composables/SkillDefaults";

const props = defineProps<{
  investigator: Investigator | undefined;
}>();

const sortedSkills = computed(() => {
  const skillList = props.investigator?.skills;
  return skillList?.sort((a, b) =>
    a.name ? a.name?.localeCompare(b.name ? b.name : "") : -1
  );
});

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
    <InvestigatorPersonalDataCard :investigator="props.investigator" />
    <QCard dark bordered class="bg-grey-9 my-card investigator-sheet__card">
      <QCardSection>
        <div class="text-h6">Characteristic</div>
      </QCardSection>

      <QSeparator dark inset />

      <QCardSection>
        <DisplayStatisticPoints
          name="Strength"
          :display-value="props.investigator?.characteristic.strength"
          class="investigator-sheet__display"
        />
        <DisplayStatisticPoints
          name="Constitution"
          :display-value="props.investigator?.characteristic.constitution"
          class="investigator-sheet__display"
        />
        <DisplayStatisticPoints
          name="Size"
          :display-value="props.investigator?.characteristic.size"
          class="investigator-sheet__display"
        />
        <DisplayStatisticPoints
          name="Dexterity"
          :display-value="props.investigator?.characteristic.dexterity"
          class="investigator-sheet__display"
        />
        <DisplayStatisticPoints
          name="Appearance"
          :display-value="props.investigator?.characteristic.appearance"
          class="investigator-sheet__display"
        />
        <DisplayStatisticPoints
          name="Intelligence"
          :display-value="props.investigator?.characteristic.intelligence"
          class="investigator-sheet__display"
        />
        <DisplayStatisticPoints
          name="Power"
          :display-value="props.investigator?.characteristic.power"
          class="investigator-sheet__display"
        />
        <DisplayStatisticPoints
          name="Education"
          :display-value="props.investigator?.characteristic.education"
          class="investigator-sheet__display"
        />
      </QCardSection>

      <QSeparator dark inset />

      <QCardSection>
        <DisplayValue
          name="Move Rate"
          :display-value="
            props.investigator?.characteristic.movementRate.toString()
          "
          class="investigator-sheet__display"
        />
        <DisplayValue
          name="Hit Points"
          :display-value="
            props.investigator?.characteristic.hitPoints.toString()
          "
          class="investigator-sheet__display"
        />
        <DisplayValue
          name="Sanity"
          :display-value="props.investigator?.characteristic.sanity.toString()"
          class="investigator-sheet__display"
        />
        <DisplayValue
          name="Luck"
          :display-value="props.investigator?.characteristic.luck.toString()"
          class="investigator-sheet__display"
        />
        <DisplayValue
          name="Magic points"
          :display-value="
            props.investigator?.characteristic.magicPoints.toString()
          "
          class="investigator-sheet__display"
        />
      </QCardSection>
    </QCard>
    <QCard dark bordered class="bg-grey-9 my-card investigator-sheet__card">
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
          class="investigator-sheet__display"
        />
      </QCardSection>
    </QCard>
    <QCard dark bordered class="bg-grey-9 my-card investigator-sheet__card">
      <QCardSection>
        <div class="text-h6">Combat</div>
      </QCardSection>

      <QSeparator dark inset />

      <QCardSection>
        <DisplayValue
          name="Damage Bonus"
          :display-value="
            props.investigator?.characteristic.damageBonus.toString()
          "
          class="investigator-sheet__display"
        />
        <DisplayValue
          name="Build"
          :display-value="props.investigator?.characteristic.build.toString()"
          class="investigator-sheet__display"
        />
        <DisplayStatisticPoints
          name="Dodge"
          :display-value="calculatedDodge"
          class="investigator-sheet__display"
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
  &__display {
    margin: 1rem;
  }
}
</style>
