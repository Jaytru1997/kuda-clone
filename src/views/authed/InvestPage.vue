<template>
  <ion-page>
    <ion-header>
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="12" class="ion-text-center">
            <ion-text class="heading" color="primary"><p>Invest</p></ion-text>
          </ion-col>
          <!-- </ion-toolbar> -->
        </ion-row>
      </ion-grid>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-align-items-center ion-text-center">
            <ion-col size="2"
              ><ion-button
                color="light"
                class="ion-text-capitalize btn"
                size="small"
                >Home
              </ion-button></ion-col
            >
            <ion-col size="2"
              ><ion-button
                color="light"
                class="ion-text-capitalize btn"
                disabled
                size="small"
                >US Stocks</ion-button
              ></ion-col
            >
          </ion-row>
        </ion-grid>
        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col size="12" class="ion-text-center"
              ><ion-icon
                :icon="barChart"
                size="large"
                color="success"
              ></ion-icon>
              <ion-text
                ><p class="invest-heading">
                  Invest with People Trust
                </p></ion-text
              >
              <ion-text>
                <p class="invest-text">
                  Choose an option to grow your money. Please, remember that
                  investments fluctuate and People Trust doesn't give investment
                  advice.
                </p>
              </ion-text>
            </ion-col>
            <ion-col size="12" size-lg="8" push-lg="2" class="hero-card">
              <router-link to="#"
                ><ion-card class="card-box">
                  <ion-row class="ion-align-items-center">
                    <ion-col size="10">
                      <ion-badge color="warning">coming soon</ion-badge>
                      <ion-text color="dark"
                        ><p class="card-text">US Stocks</p></ion-text
                      >
                      <p>
                        Trade thousands of US stocks with as little as $10.
                      </p></ion-col
                    >
                    <ion-col size="2"
                      ><img
                        src="../../assets/us_flag.svg"
                        alt=""
                        class="card-img"
                    /></ion-col>
                  </ion-row>
                </ion-card>
              </router-link>
            </ion-col>
            <ion-col size="12" size-lg="8" push-lg="2" class="hero-card">
              <router-link to="#"
                ><ion-card class="card-box">
                  <ion-row class="ion-align-items-center">
                    <ion-col size="10">
                      <ion-badge color="warning">coming soon</ion-badge>
                      <ion-text color="dark"
                        ><p class="card-text">Managed Funds</p></ion-text
                      >
                      <p>Invest in professionally managed products.</p></ion-col
                    >
                    <ion-col size="2"
                      ><img
                        src="../../assets/pie_chart_icon.svg"
                        alt=""
                        class="card-img"
                    /></ion-col>
                  </ion-row>
                </ion-card>
              </router-link>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <BottomMenu />
    </ion-content>
  </ion-page>
</template>

<script>
import BottomMenu from "@/components/BottomMenu.vue";
import {
  IonHeader,
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonIcon,
  IonCard,
  IonBadge,
  IonButton,
} from "@ionic/vue";
import { barChart } from "ionicons/icons";

export default {
  name: "InvestPage",
  components: {
    IonHeader,
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    BottomMenu,
    IonText,
    IonIcon,
    IonCard,
    IonBadge,
    IonButton,
  },
  data() {
    return {
      barChart,
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

.btn {
  --box-shadow: 0px 0px;
}

a {
  text-decoration: none;
}

.heading {
  font-weight: 700;
}

.invest-heading {
  color: var(--ion-color-success);
  font-weight: 700;
}

.invest-text {
  color: var(--ion-color-medium);
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
