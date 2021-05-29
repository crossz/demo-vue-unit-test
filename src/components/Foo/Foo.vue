<template>
  <div>
    <div id="foo">
      {{ message }}
      <router-view />
    </div>
    Enter your username: <input v-model="username">
    <div
      v-if="error"
      class="error"
    >
      Please enter a username with at least seven letters.
    </div>

  </div>
</template>

<script>
export default {
  name: 'Foo',

  data () {
    return {
      message: 'Welcome to the Vue.js cookbook',
      username: '',
      API: "/test/vuerouter?id=3521",
      results: null,
      id: 0
    }
  },

  computed: {
    error () {
      return this.username.trim().length < 7
    }
  },
  methods: {

  }
}

</script>
