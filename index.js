const navBar= Vue.component('nav-bar', {
    template:`
        <div class="nav-bar">
            <div class="cart">
            <img src="./src/assets/cart.png"/>
            <span class="amount">{{ cartAmount }}</span>
            <span class="descripcion">Cart</span>
            </div>
        </div>
        `,
    props:{
        cartAmount: Number,
    },
})
const leftColumn = Vue.component('left-column',{
    template:`
    <div class="left-column">
                <div class="sidebar-img">
                    <img
                    v-for="(img, index) in images"
                    :src="img"
                    :class="{ 'side-img': true, 'img-selected': index === selectedImageIndex }"
                    @mouseenter="selectImage(index)"/>
                
                <img 
        :src="selectedProductImg"
                class="img" />
                </div>
            </div>
            `,
            props: {
                images: Array,
                selectedImageIndex: Number,
                selectedProductImg: String,
            },
            methods: {
                selectImage(index){
                    this.$emit('select-image',  index )
                   
                },
            }
})
const centerColumn = Vue.component('center-column', {
    template:`
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
            <li v-for="descripcion in selectedProduct.descripcion">
                {{ descripcion }}
            </li>
        </ul>
    </div>
</div>
`,
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
})
const rightColumn= Vue.component('right-column',{
    template: `
    <div class="rigth-column">
    <button
    class="add-to-cart"
    v-show="this.selectedProduct.cantidad > 0"
    @click="addToCart">
    Agregar al carrito</button>
</div>
    `,
    props: {
        selectedProduct: Object,

    },
    methods:{
        addToCart(){
            this.$emit('add-to-cart', this.selectedProduct )
        }
    }
})
const app = new Vue({
    el: '#app',
    components:{
        navBar,
        leftColumn,
        centerColumn,
        rightColumn,
    },
    data: {
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
})