<script setup lang="ts">
import { investigatorStore } from "@/stores/investigatorStore";
import RandomizableInput from "../molecules/RandomizableInput.vue";
import SkillInput from "../molecules/SkillInput.vue";
import { watch } from "vue";
import { useWizard } from "../../composables/Wizard";
import AgeInfoCard from "../atoms/AgeInfoCard.vue";
import AttrinutesDisplay from "../molecules/AttrinutesDisplay.vue";

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
  <main class="characteristic-form">
    <div class="characteristic-form__title">
      <span>{{ investigator.FirstName }} {{ investigator.LastName }}</span>
    </div>
    <div class="characteristic-form__subtitle">
      <QIcon
        v-if="investigator.Gender === 'Male'"
        name="fas fa-solid fa-mars"
        class="characteristic-form__gender-icon"
        size="xs"
      />
      <QIcon
        v-if="investigator.Gender === 'Female'"
        name="fas fa-solid fa-venus"
        class="characteristic-form__gender-icon"
        size="xs"
      />
      <QIcon
        v-if="investigator.Gender === 'Other'"
        name="fas fa-solid fa-transgender"
        class="characteristic-form__gender-icon"
        size="xs"
      />
      <span>{{ investigator.Age }} years old</span>
    </div>
    <div class="characteristic-form__age-info">
      <AgeInfoCard />
    </div>
    <div>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Strength"
          class="characteristic-form__input"
          watermark="Strength"
          tooltip="<b>Roll 3D6 and multiply by 5</b><br>Strength measures the muscle power of an investigator"
          :error="errors.find((a) => a.path === 'Strength')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Constitution"
          class="characteristic-form__input"
          watermark="Constitution"
          tooltip="<b> Roll 3D6 and multiply by 5 </b><br>Constitution represents health, vigor and vitality"
          :error="errors.find((a) => a.path === 'Constitution')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Size"
          class="characteristic-form__input"
          watermark="Size"
          tooltip="<b> Roll 2D6+6 and multiply by 5 </b><br>Size averages both height and weight into a single number"
          :error="errors.find((a) => a.path === 'Size')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Dexterity"
          class="characteristic-form__input"
          watermark="Dexterity"
          tooltip="<b> Roll 3D6 and multiply by 5 </b><br>Investigators with higher Dexterity scores are quicker, nimbler
            and more physically flexible."
          :error="errors.find((a) => a.path === 'Dexterity')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Appearance"
          class="characteristic-form__input"
          watermark="Appearance"
          tooltip="<b> Roll 3D6 and multiply by 5 </b><br>Appearance measures both physical attractiveness and
            personality"
          :error="errors.find((a) => a.path === 'Appearance')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Intelligence"
          class="characteristic-form__input"
          watermark="Intelligence"
          tooltip="<b> Roll 2D6+6 and multiply by 5 </b><br>Intelligence represents how well investigators learn, 
            remember, analyze information and solve complex puzzles"
          :error="errors.find((a) => a.path === 'Intelligence')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Power"
          class="characteristic-form__input"
          watermark="Power"
          tooltip="<b> Roll 3D6 and multiply by 5 </b><br> Power indicates force of will: the higher the POW, the higher
            the aptitude for, and resistance to, magic"
          :error="errors.find((a) => a.path === 'Power')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.Characteristic.Education"
          class="characteristic-form__input"
          watermark="Education"
          tooltip="<b> Roll 2D6+6 and multiply by 5 </b><br>Education is a measure of the formal and factual knowledge
            possessed by the investigator, as well as indicating the time the investigator has spent in full-time education"
          :error="errors.find((a) => a.path === 'Education')"
        />
      </RandomizableInput>
      <div class="characteristic-form__random-container">
        <QBtn
          label="Random"
          dense
          color="secondary"
          class="characteristic-form__random"
        />
      </div>
      <div class="characteristic-form__attributes-container">
        <AttrinutesDisplay :investigator="investigator" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.characteristic-form {
  margin-left: -0.8rem;
  margin-right: -0.8rem;
  &__title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
  }
  &__subtitle {
    font-size: 0.8rem;
    margin-bottom: 1.3rem;
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
  &__age-info {
    margin-bottom: 1.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  &__random {
    min-width: 90%;
  }
  &__random-container {
    display: flex;
    justify-content: center;
  }
  &__attributes-container {
    margin-top: 1.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
