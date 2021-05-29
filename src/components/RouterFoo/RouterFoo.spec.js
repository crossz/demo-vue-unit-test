import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import { expect } from 'chai'
import VueRouter from "vue-router"
// import NestedRoute from "@/components/RouterFoo/NestedRoute.vue"
import NestedRoute from "./NestedRoute.vue"

import App from "./RouterFoo.vue"
// import routes from "./routes.js"
const routes = [
  { path: "/nested-route/abc", component: NestedRoute }
]

describe("Cross RouterFoo router.push() test Suite =>>", () => {
  it("renders a child component via routing", async () => {
    const localVue = createLocalVue()
    localVue.use(VueRouter)

    const router = new VueRouter({ routes })
    // const wrapper = shallowMount(App, { // shallowMount will not work for nested route.
    const wrapper = mount(App, { 
      localVue,
      router
    })

    router.push("/nested-route/abc")
    await wrapper.vm.$nextTick()
    console.log(wrapper.find('.message').text());

    // expect(wrapper.findComponent(NestedRoute).exists()).toBe(true)
    expect(wrapper.findComponent(NestedRoute).exists()).equal(true)
  })
})