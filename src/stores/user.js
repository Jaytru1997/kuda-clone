import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    status: {
      blocker: {
        block: {
          title: "One Time Password",
        },
      },
      canWithdraw: false,
    },
    balances: {
      main: {
        amount: 150,
        accType: "main",
      },
      savings: {
        amount: 0,
        accType: "savings",
      },
      borrow: {
        amount: 0,
        accType: "borrow",
      },
    },
    _id: "63fe98a37f480186f1516e0e",
    role: "customer",
    email: "tonygavasofficial@gmail.com",
    transactions: [
      "640033149eadabde1eb59197",
      "640543c2078bf99f119b3cf4",
      "6405441f078bf99f119b3cfb",
      "6405498f81e0db58745707e8",
    ],
    cards: [],
    accountNumber: "PT1805941388",
  }),
  getters: {
    //   doubleCount: (state) => state.count * 2,
    getDetail: (state, detail) => state[detail],
  },
  actions: {
    // increment() {
    //   this.count++;
    // },
  },
});
