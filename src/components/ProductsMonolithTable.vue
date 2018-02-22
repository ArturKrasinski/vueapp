<style>

</style>
<template>
    <div>
        <div class="wrapper">
            <minicart></minicart>
            <wishlist :items="wishlistItems"></wishlist>
            <table>
                <tr>
                    <td></td>
                    <td v-for="(product, index) in productsList" :key="index">
                        <product
                            :product="product"
                            @addToCart="addToCart($event)"
                            @addToWishlist="addToWishlist($event)"
                        ></product>
                    </td>
                </tr>
                <tr v-for="(attribute, id) in attributesList" :key="id">
                    <td><b>{{attribute.name}}</b></td>
                    <td v-for="(product, index) in productsList" :key="index">
                        <span v-for="(attributeValue, index) in product.attributes[id]" :key="index">{{attributeValue}}</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

import db from '../services/db'
import Minicart from './Minicart/Minicart'
import Wishlist from './Wishlist/Wishlist'
import Product from './Product/Product'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('products')

export default {
    name: 'ProductsMonolithTable',
    components: {
        Minicart,
        Wishlist,
        Product
    },
    firebase: {
        products: db.ref('products'),
        attributes: db.ref('attributes'),
        attributesIdValue: db.ref('attributesIdValue')
    },
    data () {
        return {
            products: [],
            attributes: [],
            attributesIdValue: [],
            wishlistItems: []
        }
    },
    watch: {
        attributesIdValue (attributes) {
            const splited = attributes.map(attribute => {
                return attribute['.value'].split('|')
            })

            if (splited.length) {
                if (this.fetched) {
                    this.fetched.then(products => {
                        this.mergeProductsData(products, splited)
                    })
                } else {
                    this.fetched = new Promise((resolve, reject) => {
                        resolve(splited)
                    })
                }
            }
        },
        products (products) {
            if (products.length) {
                if (this.fetched) {
                    this.fetched.then(attributes => {
                        this.mergeProductsData(products, attributes)
                    })
                } else {
                    this.fetched = new Promise((resolve, reject) => {
                        resolve(products)
                    })
                }
            }
        },
        attributes (attributes) {
            this.assignAttributes(attributes)
        }
    },
    computed: {
        ...mapState({
            productsList: state => state.products,
            attributesList: state => state.attributes
        })
    },
    methods: {
        ...mapActions([
            'assignProducts',
            'assignAttributes'
        ]),
        mergeProductsData (products, attributes) {
            const result = products.map(product => {
                return {
                    ...product,
                    attributes: product.attributes.map((attribute, index) => {
                        const attributesValues = attribute.split('|').map(id => {
                            return attributes[index] ? attributes[index][parseInt(id) - 1] : null
                        })

                        return attributesValues
                    })
                }
            })

            this.assignProducts(result)
        },
        addToWishlist (payload) {
            console.log(payload)
        }
    }
}
</script>
