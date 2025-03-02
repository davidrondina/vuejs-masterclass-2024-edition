import { createRouter, createWebHistory } from "vue-router/auto";
import { routes } from "vue-router/auto-routes";

const router = createRouter({
  //  Web history enables HTML history mode -- Uses History API to handle navigation
  history: createWebHistory(import.meta.env.BASE_URL),
  /**
   * When using unplugin-vue-router, the default folder name that the router uses for
   * file-based routing is "pages". Therefore, we need to change the folder name "views" to
   * "pages".
   */
  routes, // This is an array of routes that unplugin will generate

  /**
   * When npm run dev is run for the first time  after using unplugin-vue-router, it creates a file called
   * typed-router.d.ts that declares all the types for our routes.
   *
   * It scans the "pages" directory and declares types for them.
   */
});

export default router;
