<template lang="html">
  <div class="">
    <div class="control">
      <h1 class="title">Found a puppeh? Tell us about it!</h1>
    </div>
    <form @submit.prevent="saveForm" class="form">

      <label for="puppy-name" class="label">Name</label>
      <p class="control">
        <input type="text" class="input" v-model="formValues.name" id="puppy-name">
      </p>

      <label for="puppy-age" class="label">Age</label>
        <p class="control">
        <input type="text" class="input" v-model="formValues.age" id="puppy-age">
        </p>

      <label for="puppy-sex" class="label">Sex</label>
        <p class="control">
          <span class="select">
            <select v-model="formValues.sex" id="puppy-sex">
              <option :value="''">Please choose one</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </span>
        </p>

      <label for="puppy-color" class="label">Color</label>
      <p class="control">
        <input type="text" class="input" v-model="formValues.color" id="puppy-color">
      </p>

      <label for="puppy-breed" class="label">Breed</label>
      <p class="control">
        <input type="text" class="input" v-model="formValues.breed" id="puppy-breed">
      </p>

      <label for="puppy-image" class="label">Submit a photo of your puppeh!</label>
        <p class="control">
          <input type="text" class="input" v-model="formValues.image_url" id="puppy-image">
        </p>

      <label for="puppy-description" class="label">Description</label>
      <p class="control">
        <textarea class="textarea" type="text" v-model="formValues.description" id="puppy-description"></textarea>
      </p>

      <p class="control">
        <a href="/" class="button">Back</a>
        <button class="button is-primary">Submit</button>
      </p>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name:'',
        age: '',
        sex: '',
        color: '',
        breed: '',
        image_url: '',
        description: '',
      }
    };
  },

  methods: {
    saveForm() {
      this.$emit('addPuppy', this.formValues);
    },
  },
};
</script>
