<template lang="html">
  <div class="">
    <h2>{{puppy.name}}</h2>

    <button @click="$emit('updatePuppy', puppy, {adopted: true})" v-if="!puppy.adopted">Adopt Me</button>
    <h2 v-else>I'm Adopted</h2>
    <button @click="$emit('deletePuppy', puppy)">Delete Puppy</button>
  </div>
</template>

<script>
export default {
  props: ['apiUrl'],
  data() {
    return {
      puppy: {
      },
      id: '',
    };
  },

  mounted() {
    this.getData()
  },

  watch: {
    // call again the method if the route changes
    '$route': 'getData'
  },

  methods: {
  getData() {
    fetch (`${this.apiUrl}/${this.$route.params.puppy_id}`)
      .then ((res) => res.json() )
      .then ((puppy) => {this.puppy = puppy})
  }
  },
};
</script>
