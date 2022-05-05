<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import RouterLinkBase from "./components/atoms/RouterLinkBase.vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
$q.dark.set(true);
</script>

<template>
  <QLayout view="hHh lpR fFf">
    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <QToolbarTitle>
          <QAvatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </QAvatar>
          <RouterLinkBase link="/" class="header"
            >Cthulhu Wizard Creator</RouterLinkBase
          >
        </QToolbarTitle>
        <QSpace />
        <RouterLinkBase link="/login">
          <QBtn stretch flat label="Login" color="secondary" />
        </RouterLinkBase>
      </QToolbar>
    </QHeader>

    <QPageContainer>
      <router-view />
    </QPageContainer>
  </QLayout>
</template>

<style lang="scss">
.header {
  color: azure;
  margin-left: 10px;
}
</style>
