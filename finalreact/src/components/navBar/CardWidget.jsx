import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const CardWidget = ({qty}) => {
    return (
        <div>
            <FaShoppingCart/>
            <span>({qty})</span>
        </div>
    )
}

export default CardWidget
