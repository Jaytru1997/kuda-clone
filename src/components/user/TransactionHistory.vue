<!-- eslint-disable no-unused-vars -->
<template>
  <ion-grid>
    <ion-row>
      <ion-col size="12"
        ><ion-text
          ><p class="heading">Transaction History</p></ion-text
        ></ion-col
      >
    </ion-row>
    <router-link to="/" v-for="trx in trxs" :key="trx._id">
      <ion-row class="ion-align-items-center">
        <ion-col size="2" class="trx-img">
          <img :src="trx.icon" alt="" class="icon" />
        </ion-col>
        <ion-col size="7"
          ><p class="desc">{{ trx.reason }}</p>
          <p class="time">
            {{ trx.date.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1") }}
          </p></ion-col
        >
        <ion-col size="3"
          ><p :class="trx.trxType">${{ trx.amount }}</p></ion-col
        >
      </ion-row>
    </router-link>

    <ion-row
      class="ion-align-items-center ion-margin-top"
      v-if="!retreived"
      @click="reloadTrx"
    >
      <ion-col size="12" class="ion-text-center">
        <ion-icon
          :icon="closeCircleSharp"
          color="primary"
          size="large"
          class="retreive-icon"
        ></ion-icon>
      </ion-col>
      <ion-col size="12" class="ion-text-center">
        <ion-text class="message"
          >Cannot retreive transactions, click to try again</ion-text
        >
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonText, IonIcon } from "@ionic/vue";

import {
  ellipsisHorizontalCircleSharp,
  closeCircleSharp,
} from "ionicons/icons";

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
    IonIcon,
  },
  data() {
    return {
      ellipsisHorizontalCircleSharp,
      closeCircleSharp,
      type: "credit",
      storage: null,
      req_count: 0,
      retreived: true,
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
    this.populateTransactions();
  },
  methods: {
    async populateTransactions() {
      const url = this.settingsStore.url.test;
      const response = await fetch(`${url}/transactions`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.decryptData(
            await this.storage.get("u_token")
          )}`,
        },
      });

      if (response.status >= 400 && this.req_count < 4) {
        // eslint-disable-next-line no-unused-vars
        this.req_count++;
        console.log(this.req_count);
        await this.populateTransactions();
      }
      if (this.req_count >= 4) {
        // location.reload();
        this.retreived = false;
      }

      if (response.status === 200) {
        const data = await response.json();
        this.trxs = await data.data;
        // console.log(this.trxs);
        this.trxs.forEach((trx) => {
          if (trx.trxType === "credit") {
            trx.icon = "../../assets/icon/credit_icon.svg";
          } else if (trx.trxType === "debit") {
            trx.icon = "../../assets/icon/debit_icon.svg";
          }
        });
      }
      // });
    },
    async reloadTrx() {
      this.retreived = true;
      await this.populateTransactions();
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
