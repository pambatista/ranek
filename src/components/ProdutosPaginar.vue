<template>
  <ul>
    <li v-for="pagina in paginas" :key="pagina">
      <router-link :to="{ query: query(pagina) }">
        {{ pagina }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["paginacao"],
  computed: {
    paginas() {
      const current = Number(this.$route.query._page);
      const total = this.paginasTotal;
      const range = 9;
      const offset = Math.ceil(range / 2);
      const pageArray = [];

      for (let i = 1; i <= total; i++) {
        pageArray.push(i);
      }

      pageArray.splice(0, current - offset);
      pageArray.splice(range, total);

      return pageArray;
    },
    paginasTotal() {
      const total = this.paginacao.total / this.paginacao.porPagina;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },
};
</script>

<style scoped>
ul {
  grid-column: 1 / -1;
}
li {
  display: inline-block;
}
li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}
li a:hover,
li a.router-link-exact-active {
  background: #87f;
  color: #fff;
}
</style>
