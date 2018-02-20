const OPEN_MINICART = 'OPEN_MINICART'
const CLOSE_MINICART = 'CLOSE_MINICART'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ADD_COUNT = 'ADD_COUNT'
const REMOVE_COUNT = 'REMOVE_COUNT'
const ADD_QTY = 'ADD_QTY'
const ADD_TOTAL = 'ADD_TOTAL'
const REMOVE_TOTAL = 'REMOVE_TOTAL'

export const types = {
    OPEN_MINICART,
    CLOSE_MINICART,
    ADD_ITEM,
    REMOVE_ITEM,
    ADD_COUNT,
    REMOVE_COUNT,
    ADD_QTY,
    ADD_TOTAL,
    REMOVE_TOTAL
}

export const mutations = {
    [OPEN_MINICART] (state) {
        state.expanded = true
    },
    [CLOSE_MINICART] (state) {
        state.expanded = false
    },
    [ADD_ITEM] (state, item) {
        state.items = [...state.items, item]
    },
    [REMOVE_ITEM] (state, sku) {
        state.items = state.items.filter(item => item.sku !== sku)
    },
    [ADD_COUNT] (state, count) {
        state.count += count
    },
    [REMOVE_COUNT] (state, count) {
        state.count -= count
    },
    [ADD_QTY] (state, payload) {
        state.items = state.items.map(item => {
            if (item.sku === payload.sku) {
                return { ...item, qty: item.qty + payload.qty }
            }
            return item
        })
    },
    [ADD_TOTAL] (state, count) {
        state.totals += count
    },
    [REMOVE_TOTAL] (state, count) {
        state.totals -= count
    }
}
