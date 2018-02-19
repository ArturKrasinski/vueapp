<template>
    <v-card-actions>
        <v-btn color="red">koszyk</v-btn>
        <v-btn color="blue">wishlista</v-btn>
    </v-card-actions>
</template>

<script>
    import { VCardActions } from 'vuetify/es5/components/VCard'

    export default {
        name: 'ActionBtns',
        components: {
            VCardActions
        }
    }
</script>

<style scoped>

</style>
