
const Camisetas =
[
  { id: 1,
    stock:10,
    name: "Camiseta Argentina",
    categoria: "categoria titular",
    img: "https://cf.shopee.com.ar/file/4343acb9b227d6f57bf20c25b7734956",
    descripcion: "Argentina camisetas originales",
    precio: 12800
  },
  {
    id: 2,
    stock:20,
    name: "Camiseta Barcelona",
    categoria: "categoria suplente",
    img: "https://http2.mlstatic.com/D_NQ_NP_946006-MLA50543725241_072022-W.jpg",
    descripcion: "Barcelona camisetas originales",
    precio: 6000
  },
  {
    id: 3,
    stock:30,
    name: "Camiseta Psg",
    categoria: "categoria entrenamiento", 
    img: "https://media.revistagq.com/photos/61234dd677e5ac512f83f927/1:1/w_1728,h_1728,c_limit/descarga.jpeg",
    descripcion: "Psg camisetas originales",
    precio: 3000
  },
]

export const galeria = () =>{
    return new Promise ((resolve) =>{
        setTimeout (()=> {
            resolve (Camisetas)
        }, 500)

    })
    
}

export const galeriaByCategoria = (categoriaId) =>{
  return new Promise ((resolve) =>{
      setTimeout (()=> {
          resolve (Camisetas.filter(prod =>prod.categoria === categoriaId))
      }, 500)
      
    })

  }

export const galeriaById = (id) =>{

  // console.log('galeriaById > ', typeof(id))

  return new Promise ((resolve) =>{
      setTimeout (()=> {
          resolve (Camisetas.find(prod => prod.id == id))
      }, 500)
      
    })

  }