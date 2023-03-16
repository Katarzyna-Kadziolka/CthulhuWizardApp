<script setup lang="ts">
import RouterLinkBase from "./atoms/RouterLinkBase.vue";
</script>

<template>
  <main>
    <div class="row wrap flex-center">
      <div class="column">
        <div class="col-auto" style="height: 250px">
          <RouterLinkBase link="/wizard">
            <QBtn
              rounded
              label="Create investigator"
              class="glossy btn-position bg-secondary text-white"
            ></QBtn>
          </RouterLinkBase>
        </div>
        <div class="col-auto" style="height: 250px">
          <RouterLinkBase link="/image-generator">
            <QBtn
              rounded
              label="Create image"
              class="glossy btn-position bg-secondary text-white"
            ></QBtn>
          </RouterLinkBase>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.btn-position {
  margin-top: 250px;
}
</style>
