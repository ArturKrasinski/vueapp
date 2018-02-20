<template>
  <v-card>
        <product-image :image="product.image"></product-image>
        <product-details :name="product.name"></product-details>
        <product-price :value="product.price.value" :type="product.price.type" :old="product.price.old"></product-price>
        <action-btns
            @addToCart="addItemToCart($event)"
            @addToWishlist="addToWishlist($event)"
            :sku="product.sku"
        ></action-btns>
    </v-card>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    import { VCard } from 'vuetify/es5/components/VCard'
    import ProductImage from './ProductImage'
    import ProductDetails from './ProductDetails'
    import ProductPrice from './ProductPrice'
    import ActionBtns from './ActionBtns'

    const { mapActions } = createNamespacedHelpers('minicart')

    export default {
        name: 'Product',
        components: {
            VCard,
            ProductImage,
            ProductDetails,
            ProductPrice,
            ActionBtns
        },
        props: [
            'product'
        ],
        methods: {
            ...mapActions(['addToCart']),
            addItemToCart (payload) {
                const { name, price } = this.product
                const { sku, qty } = payload

                const item = {
                    name,
                    sku,
                    price: price.value,
                    qty: qty || 1
                }

                this.addToCart(item)
            },
            addToWishlist (payload) {
                this.$emit('addToWishlist', payload)
            }
        }
    }
</script>

<style scoped>

</style>
