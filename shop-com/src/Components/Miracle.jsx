import React from 'react'
import { Box, IconButton, useBreakpointValue,Flex ,Image,useColorModeValue,Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
const data ={
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  }

export const Miracle = () => {
  return (
    <div>
      <Box>
        <Image src="image/three.png"/>
      </Box>
      <Box>
        <ProductAddToCart/>
      </Box>
      <Box>
        <Image src="image/three1.png"/>
      </Box>
      <Box>
        <ProductAddToCartTwo/>
      </Box>
      <Box >
        <Image ml="30px" width="95%" src="image/three2.png"/>
      </Box>
      <Box >
        <Image ml="30px" width="95%" src="image/setsummer.png"/>
      </Box>
      <Box bg={useColorModeValue('white', 'gray.800')} maxW="100%" height="400px" borderWidth="1px" rounded="lg"shadow="lg" position="relative" fontSize="35px" >
        <Box fontWeight="bold">Our Brands</Box>
        <Flex  justifyContent="center" gap="12px" hoverStyle="" >
            <Box fontSize="18px" fontWeight="bold">
                HEALTH & NUTRITION
                <Image src="https://img.shop.com/Image/homepage/healthnutirtion1572880380738.jpg"/>
            </Box>
            <Box fontSize="18px" fontWeight="bold">
                BEAUTY
                <Link to="/beauty">
                <Image src="https://img.shop.com/Image/homepage/lipstick1572880828301.jpg"/>
                </Link>
                
            </Box>
            <Box fontSize="18px" fontWeight="bold">
                HOME & CLEANING
                <Image src="https://img.shop.com/Image/homepage/home_ma1572880950379.jpg"/>
            </Box>
            <Box fontSize="18px" fontWeight="bold">
                BABY & KIDS
                <Image src="https://img.shop.com/Image/homepage/baby-kids1572881179463.jpg"/>
            </Box>
            <Box fontSize="18px" fontWeight="bold">
                JEWELRY
                <Image src="https://img.shop.com/Image/homepage/1840336563__225x225-img__.jpg"/>
            </Box>
        </Flex>
      </Box>
      
    </div>
  )
}





function ProductAddToCart() {
    return (
      
        <>
      
      <Box bg={useColorModeValue('white', 'gray.800')} maxW="100%" height="80px" borderWidth="1px" rounded="lg"shadow="lg" position="relative" fontSize="35px" textAlign="left" fontWeight="bold" marginBottom="-35px">
      For your Little Miracle</Box>
        <Flex p={50} w="full" alignItems="center" justifyContent="center" gap="12px"  >
        <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
          
          <Image width="80%" src="https://img.shop.com/Image/250000/250100/250199/products/960258130.jpg?size=300x300" alt={`Picture of ${data.name}`} />
           
           <Box p="6">
  
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box fontSize="s" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              DNA Miracle Isotonix® Degestive Enzymes
              </Box>
             </Flex>
  
            <Box>
              <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')} textAlign="left">
                <Box as="span" color={'gray.600'} fontSize="lg">
                  $
                </Box>
                58.95
              </Box>
             <Flex color="#D3A82D" >
                  {Rating({rating:Number(data.rating)})} 
                  <Box as="span" color={'gray.600'} fontSize="lg">
                  (9)
                </Box>
              </Flex>
              
             
            </Box>
            <Text fontSize="s" color="teal" textAlign="left">Free shipping with $99 orders</Text>
          </Box>
        </Box>
        {/* 22222222222222222222222222222222222 */}
  
        <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
          
          <Image  src="https://img.shop.com/Image/250000/250100/250199/products/1519464953.jpg?size=300x300" alt={`Picture of ${data.name}`} />
           
           <Box p="6">
  
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box fontSize="x" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              DNA Miracle Isotonix® Natural Bathtime Box
              </Box>
             </Flex>
  
            <Box>
              <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')} textAlign="left">
                <Box as="span" color={'gray.600'} fontSize="lg">
                  $
                </Box>
                57.95
              </Box>
             <Flex color="#D3A82D" >
                  {Rating({rating:Number(data.rating)})} 
                  <Box as="span" color={'gray.600'} fontSize="lg">
                  (9)
                </Box>
              </Flex>
              
             
            </Box>
            <Text fontSize="s" color="teal" textAlign="left">Free shipping with $99 orders</Text>
          </Box>
        </Box>
        
             
        <Box bg={useColorModeValue('white', 'gray.800')} maxW="100%" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
          
          <Image  maxW="100%" height="450px" src="https://img.shop.com/Image/homepage/dna-usa-100759-natural-ointment-banner-sq-min1652809493971.jpeg" alt={`Picture of ${data.name}`} />
           
        </Box>

      </Flex>
      
      </>
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


    
function ProductAddToCartTwo() {
    return (
      
        <>
      
      <Box bg={useColorModeValue('white', 'gray.800')} maxW="100%" height="80px" borderWidth="1px" rounded="lg"shadow="lg" position="relative" fontSize="35px" textAlign="left" fontWeight="bold" marginBottom="-35px">
      Layered Custom Capsule Collection</Box>
        <Flex p={50} w="full" alignItems="center" justifyContent="center" gap="12px"  >

        <Box bg={useColorModeValue('white', 'gray.800')} maxW="100%" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
          
          <Image  maxW="100%" height="450px" src="https://img.shop.com/Image/homepage/layered-usa-eng-100693-spring-collection-banner-sq-min1651073323321.jpeg" alt={`Picture of ${data.name}`} />
           
        </Box>

        <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
          
          <Image src="https://img.shop.com/Image/280000/282000/282022/products/1932866513.jpg?size=300x300" alt={`Picture of ${data.name}`} />
           
           <Box p="6">
  
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box fontSize="s" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
             PHONENIX - 6 mm Rope Chain
              </Box>
             </Flex>
  
            <Box>
              <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')} textAlign="left">
                <Box as="span" color={'gray.600'} fontSize="lg">
                  $
                </Box>
                79.95
              </Box>
             <Flex color="#D3A82D" >
                  {Rating({rating:Number(data.rating)})} 
                  <Box as="span" color={'gray.600'} fontSize="lg">
                  (9)
                </Box>
              </Flex>
              
             
            </Box>
            <Text fontSize="s" color="teal" textAlign="left">Free shipping with $99 orders</Text>
          </Box>
        </Box>
        {/* 22222222222222222222222222222222222 */}
  
        <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
          
          <Image  src="https://img.shop.com/Image/280000/282000/282022/products/1932866535.jpg?size=300x300" alt={`Picture of ${data.name}`} />
           
           <Box p="6">
  
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box fontSize="x" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
               STORM - 8 mm Rope Chain
              </Box>
             </Flex>
  
            <Box>
              <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')} textAlign="left">
                <Box as="span" color={'gray.600'} fontSize="lg">
                  $
                </Box>
                59.95
              </Box>
             <Flex color="#D3A82D" >
                  {Rating({rating:Number(data.rating)})} 
                  <Box as="span" color={'gray.600'} fontSize="lg">
                  (9)
                </Box>
              </Flex>
              
             
            </Box>
            <Text fontSize="s" color="teal" textAlign="left">Free shipping with $99 orders</Text>
          </Box>
        </Box>
        
             
       

      </Flex>
      
      </>
    );
  }
  

  

  