<template>
    <div class="wishlist">
        <ul v-if="items.length">
            <li v-for="(item, index) in items" :key="index">
                <wishlist-item :item="item"></wishlist-item>
            </li>
        </ul>        
    </div>
</template>

<script>
    import WishlistItem from './WishlistItem'

    export default {
        name: 'Wishlist',
        components: {
            WishlistItem
        },
        props: [
            'items'
        ]
    }
</script>

<style scoped>

</style>