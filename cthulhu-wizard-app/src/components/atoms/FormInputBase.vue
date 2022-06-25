<script setup lang="ts">
import { QInput } from "quasar";
import type { QInputProps } from "quasar";
import { computed } from "@vue/reactivity";
import type * as yup from "yup";
import { ref } from "vue";

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

const tooltip = ref();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | number) {
    emit("update:modelValue", value);
  },
});
const isDirty = ref(false);
const showTooltip = () => tooltip.value.show();
const hideTooltip = () => tooltip.value.hide();
</script>

<template>
  <QInput
    v-model="value"
    bottom-slots
    filled
    :label="props.watermark"
    :type="fieldType"
    :error="isDirty && props.error !== undefined"
    :error-message="props.error?.message"
    dense
    @blur="isDirty = true"
  >
    <template #append>
      <QBtn
        v-show="props.tooltip"
        dense
        flat
        size="xs"
        icon="far fa-question-circle"
        class="RandomizableInput__icon RandomizableInput__question"
        @click="showTooltip"
        @blur="hideTooltip"
      />
    </template>
    <QTooltip
      v-if="props.tooltip"
      ref="tooltip"
      max-width="70%"
      :offset="[10, 10]"
      no-parent-event
    >
      <div v-html="props.tooltip"></div>
    </QTooltip>
  </QInput>
</template>

<style scoped lang="scss">
.FormInputBase {
  &__tooltipIcon {
    margin-top: 0.6rem;
    opacity: 70%;
  }
}
</style>
