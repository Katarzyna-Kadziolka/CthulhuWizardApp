<script setup lang="ts">
import FormInputBaseVue from "../../../components/atoms/FormInputBase.vue";
import type * as yup from "yup";
import { computed } from "@vue/reactivity";

const props = withDefaults(
  defineProps<{
    modelValue: number;
    watermark: string;
    tooltip: string | undefined;
    error?: yup.ValidationError;
  }>(),
  {
    modelValue: 0,
    watermark: "",
    tooltip: "",
    error: undefined,
  }
);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: number) {
    emit("update:modelValue", value);
    console.log(props.error);
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const halfValue = computed(() => Math.floor(+value.value / 2));
const quarterValue = computed(() => Math.floor(+value.value / 4));
</script>

<template>
  <main class="Skill-input">
    <FormInputBaseVue
      v-model="value"
      field-type="number"
      class="Skill-input__main-input"
      :watermark="props.watermark"
      :tooltip="props.tooltip"
      :error="props.error"
    />
    <div class="Skill-input__half">
      <span>{{ halfValue }}</span>
    </div>
    <div class="Skill-input__quarter">
      <span>{{ quarterValue }}</span>
    </div>
  </main>
</template>

<style scoped lang="scss">
.Skill-input {
  display: grid;
  grid-template-columns: 85fr 15fr;
  grid-template-rows: 1fr 1fr;
  justify-items: stretch;

  &__main-input {
    grid-column: 1;
    grid-row: 1 / span 2;
    padding-bottom: 0rem;
  }
  &__half {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    justify-content: center;
  }
  &__quarter {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    justify-content: center;
  }
}
</style>
