<template>
  <div>
    <h2>Lyfecycle works</h2>
    <pre>
      Name: {{ name }}
      Username: {{ userResponse.username }}
      Email: {{ email }}
      Company: {{ company }}
      Company name: {{ company.name }}
      Company catchPhrase: {{ company.catchPhrase  }}
    </pre>
    <input v-model="userResponse.username" type="text">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LifecycleHooks extends Vue {

  public name: string | null = null;
  public email: string | null = null;
  public company: { name: string; catchPhrase: string; } | {} = {};
  public userResponse = {};

  public created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.updateUserData(users))
      .catch(err => console.log(err));
  }

  private updateUserData(users: any[]) {
    const user = this.selectRandomUser(users);

    // Para añadir propiedades a data y que sean reactivas, se tienen que AÑADIR a un objeto ya existente en data con Vue.set
    Object.keys(user).forEach(key => {
      this.componentHasProperty(user, key) ?
        this.$data[key] = user[key] :
        Vue.set(this.userResponse, key, user[key]);
    });
  }

  private selectRandomUser(users: any[]) {
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  }

  private componentHasProperty(user: any, key: string) {
    return user.hasOwnProperty(key) && Object.keys(this.$data).includes(key);
  }

}
</script>


<style>

</style>