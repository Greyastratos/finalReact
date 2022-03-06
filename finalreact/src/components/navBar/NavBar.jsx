import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
     /* <div className='flex title-font font-medium items-center text-orange-600 mb-4 md:mb-0' >
            <Link to='/' className="mr-5 hover:text-gray-900" > Inicio</Link>
            <Link to='list' className="mr-5 hover:text-gray-900">lista de Articulos</Link>
        </div>*/
        <header className="text-stone-600 body-font bg-stone-300">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="flex title-font font-medium items-center text-orange-600 mb-4 md:mb-0"> 
              <span><Link to='/'  className="ml-3 text-xl"> Mi e-Comerce</Link></span>
            </div>
            <nav >
              <ul className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center" >
                <li className="mr-5 hover:text-gray-900" ><Link to='list' className="mr-5 hover:text-gray-900" > Lista de Articulos</Link></li>
                <li className="mr-5 hover:text-gray-900" >Categorias</li>
              </ul>
             </nav>
         </div>
      </header>
      
    )
}

export default NavBar

