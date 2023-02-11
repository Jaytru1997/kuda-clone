<template>
  <ion-page>
    <ion-header>
      <ion-grid>
        <ion-row class="ion-align-items-center ion-justify-content-between">
          <ion-col size="12" class="ion-text-center">
            <ion-text><p class="heading">More</p></ion-text>
          </ion-col>
          <!-- </ion-toolbar> -->
        </ion-row>
      </ion-grid>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <router-link to="/authed/more/account">
            <ion-row class="ion-align-items-center">
              <ion-col size="2">
                <img
                  src="../../assets/globe_coloured.svg"
                  alt=""
                  class="profile-img"
                />
              </ion-col>
              <ion-col size="9">
                <ion-text>
                  <h4>John Doe</h4>
                  <p>Account Details</p>
                </ion-text>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </router-link>
          <router-link to="/authed/more/security">
            <ion-row class="ion-align-items-center">
              <ion-col size="1">
                <ion-icon :icon="card" color="secondary"></ion-icon>
              </ion-col>
              <ion-col size="10">
                <ion-text>
                  <h4>Saved Cards</h4>
                  <p>Manage connected cards</p>
                </ion-text>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </router-link>
          <router-link to="/authed/more/help">
            <ion-row class="ion-align-items-center">
              <ion-col size="1">
                <ion-icon :icon="alert" color="danger"></ion-icon>
              </ion-col>
              <ion-col size="10">
                <ion-text>
                  <h4>Get Help</h4>
                  <p>Get support or send feedback</p>
                </ion-text>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </router-link>
          <router-link to="/authed/more/security">
            <ion-row class="ion-align-items-center">
              <ion-col size="1">
                <ion-icon :icon="lockClosed" color="warning"></ion-icon>
              </ion-col>
              <ion-col size="10">
                <ion-text>
                  <h4>Security</h4>
                  <p>Protect yourself from intruders</p>
                </ion-text>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </router-link>
          <router-link to="/authed/more/security">
            <ion-row class="ion-align-items-center">
              <ion-col size="1">
                <ion-icon :icon="document" color="danger"></ion-icon>
              </ion-col>
              <ion-col size="10">
                <ion-text>
                  <h4>Legal</h4>
                  <p>About our contract with you</p>
                </ion-text>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </router-link>
        </ion-grid>
      </div>
      <BottomMenu />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  IonHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonText,
} from "@ionic/vue";

import BottomMenu from "@/components/BottomMenu.vue";
import {
  chevronForward,
  lockClosed,
  alert,
  document,
  card,
} from "ionicons/icons";

export default {
  name: "MorePage",
  components: {
    IonContent,
    IonPage,
    IonHeader,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonText,
    BottomMenu,
  },
  data() {
    return {
      lockClosed,
      chevronForward,
      alert,
      document,
      card,
    };
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

.heading {
  font-weight: 700;
  color: var(--ion-color-primary);
}

.profile-img {
  width: 48px !important;
}

a {
  text-decoration: none;
}

h4 {
  font-weight: 700;
  color: var(--ion-color-dark);
}

p:not(.heading) {
  margin-top: -10px;
  color: var(--ion-color-medium);
}
</style>
