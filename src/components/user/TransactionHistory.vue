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

import { mapStores } from "pinia";
import { useSettingsStore } from "@/stores/settings";
import { useUserStore } from "@/stores/user";

import { Drivers, Storage } from "@ionic/storage";

import encrypt from "@/mixins/encrypt";

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
      storage: null,
      trxs: [],
    };
  },
  mixins: [encrypt],
  computed: {
    ...mapStores(useUserStore, useSettingsStore),
  },
  async created() {
    const storage = new Storage({
      name: "__peopletrustdb",
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    });
    await storage.create();
    this.storage = storage;
  },
  methods: {
    async populateTransactions() {
      const userDetails = this.userStore.getUserData;
      const trxs = userDetails.transactions;
      trxs.forEach(async (trx) => {
        const url = this.settingsStore.getUrl;
        const response = await fetch(`${url}/transactions/${trx}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.decryptData(
              await this.storage.get("u_token")
            )}`,
          },
        });
        const data = await response.json();
        this.trxs.push(data);
      });
    },
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
