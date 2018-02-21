<template>
    <div class="price-wrapper" :class="{'price-wrapper_special': isSpecial}">
        <span class="price">{{normalizeNumber(value)}}</span>
        <span class="old" :show="old">{{normalizeNumber(old)}}</span>
    </div>
</template>

<script>
    export default {
        name: 'ProductPrice',
        props: [
            'value',
            'type',
            'old'
        ],
        computed: {
            isSpecial () {
                return this.type === 'special'
            }
        },
        methods: {
            normalizeNumber (numberToNormalize) {
                let normalizedNumber
                if (numberToNormalize) {
                    normalizedNumber = ((numberToNormalize * 100) / 100).toFixed(2)
                }
                return normalizedNumber
            }
        }
    }
</script>

<style scoped>
    .price-wrapper {
        position: relative;
        width: calc(100% - 20px);
        padding: 10px 0;
        margin: 0 10px;
        text-align: center;
    }
    .price-wrapper_special {
        background: rgba(255,255,0,0.9);
        color: #000000;
        font-weight: 700;
    }
    .old {
        position: absolute;
        top: 10px;
        left: 10px;
        opacity: 0.7;
        font-size: 0.9;
        transform: rotate(-30deg);
    }
    .old::after{
        width: 120%;
        height: 2px;
        content: " ";
        background: red;
        display: block;
        position: absolute;
        top: calc(50% - 2px);
        left: -10%;
    }
</style>