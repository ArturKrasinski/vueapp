<style>

</style>
<template>
    <div class="wrapper">
        <minicart :items="minicartItems"></minicart>
        <wishlist :items="wishlistItems"></wishlist>
        <table>
            <tr>
                <td></td>
                <td v-for="(product, index) in productsWithAttributes" :key="index">
                    <product
                        :product="product"
                        @addToCart="addToCart($event)"
                        @addToWishlist="addToWishlist($event)"
                    ></product>
                </td>
            </tr>
            <tr v-for="(attribute, id) in attributes" :key="id">
                <td><b>{{attribute.name}}</b></td>
                <td v-for="(product, index) in productsWithAttributes" :key="index">
                    <span v-for="(attributeValue, index) in product.attributes[id]" :key="index">{{attributeValue}}</span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

import db from '../services/db'
import Minicart from './Minicart/Minicart'
import Wishlist from './Wishlist/Wishlist'
import Product from './Product/Product'

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
            minicartItems: [],
            wishlistItems: [],
            attributesIdValue: []
        }
    },
    computed: {
        productAttributesValues () {
            return this.attributesIdValue.map(attribute => {
                return attribute['.value'].split('|')
            })
        },
        productsWithAttributes () {
            return this.products.map(product => {
                return {
                    ...product,
                    attributes: product.attributes.map((attribute, index) => {
                        const attributesValues = attribute.split('|').map(id => {
                            return this.productAttributesValues[index][parseInt(id) - 1]
                        })

                        return attributesValues
                    })
                }
            })
        }
    },
    methods: {
        addToWishlist (payload) {
            console.log(payload)
        }
    }
}
</script>
