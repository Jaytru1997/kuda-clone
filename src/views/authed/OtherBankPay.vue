<template>
  <ion-page>
    <ion-header>
      <ion-grid>
        <ion-row class="ion-align-items-center heading">
          <ion-col size="12" class="ion-text-center">
            <ion-text color="primary" v-if="!hasSelected"
              ><p class="title">Choose Bank</p></ion-text
            >
            <ion-text color="primary" v-if="hasSelected"
              ><p class="title">Bank Details</p></ion-text
            >
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-searchbar
          value=""
          show-clear-button="always"
          placeholder="Search for a bank"
          :debounce="1000"
          @ionChange="filterBank($event)"
          class="searchbar"
          v-if="!hasSelected"
        ></ion-searchbar>

        <ion-list v-if="!hasSelected">
          <ion-item v-for="result in results" v-bind:key="result.key">
            <ion-label @click="selectBank(result)">{{
              result
            }}</ion-label></ion-item
          >
        </ion-list>
      </div>
      <BottomMenu />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader,
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/vue";

import BottomMenu from "@/components/BottomMenu.vue";

export default {
  name: "OtherBankPay",
  components: {
    IonHeader,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    IonText,
    BottomMenu,
  },
  data() {
    return {
      hasSelected: false,
      selection: "",
      banks: [],
      results: [],
    };
  },
  methods: {
    filterBank(event) {
      const value = event.target.value;
      if (value === "") {
        this.results = [];
      }
      if (value !== "") {
        const query = value.toLowerCase();
        this.results = this.banks.filter(
          (bank) => bank.toLowerCase().indexOf(query) > -1
        );
      }
    },
    selectBank(selection) {
      this.selection = selection;
      this.hasSelected = true;
    },
  },
  created() {
    fetch("../../assets/bank_names.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            this.banks.push(data[key]);
          }
        }
      });
  },
};
</script>

<style scoped>
.searchbar {
  --box-shadow: 1px 1px 1px 0.5px;
  --placeholder-color: var(--ion-color-medium);
}
</style>
