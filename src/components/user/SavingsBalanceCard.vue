<template>
  <ion-grid>
    <ion-row class="ion-margin-top">
      <ion-col size="12" class="profile"
        ><img src="../../assets/us_flag.svg" alt="" class="flag" /> USD
        Savings</ion-col
      >
    </ion-row>
    <ion-row class="ion-align-items-center balance-section">
      <ion-col size="10">$0.00</ion-col>
      <ion-col size="2" class="ion-text-end"
        ><ion-icon :icon="ellipsisHorizontalCircleSharp" color="dark"></ion-icon
      ></ion-col>
    </ion-row>

    <ion-row class="ion-align-items-center">
      <ion-col size="12" color="success"
        ><ion-button class="ion-text-capitalize btn" color="success">
          <ion-icon slot="start" :icon="addCircleSharp"></ion-icon>Add Pocket
        </ion-button></ion-col
      >
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonIcon } from "@ionic/vue";

import { ellipsisHorizontalCircleSharp, addCircleSharp } from "ionicons/icons";

export default {
  name: "SavingsBalanceCard",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
  },
  data() {
    return {
      addCircleSharp,
      ellipsisHorizontalCircleSharp,
    };
  },
};
</script>

<style scoped>
.flag {
  width: 24px;
}

.balance-section {
  color: var(--ion-color-success);
  font-size: 32px;
  font-weight: 700;
}
</style>
