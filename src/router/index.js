import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "HomePage",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: () => import("../views/RegisterPage.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/passcode",
    name: "PasscodePage",
    component: () => import("../views/authed/PasscodePage.vue"),
  },
  {
    path: "/authed/dashboard",
    name: "UserDashboard",
    component: () => import("../views/authed/DashboardPage.vue"),
  },
  {
    path: "/authed/dashboard/save",
    name: "SavingPage",
    component: () => import("../views/authed/SavingPage.vue"),
  },
  {
    path: "/authed/dashboard/borrow",
    name: "BorrowPage",
    component: () => import("../views/authed/BorrowPage.vue"),
  },
  {
    path: "/authed/pay",
    name: "PaymentPage",
    component: () => import("../views/authed/PaymentPage.vue"),
  },
  {
    path: "/authed/pay/peopletrust",
    name: "SameBankPay",
    component: () => import("../views/authed/SameBankPay.vue"),
  },
  {
    path: "/authed/pay/otherbank",
    name: "OtherBankPay",
    component: () => import("../views/authed/OtherBankPay.vue"),
  },
  {
    path: "/authed/invest",
    name: "InvestPage",
    component: () => import("../views/authed/InvestPage.vue"),
  },
  {
    path: "/authed/more",
    name: "MorePage",
    component: () => import("../views/authed/MorePage.vue"),
  },
  {
    path: "/authed/more/account",
    name: "AccountDetails",
    component: () => import("../views/authed/AccountDetails.vue"),
  },
  {
    path: "/authed/more/account/:detail",
    name: "AccountDetail",
    component: () => import("../views/authed/AccountDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
