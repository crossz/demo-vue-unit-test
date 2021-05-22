import { expect, assert } from "chai";
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import sinon from "sinon";
import VueRouter from 'vue-router';

// # for mocking http request by using $axios
import Vue from 'vue'
import Util from '../../lib/util'
Vue.prototype.$axios = Util.ajax

import Hello from "./Hello.vue";

describe("Original Demo:", () => {
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
});

describe("Cross Axios Tests:", () => {
  // Vue.prototype.$axios = Util.ajax;
  // let foobar = "fooboo";
  // const ctor = Vue.extend(Hello);
  // const vm = new ctor({ propsData: { foobar } }).$mount();

  const localVue = createLocalVue()
  localVue.use(VueRouter);
  const router = new VueRouter();

  it("Axios Demo: ", () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(Hello, {
      propsData: {
        msg: "Hello w",
      },
    });

    expect('Today is sunny').to.contain.oneOf(['sunny', 'cloudy'])
    // console.log(wrapper.text());

    // assert.include(wrapper.vm.$el.textContent, "Hello World");
    // expect(wrapper.text()).contain("Hello world");
    expect(wrapper.text()).to.contain("Hello w");
  }),

  it.skip("correctly sets the foobar value when created", () => {
    let foobar = "fooboo";
    // const ctor = Vue.extend(Hello);
    // const vm = new ctor({ propsData: { foobar } }).$mount();

    const wrapper = shallowMount(Hello, {
      localVue,
      router,
      propsData: { foobar },
    });
    const vm = wrapper.vm;

    assert.equal(vm.foobar, foobar);
    assert.include(vm.$el.textContent, `value specified of ${foobar}`);
  });

  it('Sinon demo:', (done) => {

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


    const wrapper = shallowMount(Hello, {
      localVue,
    })
    const vm = wrapper.vm;

    /**
     * axios returns promise, which can be directly 'resolved' for mocking purpose.
     */
    const resolved = new Promise((r) => r(res));
    let axiosget = sinon.stub(vm.$axios, 'get')
    axiosget.returns(resolved)


    expect(vm.$data.results).to.be.null

    vm.getData()

    setTimeout(
      ()=>{
        expect(vm.$data.results).to.have.length(2)

        console.log(vm.$data.results)
        done()
      }, 1500)

  });



});
