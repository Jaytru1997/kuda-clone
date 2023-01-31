<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
</script>

<style scoped>
@media screen and (min-width: 768px) {
  #app {
    /* display: none; */
    --margin: 0px 80px !important;
  }
}
</style>
