const products = [
         
    {   id: '01',
        imagen: 'https://picsum.photos/200',
        nombre: 'Producto 1', 
        categoria:'LoremA',
        precio: 4999,
        descripcion:'Lorem ipsum dolor.', 
        stock: '20'   
    },
    {   id: '02',
        imagen: 'https://picsum.photos/201',
        nombre: 'Producto 2',
        categoria:'LoremB',
        precio: 4999,
        descripcion:'Lorem ipsum dolor.',
        stock: '30'
    },
    {   id: '03',
        imagen: 'https://picsum.photos/202',
        nombre: 'Producto 3',
        categoria:'LoremC',
        precio: 4999,
        descripcion:'Lorem ipsum dolor.',
        stock: '25'
    },
    {   id: '04',
        imagen: 'https://picsum.photos/203',
        nombre: 'Producto 4',
        categoria:'LoremA',
        precio: 4999,
        descripcion:'Lorem ipsum dolor.',
        stock: '10'
    },
    {   id: '05',
        imagen: 'https://picsum.photos/204',
        nombre: 'Producto 5',
        categoria:'LoremB',
        precio: 4999,
        descripcion:'Lorem ipsum dolor.',
        stock: '15'
    },
];

export const getProducts = new Promise ((resolve, reject ) =>{
    let condiction = true;
     condiction ? setTimeout(() => { resolve(products)},3000 ) : reject("Error")
})
//console.log("hola");