<template>
  <ion-grid>
    <ion-row class="ion-align-items-center ion-text-center">
      <ion-col size="6"
        ><ion-button class="ion-text-capitalize btn" disabled>
          <ion-icon slot="start" :icon="swapHorizontalSharp"></ion-icon>Convert
        </ion-button></ion-col
      >
      <ion-col size="6"
        ><ion-button class="ion-text-capitalize btn">
          <ion-icon slot="start" :icon="addCircleSharp"></ion-icon>Add money
        </ion-button></ion-col
      >
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/vue";

import { swapHorizontalSharp, addCircleSharp } from "ionicons/icons";

export default {
  name: "CurrencyOperationsTab",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
  },
  data() {
    return {
      swapHorizontalSharp,
      addCircleSharp,
    };
  },
};
</script>

<style scoped>
.btn {
  width: 170px !important;
  height: 40px;
}
</style>
