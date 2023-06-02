<script setup lang="ts">
import type { Investigator } from "@/features/wizard/types/Investigator";

const props = defineProps<{
  investigator: Investigator | undefined;
}>();
</script>

<template>
  <QCard dark bordered class="bg-grey-9 my-card">
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
</template>
