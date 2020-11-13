<template>
    <div class="center-column">
     <div class="details" >
         <h1> {{ product.name }}</h1>
         <hr/>

         <span
         v-if="selectedProduct.cantidad > 50"
          class="stock in-stock">
             En stock.
         </span>
         <span
         v-else-if="selectedProduct.cantidad > 0 && selectedProduct.cantidad< 50" 
         class="stock low-stock">
            Pocas unidades disponibles.
        </span>
        <span 
        v-else
        class="stock no-stock">
            Sin stock.
        </span>

        <span>Model: <h3><b>{{ selectedProduct.name }}</b></h3></span>
        <div class="colors">
            <span
            v-for="model in product.models"
            v-bind:key="model.id"
            v-bind:title="model.name"
            v-bind:style=" {backgroundColor: model.color }"
            v-bind:class="{ 'color-box' : true, 'color-selected': selectedProduct.id === model.id }"
            @click="selectProduct(model.id)"
            @mouseenter="setPreviewModel(model.id)"
           
            >
            </span>
        </div>
        <ul class="descripcion">
            <li
             v-for="(descripcion,index) in selectedProduct.descripcion"
             :key="index">
                {{ descripcion }}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props:{
    product: Object,
    selectedProduct: Object,
},
methods:{
    selectProduct(modelId){
        this.$emit('select-product',  modelId )
        this.selectedProductId = modelId
        this.selectedImageIndex = 0
},
    setPreviewModel(modelId){
        this.$emit('set-preview-model',  modelId )
        this.previewProductId = modelId
    },
    clearPreviewModel(){
        this.$emit('clear-preview-model' )
        this.previewProductId = undefined
    },
    }
}
</script>
<style scoped>
    .center-column {
    width: 760px;
    display: flex;
    flex-direction: column;
}
.stock {
    font-size: 25px;
    padding-bottom: 20px;
}

.in-stock {
    color: #007600;
}

.low-stock {
    color: #e77600;
}

.out-of-stock {
    color: #B12704;
}
.colors {
    display: flex
}

.color-box {
    margin: 10px 10px 0 0;
    border-radius: 3px;
    height: 36px;
    width: 36px;
}

.color-selected {
    height: 34px;
    width: 34px;
    border: 2px solid rgb(231, 118, 0);
}
.descripcion {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
}
</style>