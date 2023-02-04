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
      <router-link to="/authed/dashboard"
        ><ion-button :class="`${active} ion-text-capitalize tab-btn spend`"
          >Spend</ion-button
        ></router-link
      >
      <router-link to="/authed/dashboard/save"
        ><ion-button :class="`${active} ion-text-capitalize tab-btn save`"
          >Save</ion-button
        ></router-link
      >
      <router-link to="/authed/dashboard/borrow"
        ><ion-button :class="`${active} ion-text-capitalize tab-btn borrow`"
          >Borrow</ion-button
        ></router-link
      >
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonButton } from "@ionic/vue";

export default {
  name: "DashboardTabs",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
  },
  props: ["active"],
  data() {
    return {};
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
</style>
