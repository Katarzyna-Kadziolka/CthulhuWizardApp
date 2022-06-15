<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(
  defineProps<{
    formIsValid: boolean;
    rightButtonLable?: string;
  }>(),
  {
    formIsValid: false,
    rightButtonLable: "Next",
  }
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (e: "nextButtonClicked", value: void): void;
}>();
</script>

<template>
  <main>
    <div class="NavigationButtons__block">
      <QBtn
        dense
        color="secondary"
        label="Return"
        class="NavigationButtons__navigation"
      />
      <QBtn
        dense
        color="secondary"
        :label="props.rightButtonLable"
        class="NavigationButtons__navigation"
        :disable="!formIsValid"
        @click="$emit('nextButtonClicked')"
      />
    </div>
  </main>
</template>

<style lang="scss">
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
