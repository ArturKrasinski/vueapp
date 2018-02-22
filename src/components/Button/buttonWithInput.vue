<template>
    <div :class="wrapperClass">
        <input :type="inputType" v-model="inputValue" :placeholder="placeholder" :class="inputClass" />
        <v-btn color="red" @click="emitClicked" :class="buttonClass">{{label}}</v-btn>
    </div>
</template>

<script>
    export default {
        name: 'buttonWithInput',
        props: [
            'type',
            'placeholder',
            'label',
            'wrapperClass',
            'buttonClass',
            'inputClass'
        ],
        data () {
            return {
                inputValue: this.startValue || null
            }
        },
        computed: {
            inputType () {
                return this.type || 'text'
            },
            buttonLabel () {
                return this.label || 'ok'
            }
        },
        methods: {
            emitClicked () {
                this.$emit('buttonClicked', {value: this.inputValue})
            }
        }
    }
</script>