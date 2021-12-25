import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import Cart from "./components/Cart/Cart";
import Footer from './components/Footer/Footer'
import  CartContextProvider  from "./components/Context/cartContex"



function App() {

  return (

    <CartContextProvider>
    <BrowserRouter>

      <div className= "App">
        <NavBar /> 
          <Routes>


              <Route  exact path= '/' >
                <ItemListContainer  /> 
              </Route>

              <Route  path= '/categoria/:idCategoria' component= {ItemListContainer} />

              <Route exact path= '/detalle/:id'>
                <ItemDetailContainer />
              </Route>

              <Route exact path= '/cart'> 
                <Cart />
              </Route>

        

         <Footer /> 
          </Routes>
       </div>
    </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;
