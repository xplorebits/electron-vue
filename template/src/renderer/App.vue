<template>
  <div id="app">
    {{#isEnabled plugins 'vue-router'}}
    <compnent :is="layout">
      <router-view></router-view>
    </compnent>
    {{else}}
    <landing-page></landing-page>
    {{/isEnabled}}
  </div>
</template>

<script>
{{#isEnabled plugins 'vue-router'}}
const defaultLayout = 'default'

{{else}}
  import LandingPage from '@/components/LandingPage'

{{/isEnabled}}
  export default {
    name: '{{ name }}', {{#isEnabled plugins 'vue-router'}}{{else}},{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
{{else}}
    components: {
      LandingPage
    },
{{/isEnabled}}
    computed: {
      layout () {
        return `${this.$route.meta.layout || defaultLayout}`
      }
    }
  }
</script>

<style lang="sass">
  @import "./styles/app"
  @import "./styles/layouts"
  /* CSS */
</style>
