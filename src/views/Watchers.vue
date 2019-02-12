<template>
  <div>
    <h1>Watchers</h1>
    <DistanceWatcher />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DistanceWatcher from '@/components/DistanceWatcher.vue';

export default Vue.extend({
  components: {
    DistanceWatcher,
  },
});
</script>
