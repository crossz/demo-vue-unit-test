import { expect } from 'chai'
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import sinon from "sinon";

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router';

// import Foo from '@/components/Foo/Foo'
import Foo from './Foo.vue'

const factory = (values = {}) => {
  return shallowMount(Foo, {
    data () {
      return {
        ...values
      }
    }
  })
}

describe.skip('Foo', () => {
  it('renders a welcome message', () => {
    const wrapper = factory()

    expect(wrapper.find('.message').text()).equal("Welcome to the Vue.js cookbook")
  })

  it('renders an error when username is less than 7 characters', () => {
    const wrapper = factory({ username: ''  })

    expect(wrapper.find('.error').exists()).equal(true)
  })

  it('renders an error when username is whitespace', () => {
    const wrapper = factory({ username: ' '.repeat(7) })

    expect(wrapper.find('.error').exists()).equal(true)
  })

  it('does not render an error when username is 7 characters or more', () => {
    const wrapper = factory({ username: 'Lachlan'  })

    expect(wrapper.find('.error').exists()).equal(false)
  })
})


describe("Cross VueRouter Tests Suite =>>", () => {
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
  
  const $route = {
    path: '/batchDetail/list'
  }
  const router = new VueRouter($route);

  let res = require('../../mock/data/createBatchDetails.json');
  it('router unit tests', () => {
    const wrapper = shallowMount(Foo, {
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

      // console.log(wrapper.vm.getSummaryListInfo())
      // console.log(aaa)


 
  
    console.log(`----==== wrapper.vm.$route.path: ${vm.$route.query.id} ====----`)
  
  })
  
})