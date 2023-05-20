import React from 'react'
import Imagem from './Imagem'
const ListaImagens = ({pics, imgStyle}) => {
  return (
    pics.map((pic) => {
      return (
        <Imagem
          imgStyle={imgStyle} 
          url={pic.src.small}
          alt={pic.alt}
        />
      )  
    })
  )
}

export default ListaImagens