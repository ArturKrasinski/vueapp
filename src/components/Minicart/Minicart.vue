<template>
    <div class="minicart">
        <h4 @click="toggleExpanded()">Minicart <span v-if="count">({{ count }})</span></h4>
        <div class="wrapper" v-show="expanded">
            <ul>
                <li v-for="(item, index) in items" :key="index">
                    <minicart-item @removeItem="removeItemFromCart($event)" :item="item"></minicart-item>
                </li>
            </ul>
            <div>Suma: {{ fixedTotals }}</div>
        </div>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    import MinicartItem from './MinicartItem'

    const { mapState, mapActions } = createNamespacedHelpers('minicart')

    export default {
        name: 'Minicart',
        components: {
            MinicartItem
        },
        computed: {
            ...mapState({
                expanded: state => state.expanded,
                count: state => state.count,
                items: state => state.items,
                totals: state => state.totals
            }),
            fixedTotals () {
                return this.totals.toFixed(2)
            }
        },
        methods: {
            ...mapActions([
                'toggleExpanded',
                'removeFromCart'
            ]),
            removeItemFromCart (sku) {
                this.removeFromCart(sku)
            }
        }
    }
</script>

<style scoped>

</style>