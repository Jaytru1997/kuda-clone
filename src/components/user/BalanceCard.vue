<template>
  <ion-grid>
    <ion-row class="ion-margin-top">
      <ion-col size="12" class="profile"
        ><img src="../../assets/us_flag.svg" alt="" class="flag" /> U.S
        Dollar</ion-col
      >
    </ion-row>
    <ion-row class="ion-align-items-center balance-section">
      <ion-col size="10">${{ this.balance }}</ion-col>
      <ion-col size="2" class="ion-text-end"
        ><ion-icon :icon="ellipsisHorizontalCircleSharp" color="dark"></ion-icon
      ></ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonIcon } from "@ionic/vue";

import { ellipsisHorizontalCircleSharp } from "ionicons/icons";

import { mapState } from "pinia";
// import { useSettingsStore } from "@/stores/settings";
import { useUserStore } from "@/stores/user";

export default {
  name: "BalanceCard",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
  },
  data() {
    return {
      ellipsisHorizontalCircleSharp,
      balance: 0,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  mounted() {
    // const isUpdated = this.user.isUpdated;
    // console.log("this comes first", this.user, this.balance);
    if (this.user.isUpdated) {
      setTimeout(() => {
        this.balance = this.user.balances.main.amount;
      }, 200);
    }
  },
};
</script>

<style scoped>
.flag {
  width: 24px;
}

.balance-section {
  font-size: 32px;
  font-weight: 700;
}
</style>
