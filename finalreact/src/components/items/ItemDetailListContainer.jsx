
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetial from './ItemDetial';

const ItemDetailListContainer = () => {
   const {itemsId} = useParams();
    console.log('andate a dormir')
    console.log(itemsId);

    const [items,setItems]= useState([])
    
    useEffect(()=>{
        getItems()
    },[])
    const getItems = ()=>{
        const URL = 'https://run.mocky.io/v3/c575ea6e-e519-49ea-b793-6a6660ede685'

        fetch(URL).then(res => res.json().then(res => {
            console.log(res);
            setItems(res.filter(p => p.id == itemsId))
        }))

    } 

    return (
        <>
        <div className="flex" >
          {items.map(e => 
          <ItemDetial key={e.id} item={e} ></ItemDetial>
          )}
        </div>
        </>
    )
}

export default ItemDetailListContainer
