<template>
  <ion-page>
    <!-- <LoadingPage v-if="isLoading" /> -->

    <ion-content :fullscreen="true">
      <div id="container">
        <DashboardTabs />
        <BorrowBalanceCard />
        <router-link to="/">
          <ion-row>
            <ion-col size="12" size-lg="8" class="hero-card">
              <router-link to="/authed/dashboard/loan"
                ><ion-card class="card-box">
                  <ion-row class="ion-align-items-center">
                    <ion-col size="10">
                      <ion-badge color="secondary">quick loan</ion-badge>
                      <ion-text color="dark"
                        ><p class="card-text">Loan</p></ion-text
                      >
                      <p>
                        Apply for a low-interest loan, get money in minutes
                      </p></ion-col
                    >
                    <ion-col size="2"
                      ><img
                        src="../../assets/money_sac.svg"
                        alt=""
                        class="card-img"
                    /></ion-col>
                  </ion-row>
                </ion-card>
              </router-link>
            </ion-col>

            <ion-col size="12" size-lg="8" class="hero-card">
              <router-link to="/authed/dashboard/overdraft"
                ><ion-card class="card-box">
                  <ion-row class="ion-align-items-center">
                    <ion-col size="10">
                      <ion-text color="dark"
                        ><p class="card-text">Overdraft</p></ion-text
                      >
                      <p>
                        Spend when your account balance is low and repay
                        whenever you get paid.
                      </p></ion-col
                    >
                    <ion-col size="2"
                      ><img
                        src="../../assets/credit_card.svg"
                        alt=""
                        class="card-img"
                    /></ion-col>
                  </ion-row>
                </ion-card>
              </router-link>
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
import BorrowBalanceCard from "../../components/user/BorrowBalanceCard.vue";
import BottomMenu from "@/components/BottomMenu.vue";

export default {
  name: "BorrowPage",
  components: {
    IonContent,
    IonPage,
    DashboardTabs,
    BorrowBalanceCard,
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

.card-box {
  padding: 10px 10px;
}

.card-text {
  font-weight: 800;
}

.card-img {
  width: 48px;
}
</style>
