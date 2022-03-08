<template>
  <section class="produto-container">
    <div v-if="produtos.length > 0" class="produtos">
      <div v-for="(produto, index) in produtos" :key="index" class="produto">
        <router-link to="/">
          <img v-if="produto.fotos" :src="produto.fotos[0]" />
          <p class="preco">{{ produto.preco }}</p>
          <h2 class="titulo">{{ produto.nome }}</h2>
          <p>{{ produto.descricao }}</p>
        </router-link>
      </div>
      <produtos-paginar :paginacao="paginacao" />
    </div>
    <div v-else-if="produtos.length === 0">
      <p class="sem-resultados">Busca sem resultados.</p>
    </div>
  </section>
</template>

<script>
import ProdutosPaginar from "./ProdutosPaginar.vue";

export default {
  components: { ProdutosPaginar },
  data() {
    return {
      produtos: [],
      paginacao: {
        porPagina: 6,
        total: "",
      },
    };
  },
  computed: {
    url() {
      return this.$route.query;
    },
  },
  watch: {
    url() {
      this.carregarProdutos(this.url);
    },
  },
  methods: {
    carregarProdutos(params) {
      this.$axios
        .get("/produtos", {
          params: {
            _limit: this.paginacao.porPagina,
            ...params,
          },
        })
        .then((response) => {
          this.paginacao.total = Number(response.headers["x-total-count"]);
          this.produtos = response.data;
        });
    },
  },
  created() {
    this.carregarProdutos();
  },
};
</script>

<style scoped>
.produtos-contianer {
  max-width: 1000px;
  margin: 0 auto;
}
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  font-weight: bold;
  color: #e80;
}

.sem-resultados {
  text-align: center;
}
</style>
