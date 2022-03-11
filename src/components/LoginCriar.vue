<template>
  <section>
    <h2>Crie sua conta</h2>

    <transition mode="out-in">
      <button v-if="!criar" @click="criar = true" class="btn criar">
        Criar conta
      </button>
      <usuario-form v-else>
        <button class="btn btn-form" @click.prevent="criarUsuario">
          Criar Usuário
        </button>
      </usuario-form>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "./UsuarioForm.vue";
export default {
  components: { UsuarioForm },
  data() {
    return {
      criar: false,
    };
  },
  methods: {
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
        await this.$store.dispatch(
          "getUsuario",
          this.$store.state.usuario.email
        );
        this.$router.push("/usuario");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>
