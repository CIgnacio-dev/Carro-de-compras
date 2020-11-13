<template>
    <div class="rigth-column">
    <button
    class="add-to-cart"
    v-show="this.selectedProduct.cantidad > 0"
    @click="addToCart">
    Agregar al carrito</button>
</div>
</template>

<script>
export default {
    props: {
        selectedProduct: Object,

    },
    methods:{
        addToCart(){
            this.$emit('add-to-cart', this.selectedProduct )
        }
    }
}
</script>
<style scoped>
    .right-column {
    padding-left: 20px;
    display: flex;
    }
    .add-to-cart {
        background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
        border-color: #a88734 #9c7e31 #846a29;
        border-radius: 3px;
        color: #111;
        width: 237px;
        height: 31px;
    }

    .add-to-cart:hover {
        border-color: #a88734 #9c7e31 #846a29;
        background: linear-gradient(to bottom,#f5d78e,#eeb933);
    }
</style>