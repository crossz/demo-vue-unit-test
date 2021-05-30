import { expect } from 'chai'
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import VueRouter from 'vue-router';

// import NestedRoute from "@/components/RouterFoo/NestedRoute.vue"
import NestedRoute from "./NestedRoute.vue"

import App from './RouterBar.vue'
// import NestedRoute from "@/components/Router/NestedRoute.vue"

describe("== RouterBar.vue $route.query Tests Suite =>>", () => {
  /** 
   * localVue for testing
   */
  const localVue = createLocalVue()  
  localVue.use(VueRouter);

  // const NestedRoute = { template: '<div class="message"> Router id: {{this.$route.query.id}} </div>' }
  const routes = [{
    path: '/test/vuerouter', 
    name: 'testvuerouter',
    // component: resolve => require(['@/components/Router/NestedRoute.vue'], resolve)
    component: NestedRoute
  }]
  const router = new VueRouter({routes}); // ## Here the 'routes' can not be $route or route !!!!

  let res = require('../../mock/data/createBatchDetails.json');
  it('router unit tests', async () => {
    // const wrapper = shallowMount(Foo, {
    const wrapper = mount(App, {
      localVue,
      router,
      // mocks: {
      //   $route
      // }
      })
      const vm = wrapper.vm;

      // # Children route/component if not declared, will NOT work if added.
      // router.push('/test/vuerouter/childroute?id=200') // Wrong: 'childroute' must be declared in routes array.
      // router.push('/test/vuerouter?id=200') // OK
      // vm.$router.push('/test/vuerouter?id=200') // OK
      vm.getRouterId(); // OK

      await wrapper.vm.$nextTick();
      console.log(wrapper.find('.message').text());
      console.log(`    ----==== RouterBar.spec: wrapper.vm.$route.path: ${vm.$route.path} ====----`)
      console.log(`    ----==== RouterBar.spec: wrapper.vm.$route.query.id: ${vm.$route.query.id} ====----`)

      expect(wrapper.findComponent(NestedRoute).exists()).equal(true)
  
  })
  
})