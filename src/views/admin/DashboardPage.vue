<template>
  <ion-page v-if="isAuthed">
    <ion-content :fullscreen="true"></ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import encrypt from "@/mixins/encrypt";
import router from "@/router";
import { Drivers, Storage } from "@ionic/storage";

export default {
  name: "DashboardPageAdmin",
  components: {
    IonPage,
    IonContent,
  },
  data() {
    return {
      isLoading: true,
      isAuthed: null,
      storage: null,
    };
  },
  mixins: [encrypt],
  async created() {
    const storage = new Storage({
      name: "__peopletrustdb",
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    });
    await storage.create();
    this.storage = storage;
    const authStatus = await storage.get("isAuthed");
    const role = await storage.get("role");
    this.isAuthed = authStatus;
    if (!this.isAuthed && role !== "admin") {
      setTimeout(() => {
        router.push("/login");
      }, 500);
    }
  },
};
</script>

<style></style>
