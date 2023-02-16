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
            <ion-text><p class="heading">Get Help</p></ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <router-link to="#" @click="callUs">
            <ion-row class="ion-align-items-center">
              <ion-col size="1">
                <ion-icon :icon="phonePortrait" color="secondary"></ion-icon>
              </ion-col>
              <ion-col size="10">
                <ion-text>
                  <h4>Call Us</h4>
                  <p>Contact Call Center</p>
                </ion-text>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </router-link>

          <router-link to="#" @click="chatWithUs">
            <ion-row class="ion-align-items-center">
              <ion-col size="1">
                <ion-icon :icon="chatbubbles" color="success"></ion-icon>
              </ion-col>
              <ion-col size="10">
                <ion-text>
                  <h4>Chat With Us</h4>
                  <p>Send A WhatsApp DM</p>
                </ion-text>
              </ion-col>
              <ion-col size="1">
                <ion-icon :icon="chevronForward"></ion-icon>
              </ion-col>
            </ion-row>
          </router-link>

          <router-link to="#" @click="sendEmail">
            <ion-row class="ion-align-items-center">
              <ion-col size="1">
                <ion-icon :icon="mail" color="danger"></ion-icon>
              </ion-col>
              <ion-col size="10">
                <ion-text>
                  <h4>Send An Email</h4>
                  <p>We'll reply as soon as possible</p>
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
  IonText,
  IonContent,
} from "@ionic/vue";
import {
  chatbubbles,
  chevronBackOutline,
  chevronForward,
  mail,
  phonePortrait,
} from "ionicons/icons";
export default {
  name: "HelpPage",
  components: {
    IonPage,
    IonHeader,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonText,
    IonContent,
  },
  data() {
    return {
      chevronBackOutline,
      chevronForward,
      phonePortrait,
      chatbubbles,
      mail,
      phone: "+19176652477",
      waPhone: "+19176652478",
      email: "contact@peopletrust.online",
    };
  },
  methods: {
    goBack: () => {
      history.go(-1);
    },
    callUs() {
      location.href = `tel://${this.phone}`;
    },
    chatWithUs() {
      location.href = `https://wa.me/${this.waPhone}`;
    },
    sendEmail() {
      location.href = `mailto://${this.email}`;
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  ion-header {
    padding: 0px 300px !important;
    box-shadow: 6px 13px 3px -4px rgba(230, 230, 230, 0.33);
  }

  #container {
    display: flex;
    height: 100vh;
    padding: 0px 300px !important;
  }
}
.heading {
  font-weight: 700;
  color: var(--ion-color-primary);
}

a {
  text-decoration: none;
}

h4 {
  font-weight: 700;
  color: var(--ion-color-dark);
}

p:not(.heading) {
  font-size: 14px;
  margin-top: -10px;
  color: var(--ion-color-medium);
}
</style>
