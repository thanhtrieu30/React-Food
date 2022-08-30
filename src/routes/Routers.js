import React from 'react'

// import router route navigate
import {Routes , Route , Navigate} from 'react-router-dom';

// import pages
import Home from '../pages/Home';
import AllFoods from '../pages/AllFoods';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import FoodDetails from '../pages/FoodDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';



const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/foods' element={<AllFoods/>} />
        <Route path='/foods/:id' element={<FoodDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default Routers