import React,{useEffect} from 'react'
import Navbar from '../Components/Navbar'
import { Image } from '@chakra-ui/react'
import { Checkbox, Text,VStack ,Box,Heading,Flex,Center,Stack,useColorModeValue,Button} from '@chakra-ui/react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchData} from '../Redux/action'
import {useSearchParams} from 'react-router-dom'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import Footer from '../Components/Footer'
import {Link} from 'react-router-dom'
let cartData=JSON.parse(localStorage.getItem("cart")) || [];

const Beuty = () => {
 
  const products=useSelector(state=>state.ecommerceData.products);

  const dispatch=useDispatch();
 
  const [searchParams]=useSearchParams();
  
  useEffect(()=>{

    
      let params={
        category:searchParams.getAll("category"),
      }
      dispatch(fetchData(params))
   

  },[dispatch,products?.length,searchParams]);

  return (
    <>
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Image src="image/beauty1.png" />
      </div>
      <div style={{textAlign:"left",marginLeft:"15px"}}>
      <label for="cars">Sort:</label>
      <select name="cars" id="cars" style={{fontWeight:"bold"}}>
        <option value="Best Match">Best Match</option>
        <option value="h2l">Price High-Low</option>
        <option value="l2h">Price Low-High</option>
        <option value="cash">Most Cashback</option>
      </select>
      <br></br>
      </div>
        <div style={{border:"2px solid lightGray"}}></div>
          <br></br>
          {/* ................................... */}
        <div  style={{height:"500px",display:"flex",gap:"15px"}}>

       <div style={{height:"auto",width:"22%"}}>
          <VStack  alignItems={"baseline"} ml="10px" >
          <Checkbox >Virtual Try On  (22)</Checkbox>
          <Checkbox >Sale items  (18)</Checkbox>
          <Checkbox >Shipping Offers  (211)</Checkbox>
          <Checkbox defaultChecked>Exclusive Brands  (227)</Checkbox>
          </VStack>
          <br></br>
          <hr></hr>
          <Box>
              <Heading fontSize="18px" ml="15px" textAlign="left">Beauty Concern</Heading>
              <Box>
              <VStack  alignItems={"baseline"} ml="28px" >alignItems={"baseline"}>
              <Text> Anti-Aging  (40)</Text>
               <Text> Dullness  (35)</Text>
                <Text> Dryness  (42)</Text>
                <Text> Dark Spots  (19)</Text>
                <Text> Fine Lines & Wrinkles  (26)</Text>
                <Text>Pores  (21)</Text>
                <Text> Oil Control  (22)</Text>
                <Text> Sensitive Skin  (11)</Text>
                <Text>Puffiness  (9)</Text>
                <Text> Acne  (6)</Text>
                </VStack>
              </Box>
               </Box>
               <br></br>
               <hr></hr>
              {/* .......................22222222222222222 */}
              <br></br>
             <Box>
              <Heading fontSize="18px" ml="15px" textAlign="left">Skin Type</Heading>
              <Box>
              <VStack  alignItems={"baseline"} ml="28px" >alignItems={"baseline"} >
              <Text> Dry  (64)</Text>
               <Text> Oily  (58)</Text>
                <Text> Mature  (58)</Text>
                <Text> Combination  (52)</Text>
                <Text> Normal  (45)</Text>
                <Text>Sensitive  (26)</Text>
                </VStack>
              </Box>
               </Box>
               <br></br>
               <hr></hr>

                {/* .......................333333333333333 */}
              <br></br>
             <Box>
              <Heading fontSize="18px" ml="15px" textAlign="left"> Category</Heading>
               <Box>
              <VStack  alignItems={"baseline"} ml="28px" >alignItems={"baseline"}>
              <Text> Skin Care  (78)</Text>
               <Text>Face Makeup  (39)</Text>
                <Text> Sun Protection & Tanning  (5)</Text>
                <Text> Eye Makeup  (38)</Text>
                <Text>Hair Care Products  (15)</Text>
                <Text>Lip Products  (29)</Text>
                <Text>Lip Products  (29)</Text>
                <Text>Bath & Shower  (6)</Text>
                <Text>Beauty Gift Sets  (19)</Text>
                <Text>Cosmetic Accessories  (18)</Text>
                <Text>Shaving & Hair Removal Tools  (4)</Text>
                </VStack>
              </Box>
               </Box>
               <br></br>
               <hr></hr>

               
                {/* .......................44444444444444444444 */}
              <br></br>
             <Box>
              <Heading fontSize="18px" ml="15px" textAlign="left"> Hair Type</Heading>
               <Box>
              <VStack  alignItems={"baseline"} ml="28px" >alignItems={"baseline"}>
  
              <Text>Chemically Treated  (9)</Text>
               <Text>Coarse  (8)</Text>
                <Text>Fine  (8)</Text>
                <Text>Straight  (7)</Text>
                <Text>Curly  (9)</Text>
                <Text>Wavy  (9)</Text>
                <Text>Dry  (5)</Text>
                <Text>Damaged  (4)</Text>
                </VStack>
              </Box>
               </Box>
               <br></br>
               <hr></hr>
          </div>

          <div style={{ width:"78%"}}>

          <Box>
          <Heading as='h3'>Products</Heading>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {
              products.map((el)=>{
                
                   return <ProductSimple el={el} id={el.id} image={el.image} title={el.title} price={el.price} discription={el.discription} rating={el.rating.rate} count={el.rating.count}/>
              })
            }
          </Flex>
            
         </Box>
         <div style={{width:"129%", marginLeft:"-290px"}}>
              <Footer/>
        </div>
          </div>
          
        </div>
        
</div>

 </>
  )
}

export default Beuty

function ProductSimple({image,title,price,rating,count,id,el}) {


  const handelClick=(el)=>{
    console.log(el)
    cartData=[...cartData,el] 
  localStorage.setItem("cart", JSON.stringify(cartData))
  console.log(cartData)
    
  }
  return (
    <Center py={12}>
      <Box role={'group'} p={6} maxW={'430px'} maxH={'auto'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        
          <Image
            rounded={'lg'}
            height={430}
            width={482}
            objectFit={'contain'}
            src={image}
          />

          <Image src="image/showproduct.png"/>
       
        <Stack pt={10} align={'center'}>
         
          <Heading fontSize={'x'} fontFamily={'body'} fontWeight={500}>
           {title}
          </Heading>
          <Stack direction={'row'} align={'left'}>
            <Text fontWeight={800} fontSize={'xl'} >
            ${price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
          <Flex color="#D3A82D" >
                {Rating({rating:Number(rating)})} 
                <Box as="span" color={'gray.600'} fontSize="lg">
                ({count})
              </Box>
            </Flex>
          
        </Stack>
        <Flex justifyContent="space-between" mt="15px">
              <Box>
              <Button
                  loadingText="Submitting"
                  size="md"
                   color="black" borderRadius="20px"
                   backgroundColor="white" border="1px solid"
                  _hover={{
                    bg: '#414467',color: 'white'
                  }}>
                    
                    <Link to={`/beauty/${id}`}>See Details</Link>
                  
                </Button>
              </Box>
              <Box>
              <Button
                  loadingText="Submitting"
                  size="lg"
                   color="white" borderRadius="22px"
                   backgroundColor="#414467" border="1px solid"
                  _hover={{
                    bg: '#242830',color: 'white'
                  }}
                  onClick={()=>handelClick(el)}
                  >
                    Add to Cart
                </Button>
              </Box>
            </Flex>
      </Box>
    </Center>
  );
}
 

function Rating({ rating }) {
  return (
    <Box display='flex' alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
               
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
     
    </Box>
  );
}
