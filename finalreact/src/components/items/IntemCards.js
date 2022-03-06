import React from 'react'
import { Link } from 'react-router-dom'

const IntemCards = ({item:e}) => {
    return (
        <> 
        <div className='border-2 border-red-600 m-2' >
           <div>Nombre del Articulo: {e.name}</div>
           <Link to={`/items/${e.id}`}>detalle</Link>
        </div>
        </>
    )
}

export default IntemCards
