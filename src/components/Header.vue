<template>
  <ion-header>
    <ion-grid>
      <ion-row class="ion-align-items-center ion-justify-content-between">
        <ion-icon
          :icon="chevronBackOutline"
          size="medium"
          color="primary"
          @click="goBack"
        ></ion-icon>
        <!-- </ion-toolbar> -->
        <img src="../assets/question.png" alt="" class="question-mark" />
      </ion-row>
    </ion-grid>
  </ion-header>
</template>

<script>
import { IonHeader, IonIcon } from "@ionic/vue";
import { chevronBackOutline } from "ionicons/icons";

export default {
  name: "HeaderPage",
  components: {
    IonHeader,
    IonIcon,
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
  mounted() {},
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  ion-header {
    /* display: none; */
    padding: 0px 300px !important;
    box-shadow: 6px 13px 3px -4px rgba(230, 230, 230, 0.33);
  }
}

ion-header {
  /* display: none; */
  padding: 10px 0px !important;
}

.question-mark {
  width: 24px;
}
</style>
