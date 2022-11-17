import { createRouter, createWebHistory } from "vue-router";

const TrendingMovies = () => import("../views/TrendingMovies.vue");

const routes = [
  { path: "/", name: "TrendingMovies", component: TrendingMovies },
  {
    path: "/movies",
    name: "MovieList",
    component: () => import("../views/CategoryMovies.vue"),
  },
  {
    path: "/wishlist",
    name: "MovieWishlist",
    component: () => import("../views/WishlistMovies.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
