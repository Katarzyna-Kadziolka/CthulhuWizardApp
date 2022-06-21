<script setup lang="ts">
import { investigatorStore } from "@/stores/investigatorStore";
import RandomizableInput from "../molecules/RandomizableInput.vue";
import SkillInput from "../molecules/SkillInput.vue";
import { computed, watch } from "vue";
import * as yup from "yup";

const store = investigatorStore();
const investigator = store.investigator;

const characteriscticSchema = yup.object().shape({
  Strength: yup
    .number()
    .typeError("Strength cannot be empty")
    .required()
    .min(15)
    .max(90),
  Constitution: yup
    .number()
    .typeError("Constitution cannot be empty")
    .required()
    .min(15)
    .max(90),
  Size: yup
    .number()
    .typeError("Size cannot be empty")
    .required()
    .min(15)
    .max(90),
  Dexterity: yup
    .number()
    .typeError("Dexterity cannot be empty")
    .required()
    .min(15)
    .max(90),
  Appearance: yup
    .number()
    .typeError("Appearance cannot be empty")
    .required()
    .min(15)
    .max(90),
  Intelligence: yup
    .number()
    .typeError("Intelligence cannot be empty")
    .required()
    .min(15)
    .max(90),
  Power: yup
    .number()
    .typeError("Power cannot be empty")
    .required()
    .min(15)
    .max(90),
  Education: yup
    .number()
    .typeError("Education cannot be empty")
    .required()
    .min(15)
    .max(90),
  Luck: yup
    .number()
    .typeError("Luck cannot be empty")
    .required()
    .min(15)
    .max(90),
});

const errors = computed(() => {
  try {
    characteriscticSchema.validateSync(investigator, {
      abortEarly: false,
    });
    return [];
  } catch (error) {
    const validationError = error as yup.ValidationError;
    return validationError.inner;
  }
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();
</script>

<template>
  <main class="Characteristic-form">
    <div class="Characteristic-form__title Characteristic-form__block">
      <span>{{ investigator.FirstName }} {{ investigator.LastName }}</span>
    </div>
    <div class="Characteristic-form__subtitle Characteristic-form__block">
      <QIcon
        v-if="investigator.Gender === 'Male'"
        name="fas fa-solid fa-mars"
        class="Characteristic-form__gender-icon"
        size="xs"
      />
      <QIcon
        v-if="investigator.Gender === 'Female'"
        name="fas fa-solid fa-venus"
        class="Characteristic-form__gender-icon"
        size="xs"
      />
      <QIcon
        v-if="investigator.Gender === 'Other'"
        name="fas fa-solid fa-transgender"
        class="Characteristic-form__gender-icon"
        size="xs"
      />
      <span>{{ investigator.Age }} years old</span>
    </div>
    <div>
      <RandomizableInput>
        <SkillInput
          v-model="investigator.Characteristic.Strength"
          watermark="Strength"
          tooltip="<b>Roll 3D6 and multiply by 5</b><br>Strength measures the muscle power of an investigator"
          :error="errors.find((a) => a.path === 'Strength')"
        />
      </RandomizableInput>
    </div>
  </main>
</template>

<style scoped lang="scss">
.Characteristic-form {
  margin-left: -0.8rem;
  margin-right: -0.8rem;
  &__title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  &__subtitle {
    font-size: 0.8rem;
    margin-bottom: 1.3rem;
  }
  &__block {
    display: flex;
    justify-content: center;
  }
  &__gender-icon {
    margin-right: 0.3rem;
  }
}
</style>
