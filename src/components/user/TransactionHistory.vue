<template>
  <ion-grid>
    <ion-row>
      <ion-col size="12"
        ><ion-text
          ><p class="heading">Transaction History</p></ion-text
        ></ion-col
      >
    </ion-row>
    <router-link to="/">
      <ion-row clas="ion-align-items-center">
        <ion-col size="2" class="trx-img">
          <img src="../../assets/credit_icon.svg" alt="" class="icon" />
        </ion-col>
        <ion-col size="7"
          ><p class="desc">Credit from Mark Dawson</p>
          <p class="time">08:01 PM</p></ion-col
        >
        <ion-col size="3"><p :class="type">$570.00</p></ion-col>
      </ion-row>
    </router-link>

    <router-link to="/">
      <ion-row clas="ion-align-items-center">
        <ion-col size="2" class="trx-img">
          <img src="../../assets/debit_icon.svg" alt="" class="icon" />
        </ion-col>
        <ion-col size="7"
          ><p class="desc">Mark Dawson for pipes</p>
          <p class="time">08:01 PM</p></ion-col
        >
        <ion-col size="3"><p class="debit">$157.00</p></ion-col>
      </ion-row>
    </router-link>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonText } from "@ionic/vue";

import { ellipsisHorizontalCircleSharp } from "ionicons/icons";

export default {
  name: "TransactionHistoryTabs",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonText,
  },
  data() {
    return {
      ellipsisHorizontalCircleSharp,
      type: "credit",
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.trx-img {
  display: flex;
  align-items: center;
}

.desc {
  font-weight: 500;
}

.time,
.heading {
  color: var(--ion-color-step-250);
  font-weight: 500;
}

.credit {
  text-align: right;
  color: var(--ion-color-success);
}

.credit::before {
  content: "+";
}

.debit {
  text-align: right;
  color: var(--ion-color-danger);
}

.debit::before {
  content: "-";
}
</style>
