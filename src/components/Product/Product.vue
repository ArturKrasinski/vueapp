<template>
  <v-card>
        <product-image :image="product.image"></product-image>
        <product-details :name="product.name"></product-details>
        <action-btns
            @addToCart="addToCart($event)"
            @addToWishlist="addToWishlist($event)"
            :sku="product.sku"
        ></action-btns>
    </v-card>
</template>

<script>
    import { VCard } from 'vuetify/es5/components/VCard'
    import ProductImage from './ProductImage'
    import ProductDetails from './ProductDetails'
    import ActionBtns from './ActionBtns'

    export default {
        name: 'Product',
        components: {
            VCard,
            ProductImage,
            ProductDetails,
            ActionBtns
        },
        props: [
            'product'
        ],
        methods: {
            addToCart (payload) {
                this.$emit('addToCart', payload)
            },
            addToWishlist (payload) {
                this.$emit('addToWishlist', payload)
            }
        }
    }
</script>

<style scoped>

</style>
