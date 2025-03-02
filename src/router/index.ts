import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  //  Web history enables HTML history mode -- Uses History API to handle navigation
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/views/ProjectsView.vue"),
    },
    {
      // Dynamic route
      // Matches any pattern that places an id in the url
      path: "/projects/:id",
      name: "single-project",
      component: () => import("@/views/SingleProjectView.vue"),
    },
  ],
});

export default router;
