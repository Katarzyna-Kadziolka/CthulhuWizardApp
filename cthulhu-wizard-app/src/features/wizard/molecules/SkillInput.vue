<script setup lang="ts">
import FormInputBaseVue from "../../../components/atoms/FormInputBase.vue";
import type * as yup from "yup";
import { computed } from "@vue/reactivity";

const props = withDefaults(
  defineProps<{
    modelValue: number | undefined;
    watermark: string;
    hint?: string | undefined;
    error?: yup.ValidationError;
  }>(),
  {
    modelValue: 0,
    watermark: "",
    hint: "",
    error: undefined,
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

const halfValue = computed(() => Math.floor(+value.value / 2));
const quarterValue = computed(() => Math.floor(+value.value / 4));
</script>

<template>
  <main class="skill-input">
    <div class="skill-input__container">
      <FormInputBaseVue
        v-model="value"
        field-type="number"
        class="skill-input__main-input"
        :watermark="props.watermark"
        :hint="props.hint"
        :error="props.error"
      />
      <div class="skill-input__half">
        <span>{{ halfValue }}</span>
      </div>
      <div class="skill-input__quarter">
        <span>{{ quarterValue }}</span>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.skill-input {
  width: 80%;
  &__container {
    display: grid;
    grid-template-columns: 85fr 15fr;
    grid-template-rows: 1fr 1fr;
    justify-items: stretch;
  }
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
