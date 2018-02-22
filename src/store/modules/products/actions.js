import { types } from './mutations'

export const actions = {
    assignProducts ({ commit }, products) {
        commit(types.ASSIGN_PRODUCTS, products)
    },
    assignAttributes ({ commit }, attributes) {
        commit(types.ASSIGN_ATTRIBUTES, attributes)
    }
}
