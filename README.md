# vue-unit-test-template

## What we do here
1. original default vue unit test, by using @vue/cli@4.5.12(manually) to create project with unit tests.

    'mocha-chai' is selected while not 'jest', which will be replaced later on.
    
    > `"test:unit": "vue-cli-service test:unit"` to config the command.

2. official demos work, see: https://vue-test-utils.vuejs.org/ and https://vuejs.org/v2/cookbook/unit-testing-vue-components.html

3. sinon works as stub to mock axios.get().

4. webpack.config.js mode

5. localVue for testing scope, no poluting to global Vue.

- [x] Test for vue-router: 1st step: simple install router with dummy `this.$route.query` available.
- [x] Test for sinon.spy() for `$message`. which involed in nested if-else depending on 'responds' from http request.


- [ ] change a webpack based vue project into vue-service and @vue-cli supported

- [ ] Test for vuex

- [ ] Jest mode


----

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
