<template>
    <div class="minicart">
        <v-btn color="red" @click="toggleExpanded()">Koszyk <span v-if="count">({{ count }})</span></v-btn>
        <v-data-table
                v-show="expanded"
                :headers="headers"
                :items="items"
                no-data-text="Brak produktów w koszyku"
                hide-actions
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.price.toFixed(2) }}</td>
                <td class="text-xs-right">x {{ props.item.qty }}</td>
                <td class="text-xs-right">{{ (props.item.price * props.item.qty).toFixed(2) }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import { VDataTable } from 'vuetify'
    import { createNamespacedHelpers } from 'vuex'
    import MinicartItem from './MinicartItem'

    const { mapState, mapActions } = createNamespacedHelpers('minicart')

    export default {
        name: 'Minicart',
        components: {
            VDataTable,
            MinicartItem
        },
        data () {
            return {
                headers: [
                    {text: 'nazwa', value: 'name'},
                    {text: 'cena', value: 'price'},
                    {text: 'ilość', value: 'qty'},
                    {text: 'suma', sortable: false}
                ]
            }
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