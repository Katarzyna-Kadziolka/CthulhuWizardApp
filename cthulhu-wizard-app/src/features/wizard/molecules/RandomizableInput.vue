<script setup lang="ts">
import type { QInputProps } from "quasar";
import { computed } from "@vue/reactivity";
import type * as yup from "yup";
import { ref } from "vue";
import FormInputBase from "@/components/atoms/FormInputBase.vue";

const props = withDefaults(
  defineProps<{
    modelValue: string | number;
    watermark: string;
    tooltip: string | undefined;
    fieldType?: QInputProps["type"];
    error?: yup.ValidationError;
  }>(),
  {
    modelValue: "",
    watermark: "",
    tooltip: "",
    fieldType: "text",
    error: undefined,
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | number) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="RandomizableInput__block">
    <FormInputBase
      v-model="value"
      class="RandomizableInput__input"
      :watermark="props.watermark"
      :tooltip="props.tooltip"
      :error="props.error"
    />
    <QBtn
      dense
      flat
      size="md"
      class="RandomizableInput__dice"
      icon="fas fa-solid fa-dice-six"
    />
  </div>
</template>

<style scoped lang="scss">
.RandomizableInput {
  &__block {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
  &__dice {
    height: 70%;
    margin-top: 0.3rem;
    opacity: 70%;
  }
  &__input {
    width: 85%;
  }
}
</style>
