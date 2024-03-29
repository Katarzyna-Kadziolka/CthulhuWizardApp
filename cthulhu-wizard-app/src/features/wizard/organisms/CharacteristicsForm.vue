<script setup lang="ts">
import { useInvestigatorStore } from "@/stores/investigatorStore";
import RandomizableInput from "../molecules/RandomizableInput.vue";
import SkillInput from "../molecules/SkillInput.vue";
import { watch } from "vue";
import { useWizard } from "../../composables/Wizard";
import AgeInfoCard from "../atoms/AgeInfoCard.vue";
import AttrinutesDisplay from "../molecules/AttrinutesDisplay.vue";
import FightAttributesDisplay from "../molecules/FightAttributesDisplay.vue";

const store = useInvestigatorStore();
const investigator = store.investigator;

const { getErrors } = useWizard();

const errors = getErrors(investigator.characteristic);

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
      <span>{{ investigator.firstName }} {{ investigator.lastName }}</span>
    </div>
    <div class="characteristic-form__subtitle">
      <QIcon
        v-if="investigator.gender === 'Male'"
        name="fas fa-solid fa-mars"
        class="characteristic-form__gender-icon"
        size="xs"
      />
      <QIcon
        v-if="investigator.gender === 'Female'"
        name="fas fa-solid fa-venus"
        class="characteristic-form__gender-icon"
        size="xs"
      />
      <QIcon
        v-if="investigator.gender === 'Other'"
        name="fas fa-solid fa-transgender"
        class="characteristic-form__gender-icon"
        size="xs"
      />
      <span>{{ investigator.age }} years old</span>
    </div>
    <div class="characteristic-form__age-info-container">
      <AgeInfoCard
        :age="investigator.age"
        class="characteristic-form__age-info"
      />
    </div>
    <div class="characteristic-form__inputs-container">
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.characteristic.strength"
          class="characteristic-form__input"
          watermark="Strength"
          hint="Roll 3D6 and multiply by 5"
          :error="errors.find((a) => a.path === 'strength')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.characteristic.constitution"
          class="characteristic-form__input"
          watermark="Constitution"
          hint="Roll 3D6 and multiply by 5"
          :error="errors.find((a) => a.path === 'constitution')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.characteristic.size"
          class="characteristic-form__input"
          watermark="Size"
          hint="Roll 2D6+6 and multiply by 5"
          :error="errors.find((a) => a.path === 'size')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.characteristic.dexterity"
          class="characteristic-form__input"
          watermark="Dexterity"
          hint="Roll 3D6 and multiply by 5"
          :error="errors.find((a) => a.path === 'dexterity')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.characteristic.appearance"
          class="characteristic-form__input"
          watermark="Appearance"
          hint="Roll 3D6 and multiply by 5"
          :error="errors.find((a) => a.path === 'Appearance')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.characteristic.intelligence"
          class="characteristic-form__input"
          watermark="Intelligence"
          hint="Roll 2D6+6 and multiply by 5"
          :error="errors.find((a) => a.path === 'Intelligence')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.characteristic.power"
          class="characteristic-form__input"
          watermark="Power"
          hint="Roll 3D6 and multiply by 5"
          :error="errors.find((a) => a.path === 'power')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.characteristic.education"
          class="characteristic-form__input"
          watermark="Education"
          hint="Roll 2D6+6 and multiply by 5"
          :error="errors.find((a) => a.path === 'Education')"
        />
      </RandomizableInput>
      <RandomizableInput class="characteristic-form__input-container">
        <SkillInput
          v-model.number="investigator.characteristic.luck"
          class="characteristic-form__input"
          watermark="Luck"
          hint="Roll 3D6 and multiply by 5"
          :error="errors.find((a) => a.path === 'Luck')"
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
        <AttrinutesDisplay v-model="investigator" />
      </div>
      <div class="characteristic-form__attributes-container">
        <FightAttributesDisplay v-model="investigator.characteristic" />
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
    margin-bottom: 2rem;
  }
  &__input {
    min-width: 15rem;
  }
  &__age-info-container {
    margin-bottom: 1.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  &__age-info {
    width: 100%;
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
  }
  &__inputs-container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
