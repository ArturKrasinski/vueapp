<template>
    <div class="minicart-item">
        <span>{{ itemDetails }}</span>
        <button type="button" @click="remove(item.sku)">usuń</button>
    </div>
</template>

<script>
    export default {
        name: 'MinicartItem',
        props: [
            'item'
        ],
        computed: {
            itemDetails () {
                return `${this.item.name} (${this.item.sku}), ${this.item.qty} x ${this.item.price.toFixed(2)} = ${this.sum}`
            },
            sum () {
                const sum = this.item.qty * this.item.price
                return sum.toFixed(2)
            }
        },
        methods: {
            remove (sku) {
                this.$emit('removeItem', sku)
            }
        }
    }
</script>

<style scoped>

</style>