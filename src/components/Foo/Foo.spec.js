import { expect } from 'chai'
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";

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

  
  const $route = {
    path: '/some/path?id=100'
  }
  const router = new VueRouter();

  const wrapper = shallowMount(Foo, {
    localVue,
    router,
    // mocks: {
    //   $route
    // }
  })

  console.log(`----==== wrapper.vm.$route.path: ${wrapper.vm.$route.path} ====----`)
  


})