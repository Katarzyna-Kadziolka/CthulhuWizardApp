<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = withDefaults(
  defineProps<{
    modelValue: number;
  }>(),
  {
    modelValue: 0,
  }
);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: number | string) {
    emit("update:modelValue", value === "" ? 0 : (value as number));
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const halfValue = computed(() => Math.floor(Number(value.value) / 2));
const quarterValue = computed(() => Math.floor(Number(value.value) / 4));
</script>

<template>
  <div class="points-field">
    <div class="points-field__container">
      <QInput
        v-model.number="value"
        borderless
        filled
        dense
        type="number"
        class="points-field__main-input"
        input-class="number-without-arrows"
        data-testid="points-field"
      />
      <div data-testid="halfValue" class="points-field__half">
        <span>{{ halfValue }}</span>
      </div>
      <div data-testid="quarterValue" class="points-field__quarter">
        <span>{{ quarterValue }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.points-field {
  width: 30%;
  &__container {
    display: grid;
    grid-template-columns: 85fr 15fr;
    grid-template-rows: 1fr 1fr;
    justify-items: stretch;
  }
  &__main-input {
    grid-column: 1;
    grid-row: 1 / span 2;
    border: 2px solid #535353;
    font-size: 1.2rem;
  }
  &__half {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    justify-content: center;
    width: 2rem;
    border: 2px solid #535353;
    border-top-right-radius: 20%;
    font-size: 0.7rem;
  }
  &__quarter {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    justify-content: center;
    width: 2rem;
    border: 2px solid #535353;
    font-size: 0.7rem;
  }
}
</style>
