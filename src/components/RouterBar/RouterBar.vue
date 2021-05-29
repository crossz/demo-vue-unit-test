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
      API: "/test/vuerouter?id=3521",
      results: null,
      id: 0
    }
  },
  created() {
    /**
    * Router unit testing 
    */
    console.log('----==== Foo.vue => created(): to load $route info.  ====----');
    console.log(this.$route.query) // {}
    console.log(this.$route.query.id) // undefined

  },
  computed: {
    error () {
      return this.username.trim().length < 7
    }
  },
  methods: {

    getRouterId() {
      this.$router.push('/test/vuerouter?id=100')
    },

    getSummaryListInfo() {
      let that = this;
      let url = this.API;

      // console.log(that)
      console.log(`----==== Foo.vue => getSummaryListInfo() ====----`);
      // console.log(that.$axios.get)
      // console.log(that.axios.get)

      that.axios
        // return that.$axios
        // return axios
        .get(url)
        .then(function(response) {
          // console.log(response)

          // 请求正确时执行的代码
          if (response.status === 200) {
            that.results = response.data;
          } else {
            that.pageNo = 1;
            that.$message({
              message: response.data.msg,
              type: "warning",
            });
          }
        })
        .catch(function(error) {
          console.log(error);
          // // 发生错误时执行的代码
          // that.pageNo = 1;
          // that.$message({
          //   message: "Server Error",
          //   type: "warning"
          // });
        });
    },
  }
}

</script>
