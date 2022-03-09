import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import service from "./service";
import paginaCarregando from "./components/PaginaCarregando.vue";

Vue.prototype.$axios = service;
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
