<template>
    <div class="wrapper">
        <minicart :items="minicartItems"></minicart>
        <wishlist :items="wishlistItems"></wishlist>
        <table class="main-table">
            <tr>
                <td class="main-table_title-col"></td>
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
                            return this.productAttributesValues[index] ? this.productAttributesValues[index][parseInt(id) - 1] : null
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

<style>
    .image-wrapper {
        padding: 12px 0;
        margin: 0 10px;
        text-align: center;
        border-bottom: dashed 1px rgba(255, 255, 255, 0.1);
    }
    .card {
        width: 250px;
    }
    .card__title{
        font-weight: bold;
        font-size: 1.8em;
        padding-top: 12px;
        padding-bottom: 12px;
        margin: 0;
    }
    .main-table tr:nth-child(2n + 1) td:not(:first-child){
        background: rgba(0,0,0, 0.2);
    }
    .main-table td {
        padding: 5px;
    }
    .main-table tr:nth-child(2n + 1) td:first-child{
        white-space: nowrap;
        padding-right: 10px;
    }
</style>