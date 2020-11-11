const app = new Vue({
    el: '#app',
    data:{
        product:{
            name: 'Headphones Sony WH-1000XM3',
            selected:{
                id: 1,
                name: 'black',
                color: '#111111',
                img: 'https://clsonyb2c.vteximg.com.br/arquivos/ids/344224-550-550/WH-1000XM3-0.jpg?v=637157205679400000',
                cantidad: 100,
            },
            models:[
             {
                id: 1,
                name: 'black',
                color: '#111111',
                img: 'https://clsonyb2c.vteximg.com.br/arquivos/ids/344224-550-550/WH-1000XM3-0.jpg?v=637157205679400000',
                cantidad: 100,
            },
            {
                id: 2,
                name: 'silver',
                color: '#0002',
                img: 'https://static.bhphoto.com/images/images2000x2000/1541087780_1432360.jpg',
                cantidad: 100,
            },
        ]
        },
}
})