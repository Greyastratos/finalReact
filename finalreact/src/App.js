import './App.css';
import ItemDetailListContainer from './components/items/ItemDetailListContainer';
import ItemListContainer from './components/items/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import { CartContextProvider } from './components/CartContext';
import ProductosListContainer from './rendercondicional/ProductosListContainer';
function App() {
  return (
   <>
   <CartContextProvider>
   <BrowserRouter>
   <NavBar/>
   <Routes>
     <Route index element={<Home/>}></Route>
     <Route path='list' element={<ItemListContainer/>}></Route>
     <Route path ='items' element={<ItemDetailListContainer/>}> 
         <Route path=':itemsId' element={<ItemDetailListContainer/>}></Route>
      </Route>
   </Routes>
   </BrowserRouter> 
   </CartContextProvider>
    <footer>
      <div>
        <ProductosListContainer></ProductosListContainer>
      </div>
    </footer>
   </>
  );
}

export default App;
