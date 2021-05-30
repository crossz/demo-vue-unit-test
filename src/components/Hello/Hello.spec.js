import { expect, assert } from "chai";
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import sinon from "sinon";


// # 1) for manually mocking http request by using $axios to global Vue.prototype
// import Util from '../../lib/util' // NOTE: THIS WILL AFFECT OTHER SPEC.JS as the global vue is polluted.
// Vue.prototype.axios = Util.ajax

// # 2) for Vue.use(VueAxios, axios) to install axios, and using 'axios' or '$http' later on.
// import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import Hello from "@/components/Hello/Hello.vue";
import Hello from "./Hello.vue";

describe("== Hello original demo Suite =>> ", () => {
  it("Hello Demo: ", () => {
    // render the component
    const wrapper = shallowMount(Hello);

    // should not allow for `username` less than 7 characters, excludes whitespace
    wrapper.setData({ username: " ".repeat(7) });

    // assert the error is rendered
    expect(wrapper.find(".error").exists()).equal(true);

    // update the name to be long enough
    wrapper.setData({ username: "Lachlan" });

    // assert the error has gone away
    expect(wrapper.find(".error").exists()).equal(true);
  });

  it("correctly sets the foobar value when created", () => {
    let foobar = "fooboo";
    // const ctor = Vue.extend(Hello);
    // const vm = new ctor({ propsData: { foobar } }).$mount();

    const wrapper = shallowMount(Hello, {
      propsData: { foobar },
    });
    const vm = wrapper.vm;

    assert.equal(vm.foobar, foobar);
    assert.include(vm.$el.textContent, `value specified of ${foobar}`);
  });
});

describe.skip("== Hello Sinon Tests Suite =>> ", () => {
  // Vue.prototype.$axios = Util.ajax;
  // let foobar = "fooboo";
  // const ctor = Vue.extend(Hello);
  // const vm = new ctor({ propsData: { foobar } }).$mount();


  it('Axios demo', (done) => {

    let res = {
      status: 200,
      data: [
        {
          "login": "mojombo",
          "id": 1,
          "node_id": "MDQ6VXNlcjE=",
          "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
          "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "site_admin": false
          },
          {
          "login": "defunkt",
          "id": 2,
          "node_id": "MDQ6VXNlcjI=",
          "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/defunkt",
          "html_url": "https://github.com/defunkt",
          "followers_url": "https://api.github.com/users/defunkt/followers",
          "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
          "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
          "organizations_url": "https://api.github.com/users/defunkt/orgs",
          "repos_url": "https://api.github.com/users/defunkt/repos",
          "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
          "received_events_url": "https://api.github.com/users/defunkt/received_events",
          "type": "User",
          "site_admin": false
          }
      ]
    }

    /** 
     * localVue for testing
     */
    const localVue = createLocalVue()  
    // localVue.prototype.$axios = Util.ajax
    const $axios = axios.create({
      baseURL: 'https://api.github.com',
      timeout: 50000
    })
    localVue.use(VueAxios, $axios)

    const wrapper = shallowMount(Hello, {
      localVue
    })
    const vm = wrapper.vm;

    /**
     * axios returns promise, which can be directly 'resolved' for mocking purpose.
     */
     const resolved = new Promise((r) => r(res));
    //  let axiosget = sinon.stub(vm.$axios, 'get')
     let axiosget = sinon.stub(vm.axios, 'get')
     axiosget.returns(resolved)

    

    // # 1) 1st expect 
    expect(vm.$data.results).to.be.null
    // done()

    // # 2) 2nd expect 
    vm.getData()
    
    setTimeout( () => {
        console.log(vm.$data.results)
        expect(vm.$data.results).to.have.length(2)
        
        done()
      }, 1500)
      


    // sinon.restore()
    // axiosget.restore()


  });










  // afterEach( () => {
  //   // vm.$axios.get.restore()
  //   // axiosget.restore() // ReferenceError: axiosget is not defined
  //   // sinon.restore()
  // })
});

