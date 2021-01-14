<template>
  <div>
    <form @submit="submit">
      <input type="text" v-model="username" name="username" />
      <input type="password" v-model="password" name="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import apiMixin from '../mixins/apiMixin';
export default {
  name: 'AcLoginForm',
  mixins: [apiMixin],
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      const newAuthenticateObj = {
        username: this.username,
        password: this.password,
      };
      this.authenticate(newAuthenticateObj);
    },
  },
};
</script>
<style scoped></style>
