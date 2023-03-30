<template>
  <ion-page v-if="isAuthed">
    <ion-content :fullscreen="true">
      <div id="container">
        <DashboardTabs />
        <BalanceCard />
        <CurrencyOperationsTab />
        <TransactionHistoryTabs />
      </div>
      <BottomMenu />
    </ion-content>
  </ion-page>
  <errorPage message="You are currently not logged in" v-if="!isAuthed" />
</template>

<script>
import { IonContent, IonPage } from "@ionic/vue";

import DashboardTabs from "../../components/user/DashboardTabs";
import BalanceCard from "@/components/user/BalanceCard.vue";
import CurrencyOperationsTab from "../../components/user/CurrencyOperationsTab.vue";
import TransactionHistoryTabs from "../../components/user/TransactionHistory.vue";
import BottomMenu from "@/components/BottomMenu.vue";
import errorPage from "@/components/user/errorPage.vue";

import { Drivers, Storage } from "@ionic/storage";
import router from "@/router";

import { mapStores } from "pinia";
import { useSettingsStore } from "@/stores/settings";
import { useUserStore } from "@/stores/user";

export default {
  name: "DashboardPage",
  components: {
    IonContent,
    IonPage,
    DashboardTabs,
    BalanceCard,
    CurrencyOperationsTab,
    TransactionHistoryTabs,
    BottomMenu,
    errorPage,
  },
  data() {
    return {
      isLoading: true,
      isAuthed: null,
      storage: null,
    };
  },
  computed: {
    ...mapStores(useUserStore, useSettingsStore),
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  async created() {
    const storage = new Storage({
      name: "__peopletrustdb",
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    });
    await storage.create();
    this.storage = storage;
    const authStatus = await storage.get("isAuthed");
    this.isAuthed = authStatus;
    if (!this.isAuthed) {
      setTimeout(() => {
        router.push("/login");
      }, 500);
    }
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  ion-header {
    /* display: none; */
    padding: 0px 300px !important;
    box-shadow: 6px 13px 3px -4px rgba(230, 230, 230, 0.33);
  }

  #container {
    padding: 0px 300px !important;
  }

  .hero {
    padding: 0px 80px !important;
    font-size: 40px;
    text-align: left;
  }

  .hero-head {
    font-size: 40px;
    font-weight: 800;
    text-align: left;
  }
}

.logo {
  width: 150px;
}

ion-header {
  --box-shadow: 0px 0px;
}
.hero {
  padding: 0px 10px;
  font-size: 40px;
  text-align: left;
}

.hero-head {
  font-size: 40px;
  font-weight: 800;
  text-align: left;
}

.hero-card {
  padding: 20px 10px !important;
}

.hero-subtitle {
  font-size: 24px;
  font-weight: 400;
}

.card-box {
  padding: 10px 10px;
}

.card-text {
  font-weight: 800;
}

.hero-link {
  font-size: 20px;
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
</style>
