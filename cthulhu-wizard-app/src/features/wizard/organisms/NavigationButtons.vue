<script setup lang="ts">
export interface NavigationButtons {
  formIsValid: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<NavigationButtons>(), {
  formIsValid: true,
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (e: "nextButtonClicked", value: void): void;
}>();
</script>

<template>
  <main class="q-ma-lg">
    <div class="row justify-between q-col-gutter-md q-mb-md">
      <div class="col-3">
        <QBtn color="secondary" label="Return" class="btn-width" />
      </div>
      <div class="col-3">
        <QBtn
          color="secondary"
          label="Next"
          class="btn-width"
          :disable="!formIsValid"
          @click="$emit('nextButtonClicked')"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.btn-width {
  width: 100%;
}
</style>
