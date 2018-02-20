<style>
    .image-wrapper{
        text-align:center;
        padding-top: 15px;
    }
</style>
<template>
    <v-layout>
        <v-flex xs12 sm12>
            <v-container fluid v-bind="{ [`grid-list-3`]: true }">
                <v-layout row wrap>
                    <v-flex xs3 v-for="product in products" :key="product.id">
                        <v-card tile style="background: rgba(255,255,255,0.1)">
                            <p class="image-wrapper">
                                <img :src="getProductImage(product.image)" height="200px">
                            </p>
                            <v-card-title primary-title>{{product.name}} {{product.image}} <br>({{getBrewery(product)}})
                            </v-card-title>
                            <v-card-actions>
                                <v-btn color="red">koszyk</v-btn>
                                <v-btn color="blue">wishlista</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
import {VCard, VCardTitle, VCardActions} from 'vuetify/es5/components/VCard'
import db from '../services/db'

let productImageDir = '/static/products/'

export default {
    components: {
        VCard,
        VCardTitle,
        VCardActions
    },
    firebase: {
        products: db.ref('products'),
        attributes: db.ref('attributes')
    },
    data () {
        return {
            products: [],
            attributes: [],
            attributesIdValueArray: []
        }
    },
    computed: {
        breweries () {
            let browars = []
            if (this.attributesIdValueArray[0]) {
                browars = this.attributesIdValueArray[0]['.value'].split('|')
            }
            return browars
        }
    },
    name: 'FirebaseExample',
    mounted () {
        this.$bindAsArray('attributesIdValueArray', db.ref('attributesIdValue'))
    },
    methods: {
        getProductImage (imageName) {
            return productImageDir + imageName
        },
        getBrewery (productData) {
            return this.breweries[productData.attributes[0]]
        }
    }
}
</script>
