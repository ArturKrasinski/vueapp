import { mutations } from './mutations'
import { actions } from './actions'

export default {
    namespaced: true,
    state: {
        expanded: false,
        count: 0,
        items: [],
        totals: 0
    },
    mutations,
    actions
}
