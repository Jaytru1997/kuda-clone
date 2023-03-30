<template>
  <ion-page v-if="!isAuthed && !isError">
    <LoadingPage v-if="isLoading" />
    <ion-header>
      <ion-grid>
        <ion-row class="ion-align-items-center ion-justify-content-between">
          <ion-icon
            :icon="chevronBackOutline"
            size="large"
            color="primary"
            @click="goBack"
          ></ion-icon>
          <!-- </ion-toolbar> -->
          <img src="../assets/question.png" alt="" class="question-mark" />
        </ion-row>
      </ion-grid>
    </ion-header>

    <div id="container">
      <ion-grid>
        <ion-row class="">
          <ion-col size="12">
            <img src="../assets/people_trust_black.svg" alt="" class="logo" />
            <ion-text color="primary"
              ><h1 class="heading-text">Hey, there!</h1></ion-text
            >
          </ion-col>
          <ion-col size="12"> </ion-col>
        </ion-row>
        <ion-row class="login-form">
          <ion-col size="12">
            <ion-label>Email Address</ion-label>
            <ion-input
              placeholder="example@gmail.com"
              type="email"
              inputmode="email"
              value=""
              v-model="email"
              name="email"
              required
              autocomplete
              enterkeyhint="next"
              pattern="/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
            ></ion-input>
          </ion-col>
          <ion-col size="12">
            <ion-label>Password</ion-label>
            <ion-input
              placeholder="**********"
              type="password"
              value=""
              v-model="password"
              inputmode="text"
              name="password"
              required
              enterkeyhint="next"
              minlength="8"
            ></ion-input>
          </ion-col>
          <ion-col size="12"
            ><ion-button
              size="medium"
              expand="block"
              color="primary"
              class="signin"
              @click="login"
              >Sign In</ion-button
            ></ion-col
          >
          <ion-col size="12">
            <router-link to="/forgot-password"
              ><p class="forgot-text">
                Forgot password? <span class="reset">Reset it</span>
              </p></router-link
            >
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </ion-page>
  <successPage message="Successful" v-if="isAuthed" />
  <errorPage
    message="Something happened, try logging in again"
    v-if="isError"
  />
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonIcon,
  IonText,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonLabel,
} from "@ionic/vue";
import { chevronBackOutline } from "ionicons/icons";

import { mapStores } from "pinia";
import { useSettingsStore } from "@/stores/settings";
import { useUserStore } from "@/stores/user";

import successPage from "@/components/user/successPage.vue";
import errorPage from "@/components/user/errorPage.vue";
import LoadingPage from "@/components/LoadingPage";

import encrypt from "@/mixins/encrypt";
import router from "@/router";
import { Drivers, Storage } from "@ionic/storage";

export default {
  name: "LoginPage",
  components: {
    IonPage,
    IonHeader,
    IonIcon,
    IonText,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonLabel,
    successPage,
    errorPage,
    LoadingPage,
  },
  data() {
    return {
      chevronBackOutline,
      email: "",
      password: "",
      isLoading: false,
      isAuthed: false,
      isError: false,
      errorMessage: "",
      storage: null,
    };
  },
  mixins: [encrypt],
  methods: {
    goBack: () => {
      history.go(-1);
    },
    async login() {
      try {
        this.isLoading = true;
        const url = this.settingsStore.url.test;
        //grab input from form
        const email = this.email;
        const password = this.password;

        //send request to auth route
        const response = await fetch(`${url}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (response.status === 401) {
          this.isLoading = false;
          this.isError = true;
          setTimeout(() => {
            location.reload();
          }, 500);
        }

        const data = await response.json();

        if (response.status === 200 && data) {
          this.isLoading = false;
          this.userStore.populateState(data.data);
          this.isAuthed = true;
          const token = this.encryptData(data.token);
          await this.storage.set("isAuthed", this.isAuthed);
          await this.storage.set("token", token);
          setTimeout(() => {
            router.push("/authed/dashboard");
          }, 500);
        } else {
          this.isLoading = false;
          this.isError = true;
          setTimeout(() => {
            location.reload();
          }, 500);
        }

        //if successful login in user

        //throw error if unsuccessfuls
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapStores(useSettingsStore, useUserStore),
  },
  async created() {
    const storage = new Storage({
      name: "__peopletrustdb",
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    });
    await storage.create();
    this.storage = storage;
    // console.log(storage);
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
    height: 100vh;
    padding: 0px 300px !important;
  }
}

ion-header {
  padding: 10px 0px !important;
}

.logo {
  width: 200px;
}

.question-mark {
  width: 24px;
}

#container {
  display: flex;
  align-items: center;
  text-align: center;
  height: 100vh;
}

.heading-text {
  font-weight: 800;
}

.login-form {
  display: flex;
  text-align: left;
  padding: 10px;
}

ion-input {
  margin: 10px 0px 0px !important;
  /* background: #d7d7d7 !important; */
  border: 1px solid #d7d7d7;
  padding: 5px 10px !important;
  border-radius: 10px;
  /* box-shadow: 6px 6px 6px 1px rgba(235, 235, 235, 1); */
}

.signin {
  margin: 10px 0px 0px;
}

a {
  text-decoration: none !important;
}

.reset {
  color: var(--ion-color-primary);
}
.forgot-text {
  color: #959595;
  font-weight: 700;
}
</style>
