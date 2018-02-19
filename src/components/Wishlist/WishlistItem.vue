<template>
    <div class="wishlist-item">
        <span>{{ item.sku }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.price }}</span>
    </div>
</template>

<script>
    export default {
        name: 'WishlistItem',
        props: [
            'item'
        ]
    }
</script>

<style scoped>

</style>