<template>
    <div class="minicart" v-if="items.length">
        <h4>Minicart</h4>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <minicart-item :item="item"></minicart-item>
            </li>
        </ul>
        <div>Suma: {{ this.orderSum.toFixed(2) }}</div>
    </div>
</template>

<script>
    import MinicartItem from './MinicartItem'

    const INITIAL_ORDER_SUM_VALUE = 0

    export default {
        name: 'Minicart',
        components: {
            MinicartItem
        },
        props: [
            'items'
        ],
        computed: {
            orderSum () {
                return this.items.reduce((prev, currItem) => {
                    const { qty, price } = currItem

                    return prev + (qty * price)
                }, INITIAL_ORDER_SUM_VALUE)
            }
        }
    }
</script>

<style scoped>

</style>