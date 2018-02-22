<template>
    <div>
        <v-card-actions>
            <button-add-to-cart @buttonClicked="addToCart"
                                type="number" label="Koszyk"
                                placeholder="Ilość"
                                wrapperClass="addToCart-actions_wrapper"
                                inputClass="addToCart-actions_input"
                                buttonClass="addToCart-actions_button"></button-add-to-cart>
        </v-card-actions>
        <v-card-actions>
            <v-btn color="blue" @click="addToWishlist(sku)" class="addToWishlist_button">wishlista</v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    import { VCardActions } from 'vuetify/es5/components/VCard'
    import buttonAddToCart from '../Button/buttonWithInput'

    export default {
        name: 'ActionBtns',
        components: {
            VCardActions,
            buttonAddToCart
        },
        props: [
            'sku'
        ],
        data () {
            return {
            }
        },
        methods: {
            addToCart (data) {
                const {value} = data

                this.$emit('addToCart', { sku: this.sku, qty: parseInt(value) })
            },
            addToWishlist (sku) {
                this.$emit('addToWishlist', { sku })
            }
        }
    }
</script>

<style>
    .addToWishlist_button {
        flex-grow: 5;
    }
    .addToCart-actions_wrapper {
        display: flex;
    }
    .addToCart-actions_input {
        width: 30%;
        background: #ffffff;
        text-align: center;
        border-radius: 2px;
    }
    .addToCart-actions_button {
        flex-grow: 3;
    }
</style>