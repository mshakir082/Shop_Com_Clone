import React from 'react';
import { Box, IconButton, useBreakpointValue,Flex ,Image,useColorModeValue,Text} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
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




// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(Slider | null) ;

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  


  return (
   
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
     
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
      <link rel="stylesheet" type="text/css"href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>

       <ProductAddToCart />
      </Slider>
    </Box>
    
  );
}


function ProductAddToCart() {
  return (
    
      <>
    
    <Box bg={useColorModeValue('white', 'gray.800')} maxW="100%" height="80px" borderWidth="1px" rounded="lg"shadow="lg" position="relative" fontSize="35px" textAlign="left" fontWeight="bold" marginBottom="-35px">
      Hot New Products</Box>
      <Flex p={50} w="full" alignItems="center" justifyContent="center" gap="12px" >
      <Box bg={useColorModeValue('white', 'gray.800')} maxW="xs" borderWidth="1px" rounded="lg"shadow="lg" position="relative">
        
        <Image width="80%" src="https://img.shop.com/Image/240000/248600/248698/products/1935915380.jpg?size=300x300" alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="s" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            Lumi??re de Vie?? Soothe &amp; Renew Hydrogel Mask
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
        
        <Image  src="https://img.shop.com/Image/240000/243300/243380/products/1932836050.jpg?size=300x300" alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="x" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              Motives?? Sculpting Concealer
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
        
        <Image src="https://img.shop.com/Image/240000/243300/243380/products/1925345765.jpg?size=300x300" alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="x" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            Motives?? 3-in-1 Cream Tints
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
        
        <Image width="90%" src="https://img.shop.com/Image/240000/243300/243380/products/1925345789.jpg?size=300x300" alt={`Picture of ${data.name}`} />
         
         <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="x" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            Motives?? Moment Pressed Pigment Palette
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
  