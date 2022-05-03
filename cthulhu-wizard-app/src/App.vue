<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/wizard">Wizard</RouterLink>
  </header>

  <RouterView />
</template>
