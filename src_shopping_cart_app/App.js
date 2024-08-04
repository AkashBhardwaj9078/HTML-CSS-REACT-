import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Shops from './Pages/Shops';
import Shopcategory from './Pages/Shopcategory';
import Products from './Pages/Products';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';

import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kid_banner from "./Components/Assets/banner_kids.png"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar/>
       
         <Routes>
            <Route path='/' element={<Shops/>} ></Route>
            <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>} ></Route>
            <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>} ></Route>
            <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid"/>} ></Route>
            
            <Route path='/product' element={<Products/>} >
                    <Route path=':productId' element={<Products/>}></Route>
            </Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<LoginSignup/>}></Route>


         </Routes>

         <Newsletter/>
         <Footer></Footer>
      </BrowserRouter>
      
      
  
    </div>
  );
}

export default App;
