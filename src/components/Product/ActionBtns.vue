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
            addToCart () {
                const qty = 1

                this.$emit('addToCart', { sku: this.sku, qty })
            },
            addToWishlist (sku) {
                this.$emit('addToWishlist', { sku })
            }
        }
    }
</script>

<style scoped>

</style>
