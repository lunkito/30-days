<template>
  <div>
    <p>
      <label for="km">Km</label>
      <input type="number" id="km" v-model="km" @change="onChange">
    </p>

    <p>
      <label for="m">M</label>
      <input type="number" id="m" v-model="m">
    </p>

    <p>{{ displayDirection }}</p>
    <p>{{ m }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'DistanceWatcher',
  data() {
    return {
      km: 0,
      m: 0,
      direction: 'increase'
    };
  },
  methods: {
    onChange() {
      console.log('onChange');
      console.log(typeof this.km);
    }
  },
  computed: {
    displayDirection(): string {
      const direction = this.direction === 'increase' ?
        'increasing':
        'decreasing';
      return `The values are ${direction}`;
    },
  },
  watch: {
    km() {
      // A INVESTIGAR: Cuando se lanza un wather, se lanza a continuacion el otro y luego el inicial. P ej: Si se lanza km() luego va m() y km()
      // Si añado los parametros km(old_value, new_value), entre las anteriores llamadas van cambiando de tipo entre string y number
      console.log('KM watcher');
      this.m = this.km * 1000;
    },
    m() {
      console.log('M watcher');
      this.km = this.m / 1000;
    },
  },
});
</script>


<style scoped>

/* Disable moz validation styles */
:not(output):-moz-ui-invalid {
  box-shadow: none;
}

</style>
