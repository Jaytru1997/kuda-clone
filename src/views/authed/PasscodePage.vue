<template>
  <ion-page>
    <LoadingPage v-if="isLoading" />

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col size="12" class="greeting">
              <img src="../../assets/globe_coloured.svg" alt="" />
              <h2 class="greeting-title">Welcome Back</h2>
              <p class="user">John Doe</p>
            </ion-col>
          </ion-row>

          <!--Cards-->
          <ion-row class="ion-align-items-center section">
            <ion-icon :icon="lockClosed" color="success"></ion-icon>
            <p>Passcode</p>
          </ion-row>
          <ion-row>
            <ion-input
              placeholder="******"
              value=""
              required
              maxlength="6"
              type="text"
              pattern="/^[0-9]/"
              class="passcode"
            ></ion-input>
          </ion-row>
          <ion-row class="keyboard ion-align-items-center">
            <ion-col size="4"><div class="kbd">1</div></ion-col>
            <ion-col size="4"><div class="kbd">2</div></ion-col>
            <ion-col size="4"><div class="kbd">3</div></ion-col>
            <ion-col size="4"><div class="kbd">4</div></ion-col>
            <ion-col size="4"><div class="kbd">5</div></ion-col>
            <ion-col size="4"><div class="kbd">6</div></ion-col>
            <ion-col size="4"><div class="kbd">7</div></ion-col>
            <ion-col size="4"><div class="kbd">8</div></ion-col>
            <ion-col size="4"><div class="kbd">9</div></ion-col>
            <ion-col size="4"><div class="kbd login">Sign Out</div></ion-col>
            <ion-col size="4"><div class="kbd">0</div></ion-col>
            <ion-col size="4"
              ><div class="kbd email">
                <ion-icon :icon="mail" color="success" size="large"></ion-icon>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from "@ionic/vue";
import { lockClosed, mail } from "ionicons/icons";

import LoadingPage from "../../components/LoadingPage";

export default {
  name: "PasscodePage",
  components: {
    IonContent,
    IonPage,
    LoadingPage,
  },
  data() {
    return {
      lockClosed,
      mail,
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
