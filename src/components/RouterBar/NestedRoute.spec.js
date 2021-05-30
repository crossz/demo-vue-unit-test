import { expect, assert } from "chai";
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";

import App from "./NestedRoute.vue";

describe("== NestedRouter Vue Component Unit Test Suite =>>", () => {
  /**
   * localVue for testing
   */
  const localVue = createLocalVue();
//   localVue.use(VueRouter);

//   const routes = [{ path: "/route1/route2", component: App }];
//   const router = new VueRouter({ routes });

  it('offical demo', () => {
    const $route = {
        query: {
        path: '/some/path',
        id: 1
        }
      }

    const wrapper = shallowMount(App, {
        localVue,
        mocks: {
          $route
        }
      })

      console.log("Offical website demo print vm.$route", wrapper.vm.$route.query.path);

  })





  it("vm mock and pass $route query", () => {

    // const $route = routes
    const $route = {
        query: {
        path: '/some/path',
        id: 2
        }
      }
    const wrapper = shallowMount(App, {
    // const wrapper = mount(App, {
      localVue,
      mocks: {
        $route
      }
    });
    // const vm = wrapper.vm;

    console.log(wrapper.find('.message').text());
    assert.include(wrapper.vm.$el.textContent, `this.$route.query.id is: ${$route.query.id}`);

  });
});
