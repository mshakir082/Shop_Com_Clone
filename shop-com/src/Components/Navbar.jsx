import React from 'react'
import style from '../Style/nav.module.css'
import { Select } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbar_upper}>
            <div className={style.navupp_one}>
            <img class={style.shop_img} src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg" alt="SHOP.COM"/>
            </div>
            <div className={style.navupp_two}>
                <div >
                <Select placeholder='All Departments'  mt="2px" border="none" >
                    <option value='option2'>Auto</option>
                    <option value='option3'>Baby</option>
                    <option value='option1'>Beauty</option>
                    <option value='option2'>Books</option>
                    <option value='option3'>Business</option>
                    <option value='option3'>Cameras</option>
                    <option value='option3'>Clothes</option>
                    </Select>
                    
                </div>
                <hr></hr>
                <div>
                    <input type="text"  className={style.nav_input} placeholder="Search SHOP.COM..."/>
                </div>
                <div className={style.search_div}>
                    <button type="button" ><img style={{marginTop:"10px",filter: "opacity(0.6) drop-shadow(0 0 0 white)"}}  src="https://img.shop.com/Image/resources/images/icon-search-24px.svg" alt="Search"/></button>
                </div>
           
            </div>
            <div className={style.navupp_three}>
            <img style={{width:"80%"}} src="https://img.shop.com/Image/header2013/motives-usa-can-100110-sculpting-concealer-banners-header1650486339409.svg" alt="Motives, The concealer of your dreams. Shop Now. "/>
            </div>
      </div>

      <div className={style.nav_lower}>
          <div className={style.nav_lower_one}>
          <img style={{width:"13%",marginLeft:"35px",marginTop:"10px"}} src="https://img.shop.com/Image/resources/images/icon-menu-24px.svg" alt="Menu"/>
          </div>
          <div className={style.nav_lower_two}>
              <Link to="/exclusive" >Exclusive Brands</Link>
              <Link to="/exclusive" >Stores</Link>
              <Link to="/exclusive" >Deals</Link>
              <Link to="/exclusive" >SHOP Travel</Link>
              <Link to="/exclusive" >Departments</Link>
              <Link to="/exclusive" >ShopBuddy</Link>
              <Link to="/exclusive" >SHOP Local</Link>
    
          </div>
          <div className={style.nav_lower_three}>
              <div className={style.nav_lower_three_one} >
              <Link to="/login"> <img style={{width:"30px",marginTop:"7px"}} src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg" alt="Account"/></Link>
              </div>
              <div className={style.nav_lower_three_two}>
              <img style={{width:"30px",marginTop:"7px"}} src="https://img.shop.com/Image/resources/images/icon-orders-24px.svg" alt=""/>
              </div>
              <div className={style.nav_lower_three_three}>
              <Link to="/bag"><img style={{width:"30px",marginTop:"7px"}} src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg" alt=""/></Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
