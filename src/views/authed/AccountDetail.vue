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
            <ion-text
              ><p class="heading">{{ title }}</p></ion-text
            >
          </ion-col>
          <!-- </ion-toolbar> -->
        </ion-row>
      </ion-grid>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-input
          :placeholder="`Enter ${title.toLowerCase()}`"
          :type="type"
          value=""
          :inputmode="type"
          required
          enterkeyhint="submit"
        ></ion-input>
        <ion-button
          expand="block"
          class="ion-margin-top"
          id="submit"
          :disabled="`${title === 'Account Name' && hasName}`"
          >SUBMIT</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonIcon,
  IonInput,
  IonButton,
} from "@ionic/vue";

import { chevronBackOutline } from "ionicons/icons";

export default {
  name: "AccountDetail",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonIcon,
    IonInput,
    IonButton,
  },
  data() {
    return {
      chevronBackOutline,
      title: "",
      type: "",
      hasName: true,
    };
  },
  methods: {
    goBack: () => {
      history.go(-1);
    },
  },
  created() {
    // const submit = document.getElementById("submit");
    const pathName = this.$route.path;
    if (pathName.includes("name")) {
      this.title = "Account Name";
      this.type = "text";
    } else if (pathName.includes("email")) {
      this.title = "Email Address";
      this.type = "email";
    } else if (pathName.includes("address")) {
      this.title = "User Address";
      this.type = "text";
    } else if (pathName.includes("phone")) {
      this.title = "Phone Number";
      this.type = "tel";
    } else if (pathName.includes("id")) {
      this.title = "Identification";
      this.type = "file";
    } else if (pathName.includes("kin")) {
      this.title = "Next Of Kin";
      this.type = "text";
    }
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
    text-align: center;
    align-items: center;
    height: 100vh;
    padding: 0px 300px !important;
  }
}
.heading {
  font-weight: 700;
  color: var(--ion-color-primary);
}

ion-input {
  font-weight: 700;
  margin: 10px 0px 0px !important;
  /* background: #d7d7d7 !important; */
  border: 1px solid #d7d7d7;
  padding: 5px 10px !important;
  border-radius: 0px;
  /* box-shadow: 6px 6px 6px 1px rgba(235, 235, 235, 1); */
}
</style>
