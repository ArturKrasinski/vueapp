import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'
import minicart from './modules/minicart/state'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        products: products,
        minicart: minicart
    }
})

export default store
