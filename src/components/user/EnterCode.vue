<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-align-items-center ion-margin-top">
            <ion-col size="12" class="ion-text-center">
              <img src="../../assets/globe_coloured.svg" alt="" class="image" />
              <h2 class="greeting">Transaction PIN</h2>
              <p class="user">
                {{ `Enter ${pin.name} to complete transaction` }}
              </p>
            </ion-col>
          </ion-row>

          <!--Cards-->
          <ion-row class="ion-align-items-center section">
            <ion-col size="12" class="ion-text-center"
              ><ion-icon :icon="lockClosed" color="success"></ion-icon>
              {{ pin.name }}</ion-col
            >
            <ion-input
              placeholder="&cir;    &cir;    &cir;    &cir;    &cir;    &cir;"
              value=""
              required
              maxlength="6"
              type="text"
              pattern="/^[0-9]/"
              class="passcode ion-text-center"
            ></ion-input>
          </ion-row>
          <ion-row
            class="keyboard ion-align-items-center ion-padding-horizontal"
          >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-input">1</div></ion-col
            >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-input">2</div></ion-col
            >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-input">3</div></ion-col
            >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-input">4</div></ion-col
            >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-input">5</div></ion-col
            >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-input">6</div></ion-col
            >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-input">7</div></ion-col
            >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-input">8</div></ion-col
            >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-input">9</div></ion-col
            >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-logout">Cancel</div></ion-col
            >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-input">0</div></ion-col
            >
            <ion-col size="4" class="ion-text-center"
              ><div class="kbd kbd-delete">
                <ion-icon
                  :icon="backspace"
                  size="large"
                  class="clear"
                ></ion-icon>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
  <SuccessPage message="Transaction Successful" v-if="isSuccessful" />
</template>

<script>
import { useRouter } from "vue-router";

import {
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonInput,
  IonIcon,
  IonGrid,
} from "@ionic/vue";
import { lockClosed, backspace } from "ionicons/icons";

import SuccessPage from "@/components/user/successPage.vue";

export default {
  name: "EnterCode",
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonInput,
    IonIcon,
    IonGrid,
    SuccessPage,
  },
  data() {
    return {
      lockClosed,
      backspace,
      isSuccessful: false,
      pin: {
        name: "PIN",
        code: "",
      },
    };
  },
  methods: {
    grabInputValue(e) {
      const router = useRouter();
      let inputBar = document.querySelector(".passcode");
      e.addEventListener("click", () => {
        let valueCheck = String(inputBar.value);
        let isComplete = false;
        if (valueCheck.length <= 5) {
          inputBar.value += e.textContent;
        }
        if (valueCheck.length === 5) {
          isComplete = true;
        }
        if (isComplete) {
          this.isSuccessful = true;
          setTimeout(() => {
            router.push("/authed/dashboard");
            inputBar.value = ""; //clear password from UI
          }, 1000);
        }
      });
    },
    removeInputValue: (e) => {
      let inputBar = document.querySelector(".passcode");
      e.addEventListener("click", () => {
        let valueCheck = String(inputBar.value);
        valueCheck.slice(0, -1);
        if (valueCheck.length > 0) {
          inputBar.value = valueCheck;
        }
      });
    },
  },
  mounted() {
    const inputs = document.querySelectorAll(".kbd-input");
    const del = document.querySelector(".kbd-delete");
    inputs.forEach((el) => {
      this.grabInputValue(el);
    });
    del.addEventListener("click", function (e) {
      e.preventDefault();
      let inputBar = document.querySelector(".passcode");
      let valueCheck = String(inputBar.value);
      let newValue = valueCheck.slice(0, -1);
      if (valueCheck.length > 0) {
        inputBar.value = newValue;
      }
    });
  },
  created() {
    // console.log(this.$router);
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

ion-button {
  text-transform: capitalize;
  --border-radius: 10px;
  --box-shadow: 0px 0px;
  --padding-top: 25px;
  --padding-bottom: 25px;
}

.image {
  width: 96px;
}

.greeting {
  color: var(--ion-color-primary);
  font-weight: 800;
}

.section {
  margin: 30px 0px 0px;
}

ion-input.passcode {
  --placeholder-color: var(--ion-color-primary);
  --placeholder-font-weight: 800;
  font-size: 24px;
}

.kbd {
  font-size: 45px;
  font-weight: 900;
  margin: 5px 0px;
}

.kbd-logout {
  font-size: 16px;
  color: var(--ion-color-success);
}

.clear {
  color: #eb445a;
}

.kbd:hover {
  color: var(--ion-color-primary);
}
</style>
