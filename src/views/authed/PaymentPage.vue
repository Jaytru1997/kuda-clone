<template>
  <ion-page>
    <ion-header>
      <ion-grid>
        <ion-row class="ion-align-items-center heading">
          <ion-col size="12" class="ion-text-center">
            <ion-text color="primary"><p class="title">Pay</p></ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <router-link to="/authed/pay/peopletrust">
            <ion-row clas="ion-align-items-center">
              <ion-col size="2" class="trx-img">
                <img src="../../assets/favicon.png" alt="" class="icon" />
              </ion-col>
              <ion-col size="9"
                ><p class="method">Send within</p>
                <p class="desc">
                  Send to any people trust account for free.
                </p></ion-col
              >
              <ion-col size="1" class="arrow"
                ><ion-icon :icon="chevronForwardOutline"></ion-icon
              ></ion-col>
            </ion-row>
          </router-link>

          <router-link to="/authed/pay/otherbank">
            <ion-row clas="ion-align-items-center">
              <ion-col size="2" class="trx-img">
                <img src="../../assets/send.svg" alt="" class="icon" />
              </ion-col>
              <ion-col size="9"
                ><p class="method">Send To Bank Account</p>
                <p class="desc">Send to other bank accounts.</p></ion-col
              >
              <ion-col size="1" class="arrow"
                ><ion-icon :icon="chevronForwardOutline"></ion-icon
              ></ion-col>
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
  IonHeader,
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonText,
} from "@ionic/vue";

import { chevronForwardOutline } from "ionicons/icons";

import BottomMenu from "@/components/BottomMenu.vue";

export default {
  name: "PaymentPage",
  components: {
    IonHeader,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    BottomMenu,
    IonIcon,
    IonText,
  },
  data() {
    return {
      chevronForwardOutline,
    };
  },
  mounted() {},
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

ion-header {
  --box-shadow: 0px 0px;
}

.heading {
  font-weight: 700;
}

a {
  text-decoration: none;
  font-weight: 700;
}

.trx-img {
  display: flex;
  align-items: center;
}

.icon {
  width: 48px;
  border-radius: 10px;
}

.arrow {
  display: flex;
  align-items: center;
}

.desc {
  color: var(--ion-color-medium);
  font-weight: 400;
  font-size: 12px;
}
</style>
