<template>
  <div>
    <div class="message">
      {{ message }}
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
      username: ''
    }
  },
  created() {
    /**
    * Router unit testing 
    */
    console.log('----==== Router testing in Foo.vue ====----');
    console.log(this.$route.query) // {}
    console.log(this.$route.query.id) // undefined


    if (this.$route.query.id) {
      this.id = this.$route.query.id;
      //  获取详情
      // this.getAccountDetails();
    }
  },
  computed: {
    error () {
      return this.username.trim().length < 7
    }
  }
}
</script>
