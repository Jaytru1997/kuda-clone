<template>
  <ion-page>
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
        <v-form>
          <ion-row class="login-form">
            <ion-col size="12">
              <ion-label>Email Address</ion-label>
              <ion-input
                placeholder="example@gmail.com"
                type="email"
                inputmode="email"
                value=""
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
                inputmode="text"
                name="password"
                required
                enterkeyhint="next"
                minlength="8"
              ></ion-input>
            </ion-col>
            <ion-col size="12">
              <ion-label>Confirm Password</ion-label>
              <ion-input
                placeholder="**********"
                type="password"
                value=""
                inputmode="text"
                name="conpassword"
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
                class="signup"
                >Register</ion-button
              ></ion-col
            >
            <ion-col size="12">
              <router-link to="/login"
                ><p class="forgot-text">
                  Have an account? <span class="reset">Log In</span>
                </p></router-link
              >
            </ion-col>
          </ion-row>
        </v-form>
      </ion-grid>
    </div>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonIcon, IonText, IonButton } from "@ionic/vue";
import { chevronBackOutline } from "ionicons/icons";

export default {
  name: "RegisterPage",
  components: {
    IonPage,
    IonHeader,
    IonIcon,
    IonText,
    IonButton,
  },
  data() {
    return {
      chevronBackOutline,
    };
  },
  methods: {
    goBack: () => {
      history.go(-1);
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

.signup {
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
