import Hello from 'Hello.vue'

function plugin (Vue) {
  Vue.component('HelloComp', Hello)
}

plugin.version = '1.0.0'

plugin.components = {Hello}

export default plugin
