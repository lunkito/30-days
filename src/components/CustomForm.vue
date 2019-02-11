<template>
  <form @submit.prevent="onSubmit">
    <div class="form__field">
      <label for="name">Name</label>
      <input id="name" v-model.trim="name" type="text">
    </div>

    <div class="form__field">
      <label for="something">Subject</label>
      <select id="something" v-model="subject">
        <option disabled value="">Please select one</option>
        <option :value="subject.name" v-for="subject in subjects" :key="subject.id">{{ subject.name }}</option>
      </select>
    </div>

    <div class="form__field">
      <input type="checkbox" id="terms" v-model="termsAndConditions">
      <label for="terms">I agree to the terms and conditions</label>
    </div>

    <div class="form__field">
      <p>Are you interested in Vue?</p>
      <input type="radio" v-model="question" id="yes" value="true">
      <label for="yes">Yes</label>

      <input type="radio" v-model="question" id="no"  value="false">
      <label for="no">No</label>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CustomForm extends Vue {

// Data
  public name = '';
  public alert = '';
  public subjects = [
      { id: 1, name: 'Engineer' },
      { id: 2, name: 'Biology' },
      { id: 3, name: 'Other...' },
    ];
  public subject = '';
  public termsAndConditions = false;
  public question = true;

// Lifecycle hooks
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const randomIndex = Math.floor(Math.random() * users.length)
        this.name = users[randomIndex].name;
      })
      .catch(err => console.log(err))
  }

  // Methods
  public onSubmit() {
    this.alert = this.name;
  }

  // Computed property
  public get nameAndSubject() {
    return `${this.name} ${this.subject}`;
  }
}
</script>

<style scoped>
.form__field {
  margin: 24px;
}
</style>
