import {
  Flex,
    Box,
  Image,
 useColorModeValue,
 Text
  
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';


const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};


function ProductAddToCart() {

  return (
    
    <Flex p={50} w="full" alignItems="center" justifyContent="center" gap="12px" >
      <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
        
        <Image src={data.imageURL} alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {data.name}
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
  
export default ProductAddToCart;