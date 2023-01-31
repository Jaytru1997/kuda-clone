<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-grid>
        <ion-row>
          <ion-col size="9">
            <ion-toolbar>
              <ion-title
                ><img
                  src="../assets/people_trust_black.png"
                  alt="bank logo"
                  class="logo"
              /></ion-title>
            </ion-toolbar>
          </ion-col>
          <ion-col>
            <ion-button fill="clear" class="signin" href="/login"
              >Sign in</ion-button
            >
            <ion-button class="join" href="/register"
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
            <ion-col size="12" size-md="6"></ion-col>
            <ion-col size="12" size-md="6"></ion-col>
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
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/vue";

export default {
  name: "HomePage",
  components: {
    IonToolbar,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonButton,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  ion-header {
    /* display: none; */
    padding: 0px 300px !important;
  }
}

ion-header {
  box-shadow: 6px 13px 3px -4px rgba(230, 230, 230, 0.33);
}

.logo {
  width: 150px;
}

ion-button {
  text-transform: capitalize;
  --border-radius: 10px;
  --box-shadow: 0px 0px;
  --padding-top: 25px;
  --padding-bottom: 25px;
}

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
