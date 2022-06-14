<script setup lang="ts">
import { RouterView } from "vue-router";
import RouterLinkBase from "./components/atoms/RouterLinkBase.vue";
import { useQuasar } from "quasar";
import { ref } from "vue";
const $q = useQuasar();
$q.dark.set(true);
const rightDrawerOpen = ref(false);
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>

<template>
  <QLayout view="hHh lpR fFf">
    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <QToolbarTitle>
          <QAvatar size="lx">
            <img src="./assets/cthulhu-logo.png" />
          </QAvatar>
          <RouterLinkBase link="/" class="header"
            >Cthulhu Wizard Creator</RouterLinkBase
          >
        </QToolbarTitle>
        <QSpace />
        <QBtn dense flat round icon="menu" @click="toggleRightDrawer" />
      </QToolbar>
    </QHeader>
    <QDrawer v-model="rightDrawerOpen" show-if-above side="right" bordered>
      <div class="menu-buttons">
        <QBtn
          to="/login"
          dense
          elevated
          class="bg-secondary menu-button"
          label="Login"
        />
        <QBtn
          to="/report-error"
          dense
          elevated
          class="bg-accent menu-button"
          label="Report Error"
        />
      </div>
    </QDrawer>
    <QPageContainer>
      <router-view />
    </QPageContainer>
  </QLayout>
</template>

<style scoped lang="scss">
.header {
  color: azure;
  margin-left: 10px;
}
.menu-buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  justify-content: center;
}
.menu-button {
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
}
</style>
