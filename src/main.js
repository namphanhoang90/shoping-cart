import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import App from "./App.vue";
import routes from "./routes/routes";
import productStoreConfig from "./store/productStoreConfig";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const productStore = createStore(productStoreConfig);

const app = createApp(App);
app.use(router);
app.use(productStore);
app.mount("#app");
