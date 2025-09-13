import React from 'react'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import OTP from './components/auth/OTP'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/pages/Navbar'
import Categories from './components/pages/Categories'
import Products from './components/pages/Products'
import SelectedCategory from './components/pages/SelectedCategory'
const App = () => {
  return (
    <BrowserRouter>
    <div className="main-body">
    <Navbar/>
    <Categories/>
   <Routes>
    <Route path='/' element={<Products/>}/>
    <Route path='/Categories/:categoryName' element={<SelectedCategory/>}/>
   </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
