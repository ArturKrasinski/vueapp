<template>
    <v-card-title primary-title>{{ name }}</v-card-title>
</template>

<script>
    import { VCardTitle } from 'vuetify/es5/components/VCard'

    export default {
        name: 'ProductDetails',
        components: {
            VCardTitle
        },
        props: [
            'name'
        ]
    }
</script>

<style scoped>

</style>