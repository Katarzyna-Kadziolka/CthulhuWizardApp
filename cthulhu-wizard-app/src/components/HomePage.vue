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
              color="secondary"
              class="glossy btn-position"
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
