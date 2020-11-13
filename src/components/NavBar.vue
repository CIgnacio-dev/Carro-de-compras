<template>
    <div class="nav-bar">
            <div class="cart">
            <img src="../assets/cart.png"/>
            <span class="amount">{{ cartAmount }}</span>
            <span class="descripcion">Cart</span>
            </div>
        </div>
</template>

<script>
export default {
    name:'nav-bar',
    props:{
        cartAmount: Number,
    },
}
</script>

<style scoped>
    .nav-bar {
        position: relative;
        background-color: #232f3e;
        width: 100%;
        height: 50px;
    }
    .cart {
    position: absolute;
    right: 15px;
    bottom: 5px;
    color: white;
    font-weight: bold;
}

.cart > img {
    width: 38px;
    height: 26px;
}
.amount {
    color: #f08804;
    position: absolute;
    left: 10px;
    top: -5px;
    text-align: center;
    min-width: 25px;
}
</style>