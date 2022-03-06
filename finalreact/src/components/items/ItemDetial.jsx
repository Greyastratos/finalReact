import React from 'react'
import zapa1 from '../../media/zapa1.jpg'

const ItemDetial = ({item:e}) => {
    return (
        <>
          <div className='border-2 border-red-600 m-2' >
            <div className="imagen" > <img src={zapa1} alt="zapatilla"/> </div>
             <div >Nombre del Articulo: {e.name}</div>
             <div>Categoria: {e.articulo}</div>
             <div>Precio: ${e.price}</div>
             <div>Masc/Fem: {e.gender}</div>
          </div>
        </>
    )
}

export default ItemDetial
