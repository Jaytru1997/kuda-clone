<template>
  <ion-page v-if="!enterOTP">
    <ion-header>
      <ion-grid>
        <ion-row class="ion-align-items-center heading">
          <ion-col size="1" v-if="hasSelected || hasSetAccount">
            <ion-icon
              :icon="chevronBackOutline"
              size="large"
              color="primary"
              @click="goBack"
            ></ion-icon>
          </ion-col>
          <ion-col size="11" class="ion-text-center">
            <ion-text color="primary" v-if="!hasSelected"
              ><p class="title">Choose Bank</p></ion-text
            >
            <ion-text color="primary" v-if="hasSelected && !hasSetAccount"
              ><p class="title">New USD Recipient</p></ion-text
            >
            <ion-text color="primary" v-if="hasSetAccount"
              ><p class="title">{{ accountHolder }}</p></ion-text
            >
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <!--SEARCHC FOR BANK-->
        <ion-searchbar
          value=""
          show-clear-button="always"
          placeholder="Search for a bank"
          :debounce="1000"
          @ionChange="filterBank($event)"
          class="searchbar"
          v-if="!hasSelected"
        ></ion-searchbar>

        <ion-list v-if="!hasSelected">
          <ion-item v-for="result in results" v-bind:key="result.key">
            <ion-label @click="selectBank(result)">{{
              result
            }}</ion-label></ion-item
          >
        </ion-list>

        <!--ENTER ACCOUNT DETAILS SECTION-->
        <v-form v-if="hasSelected && !hasSetAccount">
          <ion-row class="login-form">
            <ion-col size="12">
              <ion-label>Bank</ion-label>
              <ion-input
                placeholder=""
                type="text"
                inputmode="text"
                :value="this.selection"
                name="bankName"
                required
                enterkeyhint="next"
                pattern="/^[a-zA-Z]/"
              ></ion-input>
            </ion-col>
            <ion-col size="12">
              <ion-label>Account Holder</ion-label>
              <ion-input
                placeholder="Enter Name on Account"
                type="text"
                value=""
                v-model="accountHolder"
                inputmode="text"
                name="accountHolder"
                required
                enterkeyhint="next"
              ></ion-input>
            </ion-col>
            <ion-col size="12">
              <ion-label>Account Number</ion-label>
              <ion-input
                placeholder="Enter Account Number"
                type="text"
                v-model="accountNumber"
                value=""
                inputmode="text"
                name="accountNumber"
                required
                enterkeyhint="next"
                minlength="10"
                maxlength="12"
              ></ion-input>
            </ion-col>
            <ion-col class="next-btn" size="12"
              ><ion-button
                size="medium"
                expand="block"
                color="primary"
                class="signin ion-text-capitalize"
                @click="proceedToAmount"
                >Next</ion-button
              ></ion-col
            >
          </ion-row>
        </v-form>
      </div>

      <!--ENTER AMOUNT SECTION-->
      <ion-footer class="ion-padding trx-footer" v-if="hasSetAccount">
        <div id="trx-container" class="ion-text-center">
          <ion-badge color="dark" class="ion-padding"
            >USD Balance: $157.00</ion-badge
          >
          <div id="amount-input">
            <ion-text class="input-symbol">$</ion-text>
            <ion-input
              fill="solid"
              placeholder="Amount to transfer"
              type="number"
              inputmode="number"
              value=""
              name="amount"
              v-model="amount"
              required
              enterkeyhint="next"
              class="ion-text-left input-box ion-padding-start"
            ></ion-input>
            <ion-text class="input-currency">USD</ion-text>
          </div>

          <div id="narration-input">
            <ion-input
              fill="solid"
              placeholder="Narration (e.g Sent From People Trust)"
              class="ion-text-left narrate-box ion-padding-start"
            ></ion-input>
            <div>
              <ion-button class="narrate-symbol">{{
                accountHolder?.charAt(0).toUpperCase() || "O"
              }}</ion-button>
            </div>
            <ion-icon
              :icon="sendSharp"
              size="large"
              color="primary"
              class="send-icon"
              @click="sendToOTP"
            ></ion-icon>
          </div>
        </div>
      </ion-footer>
      <BottomMenu v-if="!hasSetAccount" />
    </ion-content>
  </ion-page>
  <EnterCode v-if="enterOTP" />
</template>

<script>
import {
  IonHeader,
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonInput,
  IonButton,
  IonBadge,
  IonFooter,
  IonIcon,
} from "@ionic/vue";

import { chevronBackOutline, sendSharp } from "ionicons/icons";

import BottomMenu from "@/components/BottomMenu.vue";
import EnterCode from "@/components/user/EnterCode.vue";

export default {
  name: "SameBankPay",
  components: {
    IonHeader,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    IonText,
    BottomMenu,
    IonInput,
    IonButton,
    IonBadge,
    IonFooter,
    EnterCode,
    IonIcon,
  },
  data() {
    return {
      chevronBackOutline,
      sendSharp,
      hasSelected: true,
      hasSetAccount: false,
      enterOTP: false,
      selection: "People Trust Bank",
      accountHolder: "",
      accountNumber: "",
      amount: 0,
      banks: [],
      results: [],
    };
  },
  methods: {
    goBack() {
      // history.go(-1);
      this.hasSelected = false;
    },
    proceedToAmount() {
      this.hasSetAccount = true;
    },
    filterBank(event) {
      const value = event.target.value;
      if (value === "") {
        this.results = [];
      }
      if (value !== "") {
        const query = value.toLowerCase();
        this.results = this.banks.filter(
          (bank) => bank.toLowerCase().indexOf(query) > -1
        );
      }
    },
    selectBank(selection) {
      this.selection = selection;
      this.hasSelected = true;
    },
    sendToOTP() {
      this.enterOTP = true;
    },
  },
  created() {
    fetch("../../assets/bank_names.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            this.banks.push(data[key]);
          }
        }
      });
  },
};
</script>

<style scoped>
.searchbar {
  --box-shadow: 1px 1px 1px 0.5px;
  --placeholder-color: var(--ion-color-medium);
}

.title {
  font-weight: 700;
}

.login-form {
  display: flex;
  text-align: left;
  padding: 10px;
}

ion-input {
  font-weight: 700;
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

.next-btn {
  margin-top: 20px;
}

#amount-input {
  display: grid;
  grid-template-columns: 45% 45% 10%;
  align-items: baseline;
}

.input-symbol {
  text-align: left;
  margin-left: 15px;
  grid-column: 1 / span 1;
  grid-row: 1 / span1;
  z-index: 100;
}

.input-box {
  grid-column: 1 / span 2;
  grid-row: 1 / span1;
  border-radius: 0px;
  background-color: var(--ion-color-medium);
}

/* .input-currency {
    font-weight: 700;
  } */

.trx-footer {
  position: absolute;
  bottom: 0 !important;
}

#narration-input {
  display: grid;
  grid-template-columns: 80% 10% 10%;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.narrate-box {
  border-radius: 0px;
  background-color: var(--ion-color-medium);
}

.narrate-symbol {
  --background: var(--ion-color-primary-contrast) !important;
  --border-radius: 50%;
  width: 40px;
  color: var(--ion-color-primary);
}
</style>
