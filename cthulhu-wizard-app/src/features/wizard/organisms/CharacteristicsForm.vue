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
      <RandomizableInput class="Characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Strength"
          class="Characteristic-form__input"
          watermark="Strength"
          tooltip="<b>Roll 3D6 and multiply by 5</b><br>Strength measures the muscle power of an investigator"
          :error="errors.find((a) => a.path === 'Strength')"
        />
      </RandomizableInput>
      <RandomizableInput class="Characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Constitution"
          class="Characteristic-form__input"
          watermark="Constitution"
          tooltip="<b> Roll 3D6 and multiply by 5 </b><br>Constitution represents health, vigor and vitality"
          :error="errors.find((a) => a.path === 'Constitution')"
        />
      </RandomizableInput>
      <RandomizableInput class="Characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Size"
          class="Characteristic-form__input"
          watermark="Size"
          tooltip="<b> Roll 2D6+6 and multiply by 5 </b><br>Size averages both height and weight into a single number"
          :error="errors.find((a) => a.path === 'Size')"
        />
      </RandomizableInput>
      <RandomizableInput class="Characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Dexterity"
          class="Characteristic-form__input"
          watermark="Dexterity"
          tooltip="<b> Roll 3D6 and multiply by 5 </b><br>Investigators with higher Dexterity scores are quicker, nimbler
            and more physically flexible."
          :error="errors.find((a) => a.path === 'Dexterity')"
        />
      </RandomizableInput>
      <RandomizableInput class="Characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Appearance"
          class="Characteristic-form__input"
          watermark="Appearance"
          tooltip="<b> Roll 3D6 and multiply by 5 </b><br>Appearance measures both physical attractiveness and
            personality"
          :error="errors.find((a) => a.path === 'Appearance')"
        />
      </RandomizableInput>
      <RandomizableInput class="Characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Intelligence"
          class="Characteristic-form__input"
          watermark="Intelligence"
          tooltip="<b> Roll 2D6+6 and multiply by 5 </b><br>Intelligence represents how well investigators learn, 
            remember, analyze information and solve complex puzzles"
          :error="errors.find((a) => a.path === 'Intelligence')"
        />
      </RandomizableInput>
      <RandomizableInput class="Characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Power"
          class="Characteristic-form__input"
          watermark="Power"
          tooltip="<b> Roll 3D6 and multiply by 5 </b><br> Power indicates force of will: the higher the POW, the higher
            the aptitude for, and resistance to, magic"
          :error="errors.find((a) => a.path === 'Power')"
        />
      </RandomizableInput>
      <RandomizableInput class="Characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Education"
          class="Characteristic-form__input"
          watermark="Education"
          tooltip="<b> Roll 2D6+6 and multiply by 5 </b><br>Education is a measure of the formal and factual knowledge
            possessed by the investigator, as well as indicating the time the investigator has spent in full-time education"
          :error="errors.find((a) => a.path === 'Education')"
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
  &__input-container {
    margin-bottom: 1.5rem;
  }
  &__input {
    min-width: 17.5rem;
  }
}
</style>
