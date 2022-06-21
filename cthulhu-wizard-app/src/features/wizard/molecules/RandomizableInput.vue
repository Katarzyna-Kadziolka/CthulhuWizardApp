<script setup lang="ts"></script>

<template>
  <div class="RandomizableInput__block">
    <slot class="RandomizableInput__input"></slot>
    <QBtn
      dense
      flat
      size="md"
      class="RandomizableInput__icon RandomizableInput__dice"
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
  &__icon {
    opacity: 70%;
  }
  &__dice {
    height: 70%;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }
  &__input {
    width: 85%;
  }
}
</style>
