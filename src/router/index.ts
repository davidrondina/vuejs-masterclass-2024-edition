import { createRouter, createWebHistory } from "vue-router";
import { h } from "vue";

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
    // Matches undefined routes under /projects route
    // {
    //   path: "/projects:catchAll(.*)*",
    //   name: "NotFound",
    //   component: h("p", { style: "color:red;" }, "404 project Not Found"),
    // },
    /**
     * This wildcard catches all undefined route
     *
     * Breakdown:
     * /:catchAll - matches any pattern in the root url
     * (.*) - regex to match anything
     * * - if this route pattern is repeated for any number of times
     *
     * This will match any route that doesn't match any of the above
     */
    {
      path: "/:catchAll(.*)*",
      name: "NotFound",
      // h is short for Hyperscript -- JS that produces HTML
      component: h("p", { style: "color:red;" }, "404 Not Found"),
    },
  ],
});

export default router;
