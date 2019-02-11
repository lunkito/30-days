<template>
  <div>
    <CustomForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomForm from '@/components/CustomForm.vue';

@Component({
  components: {
    CustomForm,
  },
})
export default class Form extends Vue {}
</script>
