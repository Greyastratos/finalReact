import React, { useEffect, useState } from 'react'
import IntemCards from './IntemCards'
const IntemList = () => {
    const [items,setItems]= useState([])
    
    useEffect(()=>{
        getItems()
    },[])
    const getItems = ()=>{
        const URL = 'https://run.mocky.io/v3/cf63b5eb-97cf-402d-a498-a12de2af4748'
        //https://run.mocky.io/v3/006727fe-13ac-429a-9108-ead1932a416b`

        fetch(URL).then(res => res.json().then(res => {
            console.log(res);
            setItems(res)
        }))
    } 
    return (
        <div className="flex" >
          {items.map(e => 
          <IntemCards key={e.id} item={e}></IntemCards>
          )}
        </div>
    )
}

export default IntemList
