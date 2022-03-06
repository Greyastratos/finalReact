import './App.css';
import ItemDetailListContainer from './components/items/ItemDetailListContainer';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/items/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
     <Route index element={<Home/>}></Route>
     <Route path='list' element={<ItemListContainer/>}></Route>
     <Route path ='items' element={<ItemDetailListContainer/>} >
       <Route path=':itemsId' element={<ItemDetailListContainer/>}></Route>
     </Route>
   </Routes>
   </BrowserRouter> 
   </>
  );
}

export default App;
