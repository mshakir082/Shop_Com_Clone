import React from 'react'
import style from '../Style/learn.module.css'
import {Link} from 'react-router-dom'
import {Button} from '@chakra-ui/react'
const LearnMore = () => {
  return (
    <>
    <div>
      <div className={style.learn_container} >
        <div className={style.learn_one}>
            <p style={{fontSize:"13px",padding:"8px"}}>
            Your Shop Consultant is
                <span style={{fontWeight:"bold",paddingLeft:"5px"}}>SHOP.COM</span>
            </p>
        </div>
        <div className={style.learn_two}>
            <div style={{width:"30%"}}>
            <p style={{fontSize:"13px",padding:"8px"}}>
            Earn up to  
                <span style={{fontWeight:"bold",paddingLeft:"5px"}}>50%</span>
            </p>
            </div>
            <div style={{width:"50%"}}>
            <img style={{width:"6%",marginTop:"10px"}} src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt=""/>
            <p style={{fontSize:"13px",marginTop:"-17px",marginLeft:"-30px"}}>
            <span style={{fontWeight:"bold"}}>Cashback </span>
            on eligible purchases. 
                 </p>
            </div>
            <div style={{fontSize:"14px",padding:"8px",textDecoration:"underline"}}>
             <Link to="/learnmore" >Learn More</Link>
            </div>
        </div>
      </div>
      <div style={{marginLeft:"400px"}}>
        <div style={{width: "60%",height:"50px",display: "flex"}}>
                <p style={{fontSize:"25px",marginTop:"5px",color:"grey"}}>$50,073,228</p>
                <div style={{width:"100%",display: "flex",marginLeft:"10px",marginTop:"12px"}}>
                <p style={{fontSize:"16px"}}>awarded in</p>
                 <img style={{width:"10%",marginTop:"-5px",marginLeft:"5px",marginRight:"5px"}} src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt=""/>
                 <span style={{fontWeight:"bold",marginTop:"2px"}}>Cashback! </span>
                 <Button colorScheme='white' color='black' border='1px solid black' borderRadius='20px' mt='-5px' ml="5px"width="100px" fontSize="14px" className={style.btn}>LEARN MORE</Button>
                </div>
                 </div>
                 </div>
                 <br></br>
        <img src="https://img.shop.com/Image/homepage/shop-usa-97736-summer-banner-hero1654266036793.jpeg" alt="" style={{width:"100%",height:"300px"}}/>

    </div>
    <br></br>
    <br></br>
    {/* ----------------------------------- */}
    <div className={style.four_container}>
        <div className={style.four_container_one}>
            <div style={{fontSize:'22px',textAlign:'left',marginLeft:"10px"}}>
            Featured Product
            </div>
            <div><img src="https://img.shop.com/Image/240000/248600/248698/products/1935915380.jpg?size=600x600"/></div>
                <br></br>
                <br></br>
                <br></br>
                
            <div style={{textAlign:'left',marginLeft:"10px",textDecoration:"underline"}}>
                <Link to="/buynow">Buy now</Link>
            </div>
        </div>
        <div className={style.four_container_two}>
        <div style={{fontSize:"18px"}}>
        Dr. Deedra Mason's Essential 9
            </div>

            <br></br>
            
            <div><img src="https://img.shop.com/Image/homepage/us_eng_essential9_sq1616511735959.jpg"/></div>
                <br></br>
                <br></br>
                <br></br>
                
            <div style={{textAlign:'left',marginLeft:"10px",textDecoration:"underline"}}>
                <Link to="/buynow">View the Essential 9</Link>
            </div>
        </div>
        <div className={style.four_container_three}>
        <div style={{fontSize:'22px',textAlign:'left',marginLeft:"10px"}}>
        Featured One Cart Stores
            </div>
            <br></br>
            <div>
                <div style={{height:"40px",backgroundColor:"#F0F1F7",marginBottom:"10px"}}>
                    <img  style={{marginLeft:"65px",padding:"5px"}} src="https://img.shop.com/Image/topbrands/nmlogos_137973.gif"/>
                </div>
               
                <div style={{height:"40px",backgroundColor:"#F0F1F7",marginBottom:"10px"}}>
                    <img  style={{marginLeft:"65px",padding:"5px"}} src="https://img.shop.com/Image/topbrands/nmlogos_105090.gif"/>
                </div>
                <div style={{height:"40px",backgroundColor:"#F0F1F7",marginBottom:"10px"}}>
                    <img  style={{marginLeft:"65px",padding:"5px"}} src="https://img.shop.com/Image/topbrands/nmlogos_138690.gif"/>
                </div>
                <div style={{height:"40px",backgroundColor:"#F0F1F7",marginBottom:"10px"}}>
                    <img  style={{marginLeft:"65px",padding:"5px"}} src="https://img.shop.com/Image/topbrands/nmlogos_135882.gif"/>
                </div>
            </div>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <div style={{textAlign:'left',marginLeft:"10px",textDecoration:"underline"}}>
                <Link to="/buynow">See More Stores</Link>
            </div>
        </div>
        <div className={style.four_container_four}>
            <div className={style.four_container_inner}>
            Sign in for the best experience
            </div>
            <Button backgroundColor="#414467" color='white' border='1px solid black' borderRadius='20px' mt='-105px' ml="5px"width="90%" fontSize="14px" className={style.btn}>LEARN MORE</Button>
            <div>
        <img style={{width:"100%",marginTop:"-25px" }} src="https://img.shop.com/Image/homepage/us-en-fathersday-banner-square-cs97556-may221652106174408.jpeg"/>
        </div>
        </div>
        </div>
        <br></br>
        {/* -------------------------------------- */}
        <div style={{height: '70px'}}>
            <div  style={{fontSize:"35px",fontWeight:"bold",marginLeft:"450px",padding:"5px"}}>
            Popular Brands
            </div>
        </div>
        {/* ---------------------------------------- */}

        <div className={style.popular_brand}>
            <div className={style.popular_brand_one}>
                <img style={{height:"100%",width:"100%"}} src="https://img.shop.com/Image/homepage/ldv-hommes-usa-eng-chi-101204-cta-banners-bigsq1654021712925.jpg"/>
            </div>
            <div className={style.popular_brand_two}>
                <div className={style.popular_brand_inner_one} >
                    <div style={{marginTop:"5px"}} >
                    <img style={{width:"100%"}} src="image/populer.png"/>
                    </div>
                    <br></br>
                  
                      <div>
                      <img style={{width:"100%"}} src="image/pride_month.png"/>
                      </div>
                      
                </div>
            </div>
        </div>


    </>
  )
}

export default LearnMore
