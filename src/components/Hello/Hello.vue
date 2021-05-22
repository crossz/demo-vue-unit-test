<template>
  <div>
    <input v-model="username" />
    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div id="hello">
      <div>
        <!-- <h1>Hello World</h1> -->
        <h1>Hello World</h1>
        <h1> {{ msg }} </h1>
        <p>
          This is a Vue.js component that has a parameter named 'foobar' with a
          value specified of {{ foobar }}. results in data(): {{ results }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// ## test jsconfig.json
// import {} from "@/components/HelloWorld.vue"

export default {
  name: "Hello",
  props: {
    foobar: String,
    msg: String,
  },
  data() {
    return {
      username: "",
      API: '/users',
      results: null
    };
  },
  computed: {
    error() {
      return this.username.trim().length < 7
        ? "Please enter a longer username"
        : "";
    },
  },


  created () {
    // this.getData()

    setTimeout(() => {
      this.getData()
    }, 1500)
  },
  methods: {
     getData() {
       let that = this;
       let url = this.API

        that.$axios
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
              type: "warning"
            });
          }
        })
        .catch(function(error) {
          console.log(error)
          // // 发生错误时执行的代码
          // that.pageNo = 1;
          // that.$message({
          //   message: "Server Error",
          //   type: "warning"
          // });
        });
    }
  }


};
</script>
