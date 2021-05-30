<template>
  <div class="message">
    Nested Route. 
    <p> this.$route.query.id is: {{this.$route.query.id}}  VS this.id: {{this.id}} </p>
    <!-- <p> this.id is: {{this.id}} </p> -->
  </div>
</template>

<script>
export default {
  name: "NestedRoute",
  data () {
    return {
      message: 'Welcome to the Vue.js cookbook',
      username: '',
      id: 0
    }
  },
  created() {
    // /**
    // * Router unit testing 
    // */
    // console.log('    ----==== NestedRoute.vue => created(): to load $route info.  ====----');
    // console.log(this.$route.query) // {}
    // // console.log(this.$route.path) // {}
    // // console.log(this.$route.id) // undefined

    this.id = this.$route.query.id;
    // this.id = 123123;
  },

}
</script>