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
        <tr v-for="(attribute, id) in attributes" :key="id">
            <td><b>{{attribute.name}}</b></td>
            <td v-for="(product, index) in productsWithAttributes" :key="index">
                <span v-for="(attributeValue, index) in product.attributes[id]" :key="index">{{attributeValue}}</span>
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
            return this.productsArray.map(product => {
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
