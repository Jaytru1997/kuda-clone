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
  data() {
    return {
      count: 0,
      userRetreived: true,
    };
  },
  mixins: [encrypt],
  methods: {
    async fecthUser(url, u_id, token) {
      return await fetch(`${url}/users/${u_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // return response;
    },
  },
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
      let response = await this.fecthUser(url, u_id, token);

      if (response.status >= 400 && this.count < 4) {
        // eslint-disable-next-line no-unused-vars
        this.count++;
        response = await this.fecthUser(url, u_id, token);
      }
      if (this.count >= 4) {
        // location.reload();
        this.userRetreived = false;
      }

      if (response.status === 200) {
        const data = await response.json();
        const encrypted_id = this.encryptData(await data.data._id);
        data.data._id = await encrypted_id;
        this.userStore.$patch({ user: await data.data });
        this.userStore.$patch({ isUpdated: true });
      }
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
