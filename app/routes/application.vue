<template lang="html">
  <div class="">

      <nav class="nav">
        <div class="nav-left">
          <router-link to="/" class="nav-item is-brand">
            Puppehs
          </router-link>
        </div>

        <div class="nav-center">
          <router-link to="/" class="nav-item">
            All Puppies
          </router-link>
          <router-link to="/new" class="nav-item">
            Add Puppy
          </router-link>
        </div>
      </nav>

  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <nav class="panel">
            <p class="panel-heading">
              Adopt a puppeh!
            </p>
            <div class="panel-block" v-for="puppy in puppies">
              <div class="media">
                <div class="media-left">
                  <p class="image is-64x64">
                    <img :src="puppy.image_url">
                  </p>
                </div>
                <div class="media-right">
                  <h2>{{ puppy.name }}</h2>
                  <h3>
                    <router-link :to=" { name: 'detail', params: { id: puppy.id } }">
                      Read more.
                    </router-link>
                     </h3>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div class="column is-8">
          <router-view
            v-bind:apiUrl= "apiUrl"
            v-bind:puppies= "puppies"
            @addPuppy="addPuppy"
            >

          </router-view>
        </div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
import Index from './index.vue';
export default {
    data() {
        return {
          apiUrl: 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/stephanie',
          puppies: [],
        };
    },

    mounted () {
      this.getData()
    },

    methods: {
      getData () {
        fetch(this.apiUrl)
        .then ((res) => res.json() )
        .then ((puppyData) => {
          this.puppies = puppyData
        });
      },

      addPuppy(input) {
        fetch(this.apiUrl, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(input),
        })
        .then((r) => r.json())
        .then((addPuppy) => {
          this.puppies = [...this.puppies, addPuppy];

          this.$router.push({ name: 'index' });
        })
      }

    },
};
</script>
