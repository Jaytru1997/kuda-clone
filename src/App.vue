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
    const u_id = this.decryptData(await storage.get("u_id"));
    const token = this.decryptData(await storage.get("u_token"));
    if (await authStatus) {
      const url = this.settingsStore.url.test;
      const response = await fetch(`${url}/users/${u_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      // console.log(data.data);
      const encrypted_id = this.encryptData(await data.data._id);
      data.data._id = await encrypted_id;
      const encrypted_token = this.encryptData(await data.token);
      await storage.set("token", encrypted_token);
      // this.userStore.populateState(await data.data);
      this.userStore.$patch({ user: await data.data });
      // console.log(this.userStore);
    }
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
