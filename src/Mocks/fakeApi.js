const product = [
         
    {   id: '01',
        imagen: 'https://picsum.photos/200',
        nombre: 'Rolex', 
        categoria:'Hombre',
        precio: 4999,
        descripcion:'Lorem ipsum dolor.',      
    },
    {   id: '02',
        imagen: 'https://picsum.photos/201',
        nombre: 'Rolex',
        categoria:'Mujer',
        precio: 4999,
        descripcion:'Lorem ipsum dolor.',
    },
    {   id: '03',
        imagen: 'https://picsum.photos/202',
        nombre: 'Rolex',
        categoria:'Hombre',
        precio: 4999,
        descripcion:'Lorem ipsum dolor.',
    },
    {   id: '04',
        imagen: 'https://picsum.photos/203',
        nombre: 'Rolex',
        categoria:'Mujer',
        precio: 4999,
        descripcion:'Lorem ipsum dolor.',

    },
    {   id: '05',
        imagen: 'https://picsum.photos/204',
        nombre: 'Rolex',
        categoria:'Mujer',
        precio: 4999,
        descripcion:'Lorem ipsum dolor.',
    },
];

export const getProduct = new Promise ((resolve, reject ) =>{
    let condict = true;
     condict ? setTimeout(() => { resolve(product)},3000 ) : reject("Error")
})
console.log("hola");