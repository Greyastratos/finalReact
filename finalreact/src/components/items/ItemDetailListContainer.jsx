/* muestro mis articulos */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetial from './ItemDetial';

const ItemDetailListContainer = () => {
   const {itemsId} = useParams();
    console.log('andate a dormir')
    console.log(itemsId);

    const [items,setItems]= useState([])
    
    useEffect(()=>{
     
        getItems();
    },[])
    const getItems = ()=>{
        const URL = "https://run.mocky.io/v3/cf63b5eb-97cf-402d-a498-a12de2af4748"

        fetch(URL).then(res => res.json().then(res => {
            console.log(res);
            setItems(res.filter(p => p.id === itemsId))
        }))

    } 

    return (
        <>
        <div className="dispDeArticulos" >
          {items.map(e => 
          <ItemDetial key={e.id} item={e} ></ItemDetial>
          )}
        </div>
        </>
    )
}

export default ItemDetailListContainer
