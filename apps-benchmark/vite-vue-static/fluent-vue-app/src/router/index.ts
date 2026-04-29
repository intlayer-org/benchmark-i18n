import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Blog from "../pages/Blog.vue";
import Careers from "../pages/Careers.vue";
import Contact from "../pages/Contact.vue";
import FAQ from "../pages/FAQ.vue";
import Pricing from "../pages/Pricing.vue";
import Products from "../pages/Products.vue";
import Settings from "../pages/Settings.vue";
import Team from "../pages/Team.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/en",
  },
  {
    path: "/:locale",
    component: Layout,
    children: [
      { path: "", component: Home },
      { path: "about", component: About },
      { path: "blog", component: Blog },
      { path: "careers", component: Careers },
      { path: "contact", component: Contact },
      { path: "faq", component: FAQ },
      { path: "pricing", component: Pricing },
      { path: "products", component: Products },
      { path: "settings", component: Settings },
      { path: "team", component: Team },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
