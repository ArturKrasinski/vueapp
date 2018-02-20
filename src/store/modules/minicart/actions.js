import { types } from './mutations'

const helpers = {
    calculateTotalValue (qty, price) {
        return qty * price
    }
}

export const actions = {
    toggleExpanded ({ commit, state }) {
        state.expanded === false ? commit(types.OPEN_MINICART) : commit(types.CLOSE_MINICART)
    },
    addToCart ({ commit, state }, item) {
        const { sku, qty, price } = item

        const existingModified = state.items.some(existingItem => {
            if (existingItem.sku === sku) {
                commit(types.ADD_QTY, { sku, qty })
                return true
            }
            return false
        })

        if (!existingModified) {
            commit(types.ADD_ITEM, item)
        }

        commit(types.ADD_COUNT, qty)
        commit(types.ADD_TOTAL, helpers.calculateTotalValue(qty, price))
    },
    removeFromCart ({ commit, state }, sku) {
        const item = state.items.find(item => item.sku === sku)
        const { qty, price } = item

        commit(types.REMOVE_ITEM, sku)
        commit(types.REMOVE_COUNT, qty)
        commit(types.REMOVE_TOTAL, helpers.calculateTotalValue(qty, price))
    }
}
