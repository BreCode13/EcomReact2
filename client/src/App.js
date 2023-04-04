import Navbar from "../src/components/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'




function App() {
  return (
    <>
      <Navbar />
    
     

      <div className="container">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/product" element={<Product />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />
        </Routes>
        
      </div>




      

      
      <Footer />



    
    </>
  )
}

export default App