<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col size="12" size-md="6" class="hero">
              <ion-text color="primary">
                <h1 class="hero-head">We're the secure money app!</h1>
              </ion-text>
              <ion-text>
                <p class="hero-subtitle">
                  Make transfers from anywhere in the world and send money from
                  yoru account easily with the People Trust app
                </p>
              </ion-text>
              <ion-button class="join" href="/register"
                >Join People Trust</ion-button
              >
            </ion-col>
            <ion-col size="12" size-md="6">
              <img src="../assets/globe_circle.svg" alt="" />
            </ion-col>
          </ion-row>

          <!--Cards-->
          <ion-row class="ion-align-items-center section">
            <ion-col size="12" size-md="4" class="hero-card">
              <ion-card class="card-box">
                <ion-row class="ion-align-items-center">
                  <ion-col size="2" size-md="12"
                    ><img src="../assets/currency_icon.svg" alt=""
                  /></ion-col>
                  <ion-col size="10"
                    ><ion-text color="primary"
                      ><p class="card-text">
                        Free intra-bank transfers.
                      </p></ion-text
                    ></ion-col
                  >
                </ion-row>
              </ion-card>
            </ion-col>
            <ion-col size="12" size-md="4" class="hero-card">
              <ion-card class="card-box">
                <ion-row class="ion-align-items-center">
                  <ion-col size="2" size-md="12"
                    ><img src="../assets/send.svg" alt=""
                  /></ion-col>
                  <ion-col size="10"
                    ><ion-text color="primary"
                      ><p class="card-text">
                        Send money at low rates.
                      </p></ion-text
                    ></ion-col
                  >
                </ion-row>
              </ion-card>
            </ion-col>
            <ion-col size="12" size-md="4" class="hero-card">
              <ion-card class="card-box">
                <ion-row class="ion-align-items-center">
                  <ion-col size="2" size-md="12"
                    ><img src="../assets/person.svg" alt=""
                  /></ion-col>
                  <ion-col size="10"
                    ><ion-text color="primary"
                      ><p class="card-text">
                        Open account in minutes.
                      </p></ion-text
                    ></ion-col
                  >
                </ion-row>
              </ion-card>
            </ion-col>
          </ion-row>

          <!--Section-->
          <ion-row class="ion-align-items-center section">
            <ion-col size="12" size-md="6">
              <img src="../assets/guy_and_globe.svg" alt="" />
            </ion-col>
            <ion-col size="12" size-md="6" class="hero">
              <ion-text color="primary">
                <h1 class="hero-head">International customers are welcome!</h1>
              </ion-text>
              <ion-text>
                <p class="hero-subtitle">
                  Regardless of where you are form, you can open an account in
                  minutes.
                </p>
              </ion-text>
              <router-link to="/register" class="hero-link">
                <ion-row class="ion-align-items-center">
                  <p class="link-text">Open account now</p>
                  <img src="../assets/right_arrow.svg" alt="" />
                </ion-row>
              </router-link>
            </ion-col>
          </ion-row>

          <!--Section-->
          <ion-row class="ion-align-items-center section">
            <ion-col size="12" size-md="6" class="hero">
              <ion-text color="primary">
                <h1 class="hero-head">Send and receive money.</h1>
              </ion-text>
              <ion-text>
                <p class="hero-subtitle">
                  Add money to your People Trust account and send it to any bank
                  account.
                </p>
              </ion-text>
              <router-link to="/register" class="hero-link">
                <ion-row class="ion-align-items-center">
                  <p class="link-text">Join People Trust</p>
                  <img src="../assets/right_arrow.svg" alt="" />
                </ion-row>
              </router-link>
            </ion-col>
            <ion-col size="12" size-md="6">
              <img src="../assets/bank_transact.svg" alt="" />
            </ion-col>
          </ion-row>

          <!--Section-->
          <ion-row class="ion-align-items-center section">
            <ion-col size="12" size-md="6">
              <img src="../assets/exchange.svg" alt="" />
            </ion-col>
            <ion-col size="12" size-md="6" class="hero">
              <ion-text color="primary">
                <h1 class="hero-head">Move money across borders.</h1>
              </ion-text>
              <ion-text>
                <p class="hero-subtitle">
                  Keep your International connections going with fast
                  international transfers to friends and family at rates you can
                  afford.
                </p>
              </ion-text>
              <router-link to="/register" class="hero-link">
                <ion-row class="ion-align-items-center">
                  <p class="link-text">Send money with People Trust</p>
                  <img src="../assets/right_arrow.svg" alt="" />
                </ion-row>
              </router-link>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonButton, IonText } from "@ionic/vue";

export default {
  name: "HomePage",
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonText,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  #container {
    padding: 0px 300px !important;
  }
}
</style>
