<template>
  <ion-footer :translucent="true" class="footer">
    <ion-grid class="footer-grid">
      <ion-row class="ion-justify-content-between ion-align-items-center">
        <ion-col
          size="auto"
          class="ion-text-center"
          :class="`${appRoutes.home.mode}`"
          ><router-link to="/authed/dashboard"
            ><ion-icon :icon="homeOutline" size="large"></ion-icon><br />
            Home</router-link
          ></ion-col
        >
        <ion-col
          size="auto"
          class="ion-text-center"
          :class="`${appRoutes.pay.mode}`"
          ><router-link to="/authed/pay"
            ><ion-icon
              :icon="sendOutline"
              size="large"
              class="rotate"
            ></ion-icon>
            <br />
            Pay</router-link
          ></ion-col
        >
        <ion-col
          size="auto"
          class="ion-text-center"
          :class="`${appRoutes.invest.mode}`"
          ><router-link to="/authed/invest"
            ><ion-icon :icon="statsChartOutline" size="large"></ion-icon>
            <br />
            Invest</router-link
          ></ion-col
        >
        <ion-col
          size="auto"
          class="ion-text-center"
          :class="`${appRoutes.cards.mode}`"
          ><router-link to="/authed/cards"
            ><ion-icon :icon="cardOutline" size="large"></ion-icon> <br />
            Cards</router-link
          ></ion-col
        >
        <ion-col
          size="auto"
          class="ion-text-center"
          :class="`${appRoutes.more.mode}`"
          ><router-link to="/authed/more"
            ><ion-icon :icon="appsOutline" size="large"></ion-icon> <br />
            More</router-link
          ></ion-col
        >
      </ion-row>
    </ion-grid>
  </ion-footer>
</template>

<script>
import { IonFooter, IonGrid, IonRow, IonCol, IonIcon } from "@ionic/vue";

import {
  appsOutline,
  cardOutline,
  homeOutline,
  sendOutline,
  statsChartOutline,
} from "ionicons/icons";

export default {
  name: "BottomMenu",
  components: {
    IonFooter,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
  },
  data() {
    return {
      appsOutline,
      cardOutline,
      homeOutline,
      sendOutline,
      statsChartOutline,
      appRoutes: {
        home: {
          mode: "inactive",
        },
        pay: {
          mode: "inactive",
        },
        invest: {
          mode: "inactive",
        },
        cards: {
          mode: "inactive",
        },
        more: {
          mode: "inactive",
        },
      },
    };
  },
  methods: {},
  created() {
    const currentRoute = this.$route.path;
    if (currentRoute.includes("dashboard")) {
      //   console.log(currentRoute);
      const activeSwitch = (target) => {
        this.appRoutes[target].mode = "active";
      };
      activeSwitch("home");
    } else if (currentRoute.includes("pay")) {
      const activeSwitch = (target) => {
        this.appRoutes[target].mode = "active";
      };
      activeSwitch("pay");
    } else if (currentRoute.includes("invest")) {
      const activeSwitch = (target) => {
        this.appRoutes[target].mode = "active";
      };
      activeSwitch("invest");
    } else if (currentRoute.includes("cards")) {
      const activeSwitch = (target) => {
        this.appRoutes[target].mode = "active";
      };
      activeSwitch("cards");
    } else if (currentRoute.includes("more")) {
      const activeSwitch = (target) => {
        this.appRoutes[target].mode = "active";
      };
      activeSwitch("more");
    }
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .footer-grid {
    padding: 0px 300px !important;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
.footer {
  position: fixed;
  top: 90%;
}

.rotate {
  transform: rotateZ(-45deg) translate(8px, 2px);
}

.active {
  color: var(--ion-color-primary);
}

.inactive {
  color: var(--ion-color-step-250);
}
</style>
