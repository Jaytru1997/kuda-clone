import { defineStore } from "pinia";
export const useSettingsStore = defineStore("settings", {
  state: () => ({
    url: {
      test: "http://localhost:5000",
      prod: "https://api-peopletrust.onrender.com",
    },
  }),
  getters: {
    //   doubleCount: (state) => state.count * 2,
    getUrl: (state) => state.url,
  },
  // actions: {},
});
