<template>
  <v-card>
        <product-image :image="product.image"></product-image>
        <product-details :name="product.name"></product-details>
        <action-btns></action-btns>
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
        ]
    }
</script>

<style scoped>

</style>
