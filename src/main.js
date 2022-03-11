import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./api";
import paginaCarregando from "./components/PaginaCarregando.vue";

Vue.prototype.$axios = api;
Vue.config.productionTip = false;

Vue.filter("numeroPreco", (valor) => {
  const preco = Number(valor);

  if (!isNaN(preco)) {
    return preco.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return 0;
  }
});

Vue.component("paginaCarregando", paginaCarregando);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
