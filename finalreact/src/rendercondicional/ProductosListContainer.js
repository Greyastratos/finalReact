import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs} from 'firebase/firestore'
import  './firebaseclient';
const ProductosListContainer = () => {
    const[productos, setProductos]=useState()
    useEffect(async() => {
        const db= getFirestore();
        const querySnapshot = await getDocs(collection(db, "products"));

        let listaProductos=[]

        querySnapshot.forEach(doc => {
         // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          console.log(doc.data())
          listaProductos.push(doc.data())
        });
        setProductos(listaProductos)
    },[])


    return (
            <>
               <div>Productos Constainerreee</div>
             
            </>
    )
}
const ProductosCard = ({phone})=>{
    return(
        <>
        <div>{phone.name}</div>
        <div>{phone.price}</div>
        <div>{phone.stock}</div>
        </>
    );
}

export default ProductosListContainer
