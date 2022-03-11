import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Produto from "../views/Produto.vue";
import Login from "../views/Login.vue";
import Usuario from "../views/usuario/Usuario.vue";
import UsuarioProdutos from "../views/usuario/UsuarioProdutos.vue";
import UsuarioCompras from "../views/usuario/UsuarioCompras.vue";
import UsuarioEditar from "../views/usuario/UsuarioEditar.vue";
import UsuarioVendas from "../views/usuario/UsuarioVendas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/produto/:id",
    name: "Produto",
    component: Produto,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/usuario",
    component: Usuario,
    children: [
      {
        path: "/",
        name: "Usuario",
        component: UsuarioProdutos,
      },
      {
        path: "editar",
        name: "Usuario Editar",
        component: UsuarioEditar,
      },
      {
        path: "compras",
        name: "Usuario compras",
        component: UsuarioCompras,
      },
      {
        path: "vendas",
        name: "Usuario vendas",
        component: UsuarioVendas,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0 });
  },
});

export default router;
