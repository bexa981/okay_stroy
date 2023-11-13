import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OtherPage from "../views/OtherPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: "/other/:id",
      name: "other",
      component: OtherPage,
      props: true,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;