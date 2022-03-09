<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">E-mail</label>
      <input name="email" id="email" v-model="login.email" type="email" />
      <label for="senha">Senha</label>
      <input name="senha" id="senha" v-model="login.senha" type="password" />
      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
    </p>
    <login-criar />
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue";

export default {
  components: { LoginCriar },
  name: "LoginView",
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    logar() {
      this.$store.dispatch("getUsuario", this.login.email);
      this.$router.push("/usuario");
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

label {
  margin-bottom: 5px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 20px 0;
}

.perdeu:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
