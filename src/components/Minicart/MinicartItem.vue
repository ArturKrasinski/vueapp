<template>
    <div class="minicart-item">
        <span>{{ itemDetails }}</span>
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
                return `${this.item.name} (${this.item.sku}), ${this.item.qty} x ${this.item.price} = ${this.sum}`
            },
            sum () {
                const sum = this.item.qty * this.item.price
                return sum.toFixed(2)
            }
        }
    }
</script>

<style scoped>

</style>