<template>
   <div id="app">
        <nav-bar
        :cart-amount="cartAmount">
        </nav-bar>
        <div class="product">
            <left-column
                :images="selectedProduct.images"
                :selected-image-index="selectedImageIndex"
                :selected-product-img="selectedProductImg"
                @select-image="selectImage">
            </left-column>
    
            <center-column
                :product="product"
                :selected-product="selectedProduct"
                @select-product="selectProduct"
                @set-preview-model="setPreviewModel"
                @clear-preview-model="clearPreviewModel">
            </center-column>

            <right-column
                :selected-product="selectedProduct"
                @add-to-cart="addToCart">
            </right-column>
    
</div>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LeftColumn from './components/LeftColumn'
import CenterColumn from './components/CenterColumn'
import RightColumn from './components/RightColumn'

export default {
  name: 'App',
  components: {
    NavBar,
    LeftColumn,
    CenterColumn,
    RightColumn,

  },
  data: function(){
    return {
        selectedProductId: undefined,
        previewProductId: undefined,
        selectedImageIndex: 0,
        cart: [],
        product: {
            name: 'Headphones Sony WH-1000XM3',
            models: [
                {
                    id: 1,
                    name: 'Black',
                    color: '#111111',
                    images: ['https://clsonyb2c.vteximg.com.br/arquivos/ids/344224-550-550/WH-1000XM3-0.jpg?v=637157205679400000',
                    'https://reviewed-com-res.cloudinary.com/image/fetch/s--zWbescGk--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1566482682362/Sony-WH-1000XM3-Hero.jpg',
                    'https://technologytoday.club/wp-content/uploads/2020/08/Sony-WH-1000XM4-vs-Sony-WH-1000XM3-%C2%BFvale-la-pena-actualizarlo.jpg',
                    'https://www.gizlogic.com/wp-content/uploads/2019/06/Sony-WH-1000XM3.jpg'
                ],
                    cantidad: 100,
                    descripcion: ['Los #audífonos #WH1000XM3 de #Sony te permiten sumergirte aún más en el silencio con las nuevas mejoras en la tecnología noise cancelling líder del sector y el audio inteligente que se ajusta a la situación.',
                        'La exclusiva optimización de la presión atmosférica permite disfrutar de un sonido óptimo a grandes alturas, para que puedas disfrutar del noise cancelling a la perfección cuando viajes en avión.',
                    ],
                },
                {
                    id: 2,
                    name: 'Silver',
                    color: '#0002',
                    images: ['https://static.bhphoto.com/images/images2000x2000/1541087780_1432360.jpg',
                    'https://technologytoday.club/wp-content/uploads/2020/08/Sony-WH-1000XM4-vs-Sony-WH-1000XM3-%C2%BFvale-la-pena-actualizarlo.jpg',
                    'https://www.gizlogic.com/wp-content/uploads/2019/06/Sony-WH-1000XM3.jpg'
                ],
                    cantidad: 0,
                    descripcion: ['Los #audífonos #WH1000XM3 de #Sony te permiten sumergirte aún más en el silencio con las nuevas mejoras en la tecnología noise cancelling líder del sector y el audio inteligente que se ajusta a la situación.',
                        'La exclusiva optimización de la presión atmosférica permite disfrutar de un sonido óptimo a grandes alturas, para que puedas disfrutar del noise cancelling a la perfección cuando viajes en avión.',
                    ],
                },
            ]
        },
    };
    },

    computed: {
    selectedProduct() {
        if (this.selectedProductId){
            return this.product.models.find(p => p.id === this.selectedProductId)
        }
        return this.product.models[0]
    },
    selectedProductImg(){
        if (this.previewProductId){
            return this.product.models.find(p => p.id === this.previewProductId).images[0]
        }
        return this.selectedProduct.images[this.selectedImageIndex]
    },
    cartAmount(){
        return this.cart.length
    }
    
},
    methods: {
        selectProduct(modelId){
            this.selectedProductId = modelId
            this.selectedImageIndex = 0
    },
        setPreviewModel(modelId){
            this.previewProductId = modelId
        },
        clearPreviewModel(){
            this.previewProductId = undefined
        },
        selectImage(index){
            this.selectedImageIndex = index
           
        },
       
        addToCart(selectedProduct){
            if (selectedProduct.cantidad >0){
                this.cart.push(selectedProduct)
            }
        },
        
    }
}

</script>

<style>
body {
    margin: 0;
}



.product {
    padding: 20px;
    display: flex;
}



hr {
    margin-left: 0;
    margin-right: 0;
}


</style>
