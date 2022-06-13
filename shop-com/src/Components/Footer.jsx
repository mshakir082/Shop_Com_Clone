import React from 'react'
import style from '../Style/footer.module.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.container_first}>
            <div className={style.first_div}>
                <div className={style.first_div_first}>
                    <b  className={style.first_div_b}>Get Email Deals & Earn Cashback</b>
                    <input type="text" className={style.first_div_input} placeholder="enter email address..."/>
                    <button className={style.first_div_button}>Sign up</button>
                </div>
                <div className={style.first_div_second}>
                    <Link to="linktothis" style={{textDecoration:"underline"}}>Link to this page</Link>
                    <p>and tell all of your friends!</p>
                </div>
            </div>
            <div className={style.second_div}>
                <div className={style.second_div_first}>
                    <p>About Us</p>
                    <hr style={{color: 'white'}}></hr>
                    <p>Help</p>
                    <p>Accessibility</p>
                    <p>Contact Us</p>
                    <p>Partner with us</p>
                    <p>Service</p>
                    <p>Country/Region^</p>
                    <p>Own your own SHOP Site</p>

                </div>
                <div className={style.second_div_second}>
                  <img src="image/fourlogo.png"/>
                </div>
            </div>
        </div>
        {/* ----------------------------------- */}
        <div className={style.second_container}>
          <div style={{width:"75%",textAlign:"left",marginLeft:"7px"}}>
            <p style={{fontSize:"12px"}}>© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners.
           </p>
           <p style={{fontSize:"12px"}}> Only Customers will receive cashback on qualifying purchases. UnFranchise Owners/Shop Consultants will receive increased IBV instead of cashback on qualifying purchases.</p>
           <div style={{display:"flex",fontSize:"13px",marginTop:"8px"}}>
              <Link to="">Privacy Police. |</Link>
              <Link to="">Terms of Use |</Link>
              <Link to="">Adverting Disclosure |</Link>
              <Link to="">Return Policy. |</Link>
              <Link to="">Shipping Information</Link>
           </div>
          </div>
          {/* ............................... */}
          <div>
            <img src="image/footer.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
