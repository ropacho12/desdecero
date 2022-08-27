
const Camisetas =
[
  { id: "1",
    stock:"10",
    name: "Argentina",
    categoria: "titular",
    img: "https://cf.shopee.com.ar/file/4343acb9b227d6f57bf20c25b7734956",
    descripcion: "camisetas originales"
  },
  {
    id: "2",
    stock:"20",
    name: "Barcelona",
    categoria: "suplente",
    img: "https://http2.mlstatic.com/D_NQ_NP_946006-MLA50543725241_072022-W.jpg",
descripcion: "camisetas originales"
  },
  {
    id: "3",
    stock:"30",
    name: "Psg",
    categoria: "entrenamiento", 
    img: "https://media.revistagq.com/photos/61234dd677e5ac512f83f927/1:1/w_1728,h_1728,c_limit/descarga.jpeg",
descripcion: "camisetas originales"
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
  return new Promise ((resolve) =>{
      setTimeout (()=> {
          resolve (Camisetas.find(prod =>prod.id ===id))
      }, 500)
      
    })

  }