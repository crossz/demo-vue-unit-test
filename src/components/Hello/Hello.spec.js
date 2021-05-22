import { expect, assert } from "chai";
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import VueRouter from 'vue-router';
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

    it("correctly sets the foobar value when created", () => {
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
});
