const productos = [
    { nombre: "Air Max 97", precio: 180, id: "1", img: "https://nikearprod.vtexassets.com/arquivos/ids/699910-800-800?v=638229702219900000&width=800&height=800&aspect=true", idCat: "3" },
    { nombre: "Air Max 98", precio: 190, id: "2", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/075/480/products/zapatillas-nike-air-max-98-640744-110-11-7f6edc08d94b08caa116316484660703-640-0.webp", idCat: "3" },
    { nombre: "Air Max 95", precio: 205, id: "3", img: "https://nikearprod.vtexassets.com/arquivos/ids/454578/DQ9016_001_A_PREM.jpg?v=638149311792900000", idCat: "3" },
    { nombre: "Air Max Plus", precio: 200, id: "4", img: "https://nikearprod.vtexassets.com/arquivos/ids/454545/DQ8960_100_A_PREM.jpg?v=638149311276930000", idCat: "3" },
    { nombre: "Remera Jordan", precio: 70, id: "5", img: "https://nikearprod.vtexassets.com/arquivos/ids/517311-800-800?v=638156192093430000&width=800&height=800&aspect=true", idCat: "2" },
    { nombre: "Remera Nike ACG", precio: 85, id: "6", img: "https://nikearprod.vtexassets.com/arquivos/ids/439339-800-800?v=638145701269300000&width=800&height=800&aspect=true", idCat: "2" },
    { nombre: "Jordan 23 Engineered", precio: 75, id: "7", img: "https://nikearprod.vtexassets.com/arquivos/ids/717175-800-800?v=638239938634970000&width=800&height=800&aspect=true", idCat: "2" },
    { nombre: "Nike Air", precio: 160, id: "8", img: "https://nikearprod.vtexassets.com/arquivos/ids/533465-800-800?v=638161409881870000&width=800&height=800&aspect=true", idCat: "1" },
    { nombre: "Nike Sportswear Circa", precio: 150, id: "9", img: "https://nikearprod.vtexassets.com/arquivos/ids/210260-800-800?v=638098200927030000&width=800&height=800&aspect=true", idCat: "1" },
    { nombre: "Nike Club Fleece+", precio: 145, id: "10", img: "https://nikearprod.vtexassets.com/arquivos/ids/533721-800-800?v=638161413636170000&width=800&height=800&aspect=true", idCat: "1" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}