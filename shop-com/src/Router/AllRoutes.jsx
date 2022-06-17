import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import CreateAccount from '../Pages/CreateAccount'
import Beauty from '../Pages/Beauty'
import Products from '../Pages/Products'
import Bag from '../Pages/Bag'
import Address from '../Pages/Address'
import CheckOut from '../Pages/CheckOut'
import TankYou from '../Pages/TankYou'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/beauty/:id' element={<Products/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/signup' element={<CreateAccount/>}/>
        <Route path='//bag' element={<Bag/>}/>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/thankyou" element={<TankYou/>}></Route>


      </Routes>
    </div>
  )
}

export default AllRoutes
