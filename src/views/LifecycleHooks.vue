<template>
  <div>
    <h2>Lyfecycle works</h2>
    <pre>
      Name: {{ name }}
      Email: {{ email }}
      Company: {{ company }}
      Company name: {{ company.name }}
      Company catchPhrase: {{ company.catchPhrase  }}
    </pre>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LifecycleHooks extends Vue {

  public name: string | null = null;
  public email: string | null = null;
  public company: { name: string; catchPhrase: string; } | {} = {};

  public created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const randomIndex = Math.floor(Math.random() * users.length);
        const user = users[randomIndex];

        // Esto AÑADE propiedades a data
        for (const key in user) {
          if (user.hasOwnProperty(key)) {
            this.$data[key] = user[key];
          }
        }

        console.log(this.$data);
        
      })
      .catch(err => console.log(err));
  }
}
</script>


<style>

</style>
