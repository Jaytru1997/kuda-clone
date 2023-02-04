<template>
  <ion-grid>
    <ion-row class="ion-align-items-center">
      <ion-col size="10" class="profile"
        ><img
          src="../../assets/globe_coloured.svg"
          alt=""
          class="profile-img"
        />
        Hi, Johnny</ion-col
      >
      <ion-col size="2" class="ion-text-end">
        <img src="../../assets/pie_chart_icon.svg" alt="" />
      </ion-col>
    </ion-row>
    <ion-row class="ion-margin-top">
      <ion-button class="ion-text-capitalize tab-btn spend">Spend</ion-button>
      <ion-button class="ion-text-capitalize tab-btn save">Save</ion-button>
      <ion-button class="ion-text-capitalize tab-btn borrow">Borrow</ion-button>
    </ion-row>

    <ion-row class="ion-margin-top">
      <ion-col size="12" class="profile"
        ><img src="../../assets/us_flag.svg" alt="" class="flag" /> U.S
        Dollar</ion-col
      >
    </ion-row>
    <ion-row class="ion-align-items-center balance-section">
      <ion-col size="10">$0.00</ion-col>
      <ion-col size="2" class="ion-text-end"
        ><ion-icon :icon="ellipsisHorizontalCircleSharp" color="dark"></ion-icon
      ></ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/vue";

import { ellipsisHorizontalCircleSharp } from "ionicons/icons";

export default {
  name: "DashboardTabs",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
  },
  data() {
    return {
      ellipsisHorizontalCircleSharp,
    };
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  gap: 5px;
}

.profile-img {
  width: 48px;
}

.tab-btn {
  --background: var(--ion-color-primary-contrast) !important;
  --border-radius: 10px;
}

.tab-btn:not(:first-child) {
  margin-left: 10px;
}

.spend {
  color: var(--ion-color-primary);
}

.save {
  color: var(--ion-color-success);
}

.borrow {
  color: #3dc2ff;
}

.flag {
  width: 24px;
}

.balance-section {
  font-size: 32px;
  font-weight: 700;
}
</style>
