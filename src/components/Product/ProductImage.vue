<template>
    <p class="image-wrapper">
        <img :src="getProductImage(image)" height="200px">
    </p>
</template>

<script>
    export default {
        name: 'ProductImage',
        props: [
            'image'
        ],
        methods: {
            getProductImage (imageName) {
                return `/static/products/${imageName}`
            }
        }
    }
</script>

<style scoped>

</style>