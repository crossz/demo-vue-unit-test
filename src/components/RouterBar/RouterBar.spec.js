import { expect } from 'chai'
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import sinon from "sinon";

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router';

import App from './RouterBar.vue'
// import NestedRoute from "@/components/Router/NestedRoute.vue"


const factory = (values = {}) => {
  return shallowMount(Foo, {
    data () {
      return {
        ...values
      }
    }
  })
}



describe("Cross RouterBar $route.query Tests Suite =>>", () => {
  /** 
   * localVue for testing
   */
  const localVue = createLocalVue()  
  localVue.use(VueRouter);

  /** 
  * localVue for testing
  */
  // const localVue = createLocalVue()  
  const $axios = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 50000
  })
  localVue.use(VueAxios, $axios)
  
  const NestedRoute = { template: '<div class="message"> Router id: {{$route.id}} </div>' }
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

      /**
      * axios returns promise, which can be directly 'resolved' for mocking purpose.
      */
      const resolved = new Promise((r) => r(res));
      let axiosget = sinon.stub(vm.axios, 'get')
      axiosget.returns(resolved);

      // TODO: 
      // const vmMessage = sinon.spy(vm, '$message') // have to declare what is $message, like $axios in Hello.spec.js.
      // localVue.prototype.$message = sinon.spy();
      vm.$message = sinon.spy();


      vm.getSummaryListInfo();

      // # Children route/component if not declared, will NOT work if added.
      // router.push('/test/vuerouter/childroute?id=200') // Wrong: 'childroute' must be declared in routes array.
      // router.push('/test/vuerouter?id=200') // OK
      // vm.$router.push('/test/vuerouter?id=200') // OK
      vm.getRouterId(); // OK

      await wrapper.vm.$nextTick();
      console.log(wrapper.find('.message').text());
      console.log(`----==== wrapper.vm.$route.path: ${vm.$route.path} ====----`)
      console.log(`----==== wrapper.vm.$route.query.id: ${vm.$route.query.id} ====----`)

      expect(wrapper.findComponent(NestedRoute).exists()).equal(true)
  
  })
  
})