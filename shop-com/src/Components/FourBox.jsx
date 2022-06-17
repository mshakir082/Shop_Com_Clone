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
    
    <Box bg={useColorModeValue('white', 'gray.800')} maxW="100%" height="80px" borderWidth="1px" rounded="lg"shadow="lg" position="relative" fontSize="35px" textAlign="center" fontWeight="bold" marginBottom="-35px">
      Hot New Products</Box>
      <Flex p={50} w="full" alignItems="center" justifyContent="center" gap="12px" >
      <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
        
        <Image  width="70%"  src="https://img.shop.com/Image/210000/214100/214196/products/561800349__175x175__.jpg" alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="s" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            Isotonix OPC-3®
            </Box>
           </Flex>

          <Box>
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')} textAlign="left">
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {data.price.toFixed(2)}
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
        
        <Image  src="https://img.shop.com/Image/240000/243300/243396/products/603891601__175x175__.jpg" alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="x" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            Ultimate Aloe™
            </Box>
           </Flex>

          <Box>
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')} textAlign="left">
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {data.price.toFixed(2)}
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

      {/* 333333333333333333333333333333333 */}
      <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
        
        <Image src="https://img.shop.com/Image/210000/214100/214196/products/935461732__175x175__.jpg" alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="x" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            Isotonix® Daily Essentials Packets
            </Box>
           </Flex>

          <Box>
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')} textAlign="left">
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {data.price.toFixed(2)}
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
      {/* 4444444444444444444 */}

      <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
        
        <Image width="70%" src="https://img.shop.com/Image/210000/214100/214196/products/561800345__175x175__.jpg" alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="x" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            Isotonix® Vitamin D with K2
            </Box>
           </Flex>

          <Box>
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')} textAlign="left">
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {data.price.toFixed(2)}
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
  