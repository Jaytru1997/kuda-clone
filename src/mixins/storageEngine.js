import { Drivers, Storage } from "@ionic/storage";

export default {
  async created() {
    const storage = new Storage({
      name: "__peopletrustdb",
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    });
    await storage.create();
    console.log(storage);
  },
};
