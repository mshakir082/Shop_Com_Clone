import { Heading ,Text,Box,Flex,Image,Radio, RadioGroup,Stack,Select } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import React,{useState,useEffect} from 'react'
import Navbar from '../Components/Navbar'
import ThreeBox from '../Components/ThreeBox'
import FourBox from '../Components/FourBox'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Products = () => {

    const [data,setData]=useState(null);
    const params=useParams()
  
    useEffect(() =>{
        axios({
            url:`http://localhost:8080/products/${params.id}`,
            method: 'GET',
        })
        .then(res=>{
           
            setData(res.data)
           })
       
    },[params.id])

    const handedlClick=()=>{
        localStorage.setItem('cart',JSON.stringify(data))
          
    }

  return (

    <div>
        <Navbar/>
        <div>
            <img src="image/lumi-stick.png"/>
        </div>
        <div style={{width: '100%',height: 'auto',display: 'flex',justifyContent: 'space-btween'}}>
            <div style={{width: '50%',display: 'flex',justifyContent:"center",gap:"15px"}}>
            <div style={{width: '25%'}}>
               
                <div><img  style={{width:"70%"}} src={data?.image1}/></div>
                <div><img  style={{width:"70%"}} src={data?.image}/></div>
                
                <div><img  style={{width:"70%"}} src="https://img.shop.com/Image/240000/248600/248698/skualt/2182369.jpg?plain&size=800x800"/></div>
            </div>
            <div style={{width: '60%'}}>
                <div><img src={data?.image}/></div>
            </div>
            </div>
            <div style={{width: '50%',textAlign: 'left'}}>
                <Heading>{data?.title}</Heading>
                <Text>Sold bt Light of Life®</Text>
                <Flex><Text>{data?.rating.rate}<Box color="#D3A82D"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></Box></Text></Flex>
                <Box mt="50px" mb="15px">
                    <Heading>${data?.price}</Heading>
                </Box>
                <hr ></hr>
                <Text textAlign="center" mb="10px">Free shipping on orders $99 and up from Market America</Text>
                <hr ></hr>
                <Box width="80%" ml="75px">
                Save on shipping for Father’s Day gifts! Reduced express shipping through June 16th on your shipment of Market America branded products of $100 or more! See full Terms & Conditions
                </Box>
                <Box>
                    <Image w="80%" ml="45px" mt="10px" src="image/crypto.png"/>
                </Box>
                <Box>
                    <Image w="80%" ml="45px" mt="10px" src="image/color.png"/>
                </Box>
                <Box borderRadius="7px" border="1px solid black" height="150px" w="80%" ml="45px">

                    <Box>
                     <RadioGroup >
                         <Stack direction='row'>
                            <Radio value='1' fontWeight='bold'>Buy now: $35.00</Radio>
                         </Stack>
                    </RadioGroup>
                 </Box>
                
                    <Box mt="25px">  
                        <Select placeholder='1' width='15%'>
                        <option value='option1'>1</option>
                        <option value='option2'>2</option>
                        <option value='option3'>3</option>
                        <option value='option1'>4</option>
                        <option value='option2'>5</option>
                        <option value='option3'>6</option>
                        <option value='option1'>7</option>
                        <option value='option2'>8</option>
                        <option value='option3'>9</option>
                        <option value='option3'>10</option>
                    </Select>
                </Box>
                <Box border="1px solid black" height="35px" textAlign="center" w="50%" borderRadius="15px" background="#414467" color="white" ml="105px" mt="-40px">
                    <button onClick={handedlClick} >Add to Cart</button>
                </Box>

                <Box  height="45px" mt="15px" background="#F0F1F7">
                            <RadioGroup defaultValue='2'>
                            <Stack spacing={5} direction='row'>
                                <Radio colorScheme='red' value='1'>
                              
                                </Radio>
                                <Radio colorScheme='green' value='2'>
                                Buy now and save with AutoShip: $33.25 — See details
                                </Radio>
                            </Stack>
                            </RadioGroup>
                </Box>

                  </Box>
            </div>

            
        </div>
        {/* ........................ */}
        <Box mt="35px">
        <Heading>We thought you may like:</Heading>
        </Box>
        <Box w="100%" height="auto"  background="#F0F1F7" >
        <ThreeBox/>
        </Box>

        <Box w="100%" height="auto"  background="#F0F1F7" mb="15px" >
        <FourBox/>
        </Box>

        <div>
        <Footer />
        </div>
        
    </div>
  )
}

export default Products