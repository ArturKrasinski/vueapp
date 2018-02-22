const ASSIGN_PRODUCTS = 'ASSIGN_PRODUCTS'
const ASSIGN_ATTRIBUTES = 'ASSIGN_ATTRIBUTES'

export const types = {
    ASSIGN_PRODUCTS,
    ASSIGN_ATTRIBUTES
}

export const mutations = {
    [ASSIGN_PRODUCTS] (state, products) {
        state.products = [...products]
    },
    [ASSIGN_ATTRIBUTES] (state, attributes) {
        state.attributes = [...attributes]
    }
}
