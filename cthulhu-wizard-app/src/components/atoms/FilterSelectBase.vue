<script setup lang="ts">
import { ref, computed } from "vue";
import { QSelect } from "quasar";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options: Array<string>;
    disabledOptions: Array<string>;
    label: string;
  }>(),
  {
    modelValue: "",
    options: undefined,
    disabledOptions: undefined,
    label: "",
  }
);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit("update:modelValue", value);
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const searchedOptions = ref(props.options);
function filterFn(
  val: string,
  update: (
    callbackFn: () => void,
    afterFn?: ((ref: QSelect) => void) | undefined
  ) => void
) {
  update(() => {
    const needle = val.toLowerCase();
    searchedOptions.value = props.options.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
}
</script>

<template>
  <QSelect
    v-model="value"
    filled
    use-input
    dense
    hide-selected
    fill-input
    behavior="menu"
    input-debounce="0"
    :label="value === '' ? props.label : undefined"
    :options="searchedOptions"
    :option-disable="(item) => props.disabledOptions.some((a) => a === item)"
    class="filter-select-base"
    @filter="filterFn"
  >
    <template #no-option>
      <slot></slot>
    </template>
  </QSelect>
</template>

// TODO label zmienić na konfigurowalnego propsa

<style scoped lang="scss">
.filter-select-base {
  margin-bottom: 1rem;
}
</style>
