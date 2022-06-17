import React from 'react'
import {useNavigate} from 'react-router'

const TankYou = () => {
    const navigate=useNavigate()
    setTimeout(()=>{

        navigate("/")
},3000 )
    
  return (
    <div style={{marginTop:"200px",fontSize:"35px"}}>
    <img width="10%"style={{margin:"auto"}} src="https://www.cratehire-uk.co.uk/sites/cratehire/uploads/Image/AdobeStock_109349658-[Converted].png" alt=""/>
    <h1>Congratulations Order Placed Succesfully</h1>
    
    </div>
  )
}

export default TankYou