<template lang="html">
  <div class="">
    <div class="card is-fullwidth">
    <div class="card-image">
      <figure class="image is-4by3">
       <img :src="puppy.image_url">
    </figure>
    <div class="card-content">
      <p class="title is-5">{{puppy.name}}</p>
      <div class="content">
        <p>Age: {{puppy.age}}</p>
        <p>Sex: {{puppy.sex}}</p>
        <p>Color: {{puppy.color}}</p>
      <p>Breed: {{puppy.breed}}</p>
      <p>About Me: {{puppy.description}}</p>
      </div>
    </div>
</div>

  <footer class="card-footer">
    <button @click="$emit('updatePuppy', puppy, {adopted: true})" v-if="!puppy.adopted" class="card-footer-item button is-primary">Adopt Me </button>
    <div class="notification is-success card-footer-item" v-else >I've been adopted!</div>
    <button @click="$emit('deletePuppy', puppy)" class="card-footer-item button is-primary" v-if="!puppy.adopted">Delete Puppy</button>
  </footer>
  </div>
  </div>
</template>

<script>
export default {
    props: ['apiUrl'],
    data() {
        return {
            puppy: {},
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
            fetch(`${this.apiUrl}/${this.$route.params.puppy_id}`)
                .then((res) => res.json())
                .then((puppy) => {
                    this.puppy = puppy
                })
        }
    },
};
</script>
