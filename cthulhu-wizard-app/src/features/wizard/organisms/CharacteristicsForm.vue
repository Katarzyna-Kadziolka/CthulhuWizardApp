<script setup lang="ts">
import { investigatorStore } from "@/stores/investigatorStore";
import RandomizableInput from "../molecules/RandomizableInput.vue";
import SkillInput from "../molecules/SkillInput.vue";
import { watch } from "vue";
import { useWizard } from "../../composables/Wizard";

const store = investigatorStore();
const investigator = store.investigator;

const { getErrors } = useWizard();

const errors = getErrors(investigator.Characteristic);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (e: "validationChanged", value: boolean): void;
}>();
watch(errors, () => {
  emit("validationChanged", errors.value.length === 0);
});
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
          v-model.number="investigator.Characteristic.Strength"
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
