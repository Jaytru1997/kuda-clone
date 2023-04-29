<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="light">
        <ion-title
          ><img
            src="../../assets/people_trust_black.svg"
            alt="bank logo"
            class="logo"
        /></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list lines="none" id="menu-list">
        <router-link to="/admin/users" class="hero-link">
          <ion-item detail="true">
            <ion-icon
              :icon="personOutline"
              slot="start"
              color="primary"
            ></ion-icon>
            <ion-label>Users</ion-label>
          </ion-item>
        </router-link>
        <router-link to="/admin/deposit" class="hero-link">
          <ion-item detail="true">
            <ion-icon
              :icon="cloudDownloadOutline"
              slot="start"
              color="primary"
            ></ion-icon>
            <ion-label>Deposit</ion-label>
          </ion-item>
        </router-link>
        <router-link to="/admin/withdraw" class="hero-link">
          <ion-item detail="true">
            <ion-icon
              :icon="cloudUploadOutline"
              slot="start"
              color="primary"
            ></ion-icon>
            <ion-label>Withdrawal</ion-label>
          </ion-item>
        </router-link>
        <router-link to="/admin/loans" class="hero-link">
          <ion-item detail="true">
            <ion-icon
              :icon="cashOutline"
              slot="start"
              color="primary"
            ></ion-icon>
            <ion-label>Loans</ion-label>
          </ion-item>
        </router-link>
        <router-link to="/admin/cards" class="hero-link">
          <ion-item detail="true">
            <ion-icon
              :icon="cardOutline"
              slot="start"
              color="primary"
            ></ion-icon>
            <ion-label>Cards</ion-label>
          </ion-item>
        </router-link>
        <router-link to="/admin/settings" class="hero-link">
          <ion-item detail="true">
            <ion-icon
              :icon="cogOutline"
              slot="start"
              color="primary"
            ></ion-icon>
            <ion-label>Settings</ion-label>
          </ion-item>
        </router-link>
        <ion-item @click="logout">
          <ion-icon
            :icon="powerOutline"
            slot="start"
            color="primary"
          ></ion-icon>
          <ion-label>Logout</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Bank Admin</ion-title>
      </ion-toolbar>
    </ion-header>

    <!--Dashboard Cards Begin-->
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card class="card">
              <ion-card-content class="card-content">
                <ion-row class="ion-align-items-center">
                  <ion-col size="1">
                    <ion-icon
                      :icon="personOutline"
                      size="large"
                      color="light"
                    ></ion-icon>
                  </ion-col>
                  <ion-col size="6" offset="5" class="ion-text-center">
                    <p class="text-style">Registered Users</p>
                    <p class="account-number text-style">2</p>
                  </ion-col>
                </ion-row>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonButtons,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
} from "@ionic/vue";
import {
  personOutline,
  cloudDownloadOutline,
  cloudUploadOutline,
  cashOutline,
  cardOutline,
  cogOutline,
  powerOutline,
} from "ionicons/icons";
import encrypt from "@/mixins/encrypt";
import router from "@/router";
import { Drivers, Storage } from "@ionic/storage";

export default {
  name: "DashboardPageAdmin",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
  },
  data() {
    return {
      personOutline,
      cloudDownloadOutline,
      cloudUploadOutline,
      cashOutline,
      cardOutline,
      cogOutline,
      powerOutline,
      isLoading: true,
      isAuthed: null,
      storage: null,
    };
  },
  mixins: [encrypt],
  async created() {
    const storage = new Storage({
      name: "__peopletrustdb",
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    });
    await storage.create();
    this.storage = storage;
    const authStatus = await storage.get("isAuthed");
    const role = await storage.get("role");
    this.isAuthed = authStatus;
    if (!this.isAuthed && role !== "admin") {
      setTimeout(() => {
        router.push("/login");
      }, 500);
    }
  },
  methods: {
    async logout() {
      await this.storage.clear();
      router.push("/");
    },
  },
};
</script>

<style scoped>
ion-menu::part(backdrop) {
  background-color: rgba(255, 0, 255, 0.5);
}

ion-menu::part(container) {
  border-radius: 0 20px 20px 0;

  box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
}

.logo {
  width: 150px;
}

a {
  text-decoration: none;
}

.card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: var(--ion-color-step-950);
  background-image: url(../../assets/meteorbg.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}

.card-content {
  background-image: url(../../assets/wavebg.svg);
  background-position: bottom;
  background-repeat: no-repeat;
}

.account-number {
  font-weight: 700;
  font-size: 50px;
}

.text-style {
}
</style>
