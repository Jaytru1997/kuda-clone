<template>
  <ion-page>
    <ion-header>
      <ion-grid>
        <ion-row class="ion-align-items-center ion-justify-content-between">
          <ion-col size="2">
            <ion-icon
              :icon="chevronBackOutline"
              size="medium"
              color="primary"
              @click="goBack"
            ></ion-icon>
          </ion-col>
          <ion-col size="10" class="ion-text-center" pull="1">
            <ion-text><p class="heading">Account Details</p></ion-text>
          </ion-col>
          <!-- </ion-toolbar> -->
        </ion-row>
      </ion-grid>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-margin-top">
            <ion-col size="12" class="ion-text-center">
              <img src="../../assets/globe_coloured.svg" alt="" class="logo" />
              <ion-text color="dark"
                ><h6 class="user-name">John, - Doe</h6></ion-text
              >
            </ion-col>
            <ion-col size="12"> </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card class="card">
                <ion-card-content>
                  <ion-row class="ion-align-items-center">
                    <ion-col size="10">
                      <p>Your Account Number</p>
                      <p class="account-number">2000000000</p>
                    </ion-col>
                    <ion-col siz="2" class="copy">
                      COPY <ion-icon :icon="copy" color="success"></ion-icon>
                    </ion-col>
                  </ion-row>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>

          <router-link to="/authed/more/account/name">
            <ion-row class="ion-align-items-center">
              <ion-col size="1">
                <ion-icon :icon="card" color="secondary"></ion-icon>
              </ion-col>
              <ion-col size="10">
                <ion-text>
                  <h4>John Doe</h4>
                  <p>Account Name</p>
                </ion-text>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </router-link>

          <router-link to="/authed/more/account/address">
            <ion-row class="ion-align-items-center">
              <ion-col size="1">
                <ion-icon :icon="card" color="secondary"></ion-icon>
              </ion-col>
              <ion-col size="10">
                <ion-text>
                  <h4>1, Maine Street</h4>
                  <p>Address</p>
                </ion-text>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </router-link>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonContent,
  IonText,
  IonCard,
  IonCardContent,
} from "@ionic/vue";
import { chevronBackOutline, copy, chevronForward } from "ionicons/icons";
export default {
  name: "AccountDetails",
  components: {
    IonPage,
    IonHeader,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonContent,
    IonText,
    IonCard,
    IonCardContent,
  },
  data() {
    return {
      chevronBackOutline,
      copy,
      chevronForward,
    };
  },
  methods: {
    goBack: () => {
      history.go(-1);
    },
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
}
.logo {
  width: 64px;
}

.card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}

.account-number {
  font-weight: 700;
}

.copy {
  font-weight: 700;
  color: var(--ion-color-success);
}

p:not(.account-number) {
  margin-top: -10px;
  color: var(--ion-color-medium);
}

a {
  text-decoration: none;
}
</style>
