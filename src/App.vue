<template>
  <div id="app">
    <AcLogin v-if="!hasToken()" />
    <AcShowDevices v-if="hasToken()" />
  </div>
</template>

<script>
import AcLogin from './components/AcLogin';
import AcShowDevices from './components/AcShowDevices';

export default {
  name: 'app',
  components: {
    AcLogin,
    AcShowDevices
  },
  methods: {
    hasToken() {
      return !!this.$store.state.authentication.token;
    },
  },
};
</script>
