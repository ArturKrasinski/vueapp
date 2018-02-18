<style>

</style>
<template>
    <table>
        <tr>
            <td></td>
            <td v-for="product in productsWithAttributes">
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
        <tr v-for="(attribute, attributeId) in attributes">
            <td><b>{{attribute.name}}</b></td>
            <td v-for="product in productsWithAttributes">
                <span v-for="attributeValue in product.attributesValuesArray[attributeId]">{{attributeValue}}</span>
            </td>
        </tr>
    </table>
</template>

<script>
import {VCard, VCardTitle, VCardActions} from 'vuetify/es5/components/VCard'
import db from '../services/db'

let productImageDir = '/static/products/'

export default {
    name: 'ProductsMonolithTable',
    components: {
    },
    firebase: {
attributes: db.ref('attributes')
    },
    data () {
        return {
            productsArray: [],
            attributesArray: [],
            attributesIdValueArray: []
        }
    },
    computed: {
        productsWithAttributes () {
            let products = this.productsArray

            let attributesIdValueSplited = [];

            this.attributesIdValueArray.forEach((currentAttributeValues)=> {
                attributesIdValueSplited.push(currentAttributeValues['.value'].split('|'))
            })
            for (let productIndex in products) {
                let productData = products[productIndex]
                let productAttributes = productData.attributes;
                productData.attributesValuesArray = []
                for (let attributeId in productAttributes) {
                    let productAttributesArray = productAttributes[attributeId].split('|')
                    productAttributesArray.forEach( (productAttributesValuesId) => {
                        productData.attributesValuesArray[attributeId] = productData.attributesValuesArray[attributeId] || []
                        productData.attributesValuesArray[attributeId].push(attributesIdValueSplited[attributeId][productAttributesValuesId - 1])
                    })
               }
            }
            console.log(products)
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
        this.$bindAsArray('attributesArray', db.ref('attributes'))
        this.$bindAsArray('productsArray', db.ref('products'))
    }
}
</script>
