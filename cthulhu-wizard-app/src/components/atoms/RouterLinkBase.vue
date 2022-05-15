<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  link: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <RouterLink :to="link"><slot></slot></RouterLink>
</template>

<style lang="scss">
a {
  text-decoration: none;
  &:active {
    color: inherit;
  }
}
</style>
