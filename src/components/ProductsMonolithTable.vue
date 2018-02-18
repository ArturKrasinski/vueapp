<style>

</style>
<template>
    <table>
        <tr>
            <td></td>
            <td v-for="(product, index) in productsWithAttributes" :key="index">
                <v-card>
                    <p class="image-wrapper">
                        <img :src="getProductImage(product.image)" height="200px">
                    </p>
                    <v-card-title primary-title>{{product.name}}
                    </v-card-title>
                    <v-card-actions>
                        <v-btn color="red">koszyk</v-btn>
                        <v-btn color="blue">wishlista</v-btn>
                    </v-card-actions>
                </v-card>
            </td>
        </tr>
        <tr v-for="(attribute, attributeId) in attributes" :key="attributeId">
            <td><b>{{attribute.name}}</b></td>
            <td v-for="(product, index) in productsWithAttributes" :key="index">
                <span v-for="(attributeValue, index) in product.attributesValuesArray[attributeId]" :key="index">{{attributeValue}}</span>
            </td>
        </tr>
    </table>
</template>

<script>
import { VCard, VCardTitle, VCardActions } from 'vuetify/es5/components/VCard'
import db from '../services/db'

let productImageDir = '/static/products/'

export default {
    name: 'ProductsMonolithTable',
    components: {
        VCard,
        VCardTitle,
        VCardActions
    },
    firebase: {
        attributes: db.ref('attributes')
    },
    data () {
        return {
            productsArray: [],
            attributesIdValueArray: [],
            productAttributesValues: []
        }
    },
    watch: {
        attributesIdValueArray (values) {
            this.productAttributesValues = values.map(attribute => {
                return attribute['.value'].split('|')
            })
        }
    },
    computed: {
        productsWithAttributes () {
            const products = this.productsArray

            this.productsArray.forEach(productData => {
                productData.attributesValuesArray = []

                const productAttributes = productData.attributes

                for (let attributeId in productAttributes) {
                    let productAttributesArray = productAttributes[attributeId].split('|')

                    productAttributesArray.forEach(productAttributesValuesId => {
                        productData.attributesValuesArray[attributeId] = productData.attributesValuesArray[attributeId] || []
                        productData.attributesValuesArray[attributeId].push(this.productAttributesValues[attributeId][productAttributesValuesId - 1])
                    })
                }
            })

            return products
        }
    },
    methods: {
        getProductImage (imageName) {
            return productImageDir + imageName
        }
    },
    mounted () {
        this.$bindAsArray('attributesIdValueArray', db.ref('attributesIdValue'))
        this.$bindAsArray('productsArray', db.ref('products'))
    }
}
</script>
