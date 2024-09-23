import React, { Fragment } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../components/Home/Home'
import Logout from '../components/logout/Logout'
import ProductDetails from '../components/productDetails/ProductDetails'

function Routers() {
  return (
   <>
   <Router>
    <Header/>
    <Routes>


<Route path='/' element={ <Home/> } />
<Route path='/logout' element={<Logout/>} />
<Route path='/product/:id' element={<ProductDetails/>} />




    </Routes>
    <Footer/>
   </Router>
   </>
  )
}

export default Routers