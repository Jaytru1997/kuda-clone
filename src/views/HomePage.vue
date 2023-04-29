<template>
  <ion-page>
    <LoadingPage v-if="isLoading" />
    <ion-header>
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size-sm="9" size-lg="3">
            <!-- <ion-toolbar :translucent="true"> -->
            <img
              src="../assets/people_trust_black.svg"
              alt="bank logo"
              class="logo"
            />
            <!-- </ion-toolbar> -->
          </ion-col>
          <ion-col
            size-sm="2"
            offset-sm="1"
            offset-lg="5"
            size-lg="4"
            class="ion-align-items-center"
          >
            <ion-button
              fill="clear"
              class="signin ion-text-sm-center"
              href="/login"
              >Sign in</ion-button
            >
            <ion-button class="join ion-hide-sm-down" href="/register"
              >Join People Trust</ion-button
            >
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col size="12" size-lg="6" class="hero">
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
            <ion-col size="12" size-lg="6">
              <img src="../assets/globe_circle.svg" alt="" />
            </ion-col>
          </ion-row>

          <!--Cards-->
          <ion-row class="ion-align-items-center section">
            <ion-col size="12" size-lg="4" class="hero-card">
              <ion-card class="card-box">
                <ion-row class="ion-align-items-center">
                  <ion-col size="2" size-lg="12"
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
            <ion-col size="12" size-lg="4" class="hero-card">
              <ion-card class="card-box">
                <ion-row class="ion-align-items-center">
                  <ion-col size="2" size-lg="12"
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
            <ion-col size="12" size-lg="4" class="hero-card">
              <ion-card class="card-box">
                <ion-row class="ion-align-items-center">
                  <ion-col size="2" size-lg="12"
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
            <ion-col size="12" size-lg="6">
              <img src="../assets/guy_and_globe.svg" alt="" />
            </ion-col>
            <ion-col size="12" size-lg="6" class="hero">
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
            <ion-col size="12" size-lg="6" class="hero">
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
            <ion-col size="12" size-lg="6">
              <img src="../assets/bank_transact.svg" alt="" />
            </ion-col>
          </ion-row>

          <!--Section-->
          <ion-row class="ion-align-items-center section">
            <ion-col size="12" size-lg="6">
              <img src="../assets/exchange.svg" alt="" />
            </ion-col>
            <ion-col size="12" size-lg="6" class="hero">
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
import {
  IonContent,
  IonHeader,
  IonPage,
  // IonTitle,
  IonButton,
  IonText,
} from "@ionic/vue";

import LoadingPage from "@/components/LoadingPage";

export default {
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    // IonTitle,
    IonButton,
    IonText,
    LoadingPage,
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

  ion-button {
    text-transform: capitalize;
    --border-radius: 10px;
    --box-shadow: 0px 0px;
    --padding-top: 25px;
    --padding-bottom: 25px;
  }
}

.logo {
  width: 200px;
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
