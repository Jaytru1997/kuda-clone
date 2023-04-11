<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { Drivers, Storage } from "@ionic/storage";

import encrypt from "@/mixins/encrypt";

import { mapStores } from "pinia";
import { useSettingsStore } from "@/stores/settings";
import { useUserStore } from "@/stores/user";

export default {
  components: {
    IonApp,
    IonRouterOutlet,
  },
  mixins: [encrypt],
  async created() {
    const storage = new Storage({
      name: "__peopletrustdb",
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    });
    await storage.create();
    const authStatus = await storage.get("isAuthed");
    if (await authStatus) {
      const u_id = this.decryptData(await storage.get("u_id"));
      const token = this.decryptData(await storage.get("u_token"));
      const url = this.settingsStore.url.test;
      const response = await fetch(`${url}/users/${u_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      const encrypted_id = this.encryptData(await data.data._id);
      data.data._id = await encrypted_id;
      this.userStore.$patch({ user: await data.data });
      this.userStore.$patch({ isUpdated: true });
      // await storage.set("dataLoaded", true);
    }
    // window.addEventListener("beforeunload", ()=>{

    // })
  },
  computed: {
    ...mapStores(useUserStore, useSettingsStore),
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
}
</style>
