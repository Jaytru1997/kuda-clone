import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import DashboardPage from "../views/authed/DashboardPage.vue";
import PasscodePage from "../views/authed/PasscodePage.vue";
import SavingPage from "../views/authed/SavingPage.vue";
import BorrowPage from "../views/authed/BorrowPage.vue";
// import LoadingPage from "../components/LoadingPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: LoginPage,
  },
  {
    path: "/passcode",
    name: "PasscodePage",
    component: PasscodePage,
  },
  {
    path: "/authed/dashboard",
    name: "UserDashboard",
    component: DashboardPage,
  },
  {
    path: "/authed/dashboard/save",
    name: "SavingPage",
    component: SavingPage,
  },
  {
    path: "/authed/dashboard/borrow",
    name: "BorrowPage",
    component: BorrowPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
