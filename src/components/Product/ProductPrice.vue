<template>
    <div class="price-wrapper" :class="{'price-wrapper_special': isSpecial}">
        <span class="price">{{normalized}}</span>
        <span class="old" :show="hasOld">{{old}}</span>
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
            normalized () {
                return ((this.value * 100) / 100).toFixed(2)
            },
            isSpecial () {
                return this.type === 'special'
            },
            hasOld () {
                return this.old
            }
        }
    }
</script>

<style scoped>
    .price-wrapper {
        width: .calc(100%-20px);
        padding: 10px 0;
        margin: 0 10px;
        text-align: center;
    }
    .price-wrapper_special{
        background: rgba(255,255,0,0.9);
        color: #000000;
        font-weight: 700;
    }
</style>