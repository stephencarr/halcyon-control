<template>
  <div>
    <h1>Devices</h1>
  </div>
</template>
<script>
import apiMixin from '../mixins/apiMixin';
export default {
  name: 'AcShowDevices',
  mixins: [apiMixin],
  created() {
    this.fetchDevices();
  },
};
</script>
<style scoped></style>
