import React,{useEffect,useState} from 'react'
import style from '../Style/bag.module.css'
import { useNavigate } from 'react-router'
import {Link} from 'react-router-dom'
let cartData = JSON.parse(localStorage.getItem('cart'));
const Bag = () => {


        const navigate=useNavigate()
    const [text,setText]=useState("");
    const n=cartData.length;
    let total=0;
 
 const handelchangeSelect=(e,price)=>{
      
        
        let prc = Number(price )

        let qty = Number(e.target.value);
        
        total += qty * (prc);
        console.log(total)
            
    }

   const deleteData=(index) => {
            cartData.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(cartData))
            navigate("/bag")
            }

    
    // let couponDiscount=0;    
    //     const applyCupon=(text) => {

    //         if(text=="masai30"){

    //         couponDiscount = total*30/100;
    
    //         total =Math.ceil( total - total*30/100);
    //         obj["discount"]=  total*30/100;
    //         obj["total"]=Math.ceil(total);
    //       }
    //     else{
            
    //             alert("Invalid coupon'")}
    //     }        
          
    
  return (

    <div>
      
            {/*  Items Number And Total price */}
            <div style={{width: '80%',height: '50px',display: 'flex',justifyContent: 'space-around'}}>
        <div style={{display:"flex"}}>
            <h2>SHOPPING BAG</h2><br></br>
            <p id={style.items}>({n} ITEM)</p>
        </div>
        <div   style={{display:"flex"}}>
            <p>TOTAL</p>
            <h3 id={style.total}>{total}</h3>
        </div>
    </div>
    <hr></hr>
    <div id={style.pinCodeDiv}>
        <h5 style={{ marginTop :"10px"}}>DELIVERY & EXPRESS STORE PICK UP</h5>
        <input type="text" placeholder=" Enter Pincode" id="pincode"/>
        <input type="button" id={style.check} value="CHECK"/>
    </div>
    <div id={style.container}>
    <div id={style.products}>
        {cartData.map((el,index)=>(
            
      
            <div id={style.cart_products}>
                <div id={style.image}>
                    <img src={el.image} style={{width:"100%",height:"100%"}}/>
                </div>
                <div id={style.brand} >
                    <span id={style.brand_name}>
                        {el.title}
                    </span>
                    <br></br>
                    <br></br>
                    {/* <h5>{el.description}</h5> */}
                    <label>size : </label>
                    <select style={{border:"1px solid black",borderRadius:"5px",marginRight:"10px"}}>
                        <option>s</option>
                        <option>m</option>
                        <option>l</option>
                        <option>xl</option>
                    </select>

                    <label>quantity : </label>
                    <select id={style.quantityRange} onChange={(e)=>handelchangeSelect(e,el.price)} style={{border:"1px solid black",borderRadius:"5px"}}>
                        <option value='1'>1</option>
                        <option  value='2'>2</option>
                        <option  value='3'>3</option>
                        <option  value='4'>4</option>
                    </select>

                        <div style={{marginTop:"20px"}}>
                        <button onClick={()=>{deleteData(index)}} style={{border:"1px solid black",borderRadius:"5px"}}>Remove</button>
                        </div>
                    
                </div>
                {/* price....... */}
                <div id={style.price}>
                        <p id={style.price_bold}>
                                ${el.price}
                        </p>
                </div>
            </div>
     
      
      
    ))}
       </div>
    <div id={style.order_summary}>
            <div className="summary">
                <h3 style={{ marginLeft: "65px"}}>ORDER SUMMARY</h3>
                <input type="text" placeholder="Enter promo/coupon code" id={style.coupon} value={text} onChange={(e)=>{setText(e.target.value)}}/>
                <input type="button" id={style.apply} value="APPLY" />
                <p id='invalid'></p>
            </div>
            <hr></hr>
            <div id={style.total_box}>
                <p>Subtotal</p>
                <p id={style.subtotal}>{total}</p>
                <p>Delivery charges</p>
                <p>FREE</p>
                <p>Gift packing</p>
                <p>FREE</p>
                <p>Discount</p>
                <p id={style.coupon_discount}>{}</p>
            </div>
            <hr></hr>
            <div id={style.payable_box}>
                <h4>Payable Amount</h4>
                <p id="payable">${Number(total)}</p>
            </div>
            <div className="check">
                <Link to="/address"><input type="button" value="CHECKOUT" id={style.check_btn}/></Link>
            </div>
        </div>
    
        </div>
    <br></br>
    </div>
  )
}

export default Bag
