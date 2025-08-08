import Home from "./Pages/Home";
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Kids from "./Pages/Kids"
import Sports from "./Pages/Sports"
import Cart from "./Pages/Cart"
import { Routes, Route } from "react-router-dom";
import "./App.css"
import { createContext, useState } from "react";

export const CartContext = createContext();

export default function App() {
   let [cart,setCart] = useState([])
 
  return (
    <>
        <CartContext.Provider value={{cart,setCart}}>
            <Routes>
               <Route path="/"       element={<Home  />}/>
               <Route path="/cart"   element={<Cart />}/>
               <Route path="/men"    element={<Men />}/>
               <Route path="/women"  element={<Women />}/>
               <Route path="/kids"   element={<Kids />}/>
               <Route path="/sports" element={<Sports />}/>
            </Routes>  
        </CartContext.Provider>    
        
        
    </>
  )
}
