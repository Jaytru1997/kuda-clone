<template>
  <ion-page>
    <!-- <LoadingPage v-if="isLoading" /> -->

    <ion-content :fullscreen="true">
      <div id="container">
        <DashboardTabs />
        <SavingsBalanceCard />
        <ion-row>
          <ion-col size="12"
            ><ion-text><p class="heading">Your Pockets</p></ion-text></ion-col
          >
        </ion-row>
        <router-link to="/">
          <ion-row clas="ion-align-items-center">
            <ion-col size="10"
              ><p class="card-name">Walmart Credit Card</p>
              <p class="balance">$5000.00</p></ion-col
            >
            <ion-col size="2" class="trx-img">
              <img src="../../assets/credit_card.svg" alt="" class="icon" />
            </ion-col>
          </ion-row>
        </router-link>
      </div>
      <BottomMenu />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from "@ionic/vue";

import DashboardTabs from "../../components/user/DashboardTabs";
import SavingsBalanceCard from "../../components/user/SavingsBalanceCard.vue";
import BottomMenu from "@/components/BottomMenu.vue";

export default {
  name: "SavingPage",
  components: {
    IonContent,
    IonPage,
    DashboardTabs,
    SavingsBalanceCard,
    BottomMenu,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  #container {
    padding: 0px 300px !important;
  }
}
.link-text {
  margin-right: 10px;
  font-weight: 500;
}

ion-button {
  text-transform: capitalize;
  --border-radius: 10px;
  --box-shadow: 0px 0px;
  --padding-top: 25px;
  --padding-bottom: 25px;
}

.heading {
  color: var(--ion-color-step-250);
  font-weight: 500;
}

a {
  text-decoration: none;
}

.trx-img {
  display: flex;
  align-items: center;
}

.card-name {
  font-weight: 500;
}

.balance,
.heading {
  color: var(--ion-color-step-250);
  font-weight: 500;
}
</style>
