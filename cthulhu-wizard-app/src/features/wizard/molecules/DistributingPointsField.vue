<script setup lang="ts">
import { computed } from "vue";
import PointsField from "../atoms/PointsField.vue";

const props = withDefaults(
  defineProps<{
    modelValue: number;
    canAddPoints: boolean;
    canSubstractPoints: boolean;
  }>(),
  {
    modelValue: 0,
    canAddPoints: true,
    canSubstractPoints: true,
  }
);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: number) {
    emit("update:modelValue", value);
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();
</script>

<template>
  <div>
    <div class="distributing-points-field">
      <QBtn
        color="secondary"
        label="-5"
        class="distributing-points-field__button distributing-points-field__minus-button"
        :disable="!props.canSubstractPoints"
        @click="value = value - 5"
      />
      <PointsField v-model="value" :disable="!props.canAddPoints" />
      <QBtn
        color="secondary"
        label="+5"
        class="distributing-points-field__button distributing-points-field__plus-button"
        :disable="!props.canAddPoints"
        @click="value = value + 5"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.distributing-points-field {
  display: flex;
  flex-direction: row;
  justify-content: center;
  &__button {
    font-size: 1rem;
  }
  &__minus-button {
    margin-right: 0.5rem;
  }
  &__plus-button {
    margin-left: 0.5rem;
  }
}
</style>
