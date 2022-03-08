<template>
  <form>
    <input
      v-model="busca"
      nome="busca"
      id="busca"
      type="text"
      placeholder="Buscar..."
    />
    <input
      type="submit"
      id="lupa"
      value="buscar"
      @click.prevent="buscarProduto"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    buscarProduto() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}
#busca {
  width: 100%;
  padding: 20px;
  border: none;
}

#busca:focus,
#busca:hover {
  transform: scale(1.1);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url(../assets/search.svg) no-repeat center center;
  border: none;
  text-indent: 150px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: none;
}
</style>
