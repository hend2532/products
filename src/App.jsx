import { useEffect, useState } from "react";
// import React from "react";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import {Routes,Route} from 'react-router-dom'
import About from "./components/About";
function App(){
  
  return(
  <>
    <Navbar/>
    <Routes>
      <Route path="/"element={<ProductList/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="product/:id" element={<ProductDetails/>}/>
    </Routes>
    {/* <ProductList/> */}

  </>
  )
}
export default App;