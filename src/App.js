import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer/>} />
        <Route path='/category/:id' element={ <ItemListContainer/>} />
        <Route path='/item/:id' element={ <ItemDetailContainer/>} />
      </Routes>
      {/* <ItemListContainer/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
