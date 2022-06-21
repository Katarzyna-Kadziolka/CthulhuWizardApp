<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(
  defineProps<{
    canGoNext: boolean;
    rightButtonLable?: string;
    canGoBack: boolean;
  }>(),
  {
    canGoNext: false,
    rightButtonLable: "Next",
    canGoBack: true,
  }
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (e: "nextButtonClicked", value: void): void;
  (e: "previousButtonClicked", value: void): void;
}>();
</script>

<template>
  <main>
    <div class="NavigationButtons__block">
      <QBtn
        dense
        color="secondary"
        label="Back"
        :disable="props.canGoBack"
        class="NavigationButtons__navigation"
        @click="$emit('previousButtonClicked')"
      />
      <QBtn
        dense
        color="secondary"
        :label="props.rightButtonLable"
        class="NavigationButtons__navigation"
        :disable="!canGoNext"
        @click="$emit('nextButtonClicked')"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
.NavigationButtons {
  &__navigation {
    width: 45%;
  }
  &__block {
    display: flex;
    justify-content: space-between;
  }
}
</style>
