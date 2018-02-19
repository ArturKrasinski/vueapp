<template>
    <v-card-actions>
        <v-btn color="red" @click="addToCart(sku)">koszyk</v-btn>
        <v-btn color="blue" @click="addToWishlist(sku)">wishlista</v-btn>
    </v-card-actions>
</template>

<script>
    import { VCardActions } from 'vuetify/es5/components/VCard'

    export default {
        name: 'ActionBtns',
        components: {
            VCardActions
        },
        props: [
            'sku'
        ],
        methods: {
            addToCart (sku) {
                this.$emit('addToCart', { payload: sku })
            },
            addToWishlist (sku) {
                this.$emit('addToWishlist', { payload: sku })
            }
        }
    }
</script>

<style scoped>

</style>
