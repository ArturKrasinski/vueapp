export default {
    state: {
        products: []
    },
    mutations: {
        initData (state, payload) {
            state.products = payload
        }
    }
}
