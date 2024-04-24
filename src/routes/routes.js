import List from "../views/List.vue";
import Detail from "../views/Detail.vue";
import Checkout from "../views/Checkout.vue";

const routes = [
  { path: "/", name: "List", component: List },
  { path: "/detail/:id", name: "Detail", component: Detail, props: true },
  { path: "/checkout", name: "Checkout", component: Checkout },
];

export default routes;
