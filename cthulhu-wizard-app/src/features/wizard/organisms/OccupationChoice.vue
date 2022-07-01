<script setup lang="ts"></script>

<template>
  <main class="occupation-choice">
    <div class="occupation-choice__title">
      <span>Choose occupation</span>
    </div>
    <div class="occupation-choice__occupation-display-container">
      <QScrollArea class="occupation-choice__occupation-display">
        <QList dark bordered separator style="max-width: 318px">
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
          <QItem v-ripple clickable>
            <QItemSection>Single line item</QItemSection>
          </QItem>
        </QList>
      </QScrollArea>
    </div>
    <div class="occupation-choice__random-container">
      <QBtn
        label="Random"
        dense
        color="secondary"
        class="occupation-choice__random"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
.occupation-choice {
  margin-left: -0.8rem;
  margin-right: -0.8rem;
  &__title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
  }
  &__random-container {
    display: flex;
    justify-content: center;
  }
  &__random {
    min-width: 90%;
  }
  &__occupation-display {
    height: 24rem;
    max-width: 300px;
  }
  &__occupation-display-container {
    min-height: 26rem;
  }
}
</style>
