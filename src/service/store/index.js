import Store from 'Plugins/store'
import actions from './common/actions.js'
import moduleA from './components/moduleA.js'
import moduleB from './components/moduleB.js'

export default {
  install() {
    Store.registerModule(['pageA'], {
      actions,
      modules: {
        moduleA,
        moduleB
      },
      namespaced: true
    })
  },
  uninstall() {
    Store.unregisterModule(['pageA'])
  }
}
