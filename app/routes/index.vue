<template lang="html">
  <div class="">
  <h2>Is this working?</h2>

  <table class="table">
    <thead>
      <th>
        Name
      </th>
      <th>
        Age
      </th>
      <th>

      </th>
    </thead>
    <tbody>
      <tr v-for="puppy in puppies">
        <td>
          {{puppy.name}}
        </td>
        <td>
          {{puppy.age}}
        </td>
        <td>
          <router-link :to=" { name: 'detail', params: { id: puppy.id } }">
            Read more.
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  props: ['puppies'],
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
