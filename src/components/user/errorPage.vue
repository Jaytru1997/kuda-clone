<template>
  <ion-card class="ion-padding ion-text-center card-div">
    <ion-card-content class="card">
      <ion-icon :icon="closeCircleSharp" color="danger" size="large"></ion-icon>
      <ion-text class="message">{{ message }}</ion-text>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonIcon, IonText } from "@ionic/vue";
import { closeCircleSharp } from "ionicons/icons";

export default {
  name: "ErrorPage",
  props: ["message"],
  components: { IonCard, IonCardContent, IonIcon, IonText },
  data() {
    return {
      closeCircleSharp,
    };
  },
};
</script>

<style scoped>
.card-div {
  outline-width: 100vh;
  outline-style: solid;
  outline-color: rgba(0, 0, 0, 0.931);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 15%);
  height: 200px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  gap: 20px;
  font-weight: 600;
  font-size: 18px;
  color: var(--ion-color-danger);
}

#icon {
  width: 200px !important;
}
</style>
