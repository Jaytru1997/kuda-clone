import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      // status: {
      //   blocker: {
      //     block: {
      //       title: "",
      //     },
      //   },
      //   canWithdraw: false,
      // },
      // balances: {
      //   main: {
      //     amount: 0,
      //     accType: "main",
      //   },
      //   savings: {
      //     amount: 0,
      //     accType: "savings",
      //   },
      //   borrow: {
      //     amount: 0,
      //     accType: "borrow",
      //   },
      // },
      // _id: "",
      // role: "customer",
      // email: "",
      // transactions: [],
      // cards: [],
      // accountNumber: "",
    },
    isUpdated: false,
  }),
  getters: {
    //   doubleCount: (state) => state.count * 2,
    getUserData: (state) => state.user,
    getMainBalance: (state) => state.user.balances.main.amount,
  },
  actions: {
    populateState(ctx) {
      this.user = ctx;
    },
    // increment() {
    //   this.count++;
    // },
  },
});
