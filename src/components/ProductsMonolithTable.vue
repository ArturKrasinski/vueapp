<style>

</style>
<template>
    <table>
        <tr>
            <td></td>
            <td v-for="(product, index) in productsWithAttributes" :key="index">
                <product :product="product"></product>
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

import db from '../services/db'
import Product from './Product/Product'

export default {
    name: 'ProductsMonolithTable',
    components: {
        Product
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
    mounted () {
        this.$bindAsArray('attributesIdValueArray', db.ref('attributesIdValue'))
        this.$bindAsArray('productsArray', db.ref('products'))
    }
}
</script>
