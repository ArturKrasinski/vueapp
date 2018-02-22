import { mutations } from './mutations'
import { actions } from './actions'

export default {
    namespaced: true,
    state: {
        products: [],
        attributes: []
    },
    mutations: mutations,
    actions: actions
}
