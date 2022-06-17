import React from 'react';
import { Box, IconButton, useBreakpointValue,Flex ,Image,useColorModeValue,Text} from '@chakra-ui/react';

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







export default function ProductAddToCart() {
  return (
    
      <>
    
    
      <Flex p={50} w="full" alignItems="center" justifyContent="center" gap="12px" >
      <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
        
        <Image width="50%" src="https://img.shop.com/Image/240000/248600/248698/products/894127078__175x175__.jpg" alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="s" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          Lumière de Vie® Intensive Hand & Body Cream
            </Box>
           </Flex>

          <Box>
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')} textAlign="left">
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              32.95
            </Box>
           <Flex color="#D3A82D" >
                {Rating({rating:Number(data.rating)})} 
                <Box as="span" color={'gray.600'} fontSize="lg">
                (59)
              </Box>
            </Flex>
            
           
          </Box>
          <Text fontSize="s" color="teal" textAlign="left">Free shipping with $99 orders</Text>
        </Box>
      </Box>
      {/* 22222222222222222222222222222222222 */}

      <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
        
        <Image  src="https://img.shop.com/Image/240000/248600/248698/products/1454255906__175x175__.jpg" alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="x" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            Light of Life® Micellar Cleanser
             </Box>
           </Flex>

          <Box>
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')} textAlign="left">
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              45.00
            </Box>
           <Flex color="#D3A82D" >
                {Rating({rating:Number(data.rating)})} 
                <Box as="span" color={'gray.600'} fontSize="lg">
                (24)
              </Box>
            </Flex>
            
           
          </Box>
          <Text fontSize="s" color="teal" textAlign="left">Free shipping with $99 orders</Text>
        </Box>
      </Box>

      {/* 333333333333333333333333333333333 */}
      <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
        
        <Image w="50%" src="https://img.shop.com/Image/240000/248600/248698/products/1864517643__175x175__.jpg" alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="x" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            Lumière de Vie® Daily Brightening Broad Spectrum SPF 50
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
                (12)
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
  