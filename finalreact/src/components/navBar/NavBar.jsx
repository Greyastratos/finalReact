import React from 'react'
import { Link } from 'react-router-dom';
import CardWidget from './CardWidget';
const NavBar = () => {
    return (
      <>
        <header>
            <ul>
                <li>
                <Link to='/'> Home</Link>
                </li>
                <li>
                <Link to='' >Categoria</Link>
                </li>
                <li>
                <Link to='list' > Lista de Articulos</Link>
                </li>
            </ul>
          <CardWidget ></CardWidget>
        </header>
      </>
    )
}

export default NavBar
