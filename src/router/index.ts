import { createRouter, createWebHistory } from "vue-router";
import { HomeView, MoviesView, FavoritesView } from "../views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesView,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritesView,
    },
  ],
});

export default router;
