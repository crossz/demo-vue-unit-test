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
  name: 'app',

  data () {
    return {
      message: 'Welcome to the Vue.js cookbook',
      username: '',
      id: 0
    }
  },
  computed: {
    error () {
      return this.username.trim().length < 7
    }
  },
  methods: {
    getRouterId() {
      this.$router.push('/test/vuerouter?id=100')
    }

  }
}

</script>
