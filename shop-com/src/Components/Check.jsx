import React from 'react';
import { Box, IconButton, useBreakpointValue,Image ,Text,Flex,useColorModeValue} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(Slider | null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    {
        isNew: true,
        imageURL:
          'https://img.shop.com/Image/240000/248600/248698/products/1935915380.jpg?size=300x300',
        name: ' Lumière de Vie® Soothe &amp; Renew Hydrogel Mask',
        price: 58.95,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: true,
        imageURL:
          'https://img.shop.com/Image/240000/243300/243380/products/1932836050.jpg?size=300x300',
        name: ' Motives® Sculpting Concealer',
        price: 65.00,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: true,
        imageURL:
          'https://img.shop.com/Image/240000/243300/243380/products/1925345765.jpg?size=300x300',
        name: ' Motives® 3-in-1 Cream Tints',
        price:35.55 ,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: true,
        imageURL:
          'https://img.shop.com/Image/240000/243300/243380/products/1925345789.jpg?size=300x300',
        name: 'Motives® Moment Pressed Pigment Palette',
        price:66.95 ,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: true,
        imageURL:
          'https://img.shop.com/Image/240000/247900/247927/products/1925345712.jpg?size=300x300',
        name: 'Shaopping Annutity® Brand Primimum Flushoble wipes-150 Count',
        price: 7.49,
        rating: 4.2,
        numReviews: 34,
    }
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
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
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            // backgroundImage={`url(${url})`}

            >
         <Box border="1px solid black" height="auto" width="25%" padding="5">
                <Image src={url.imageURL}/>
                <Text fontSize="x">{url.name}</Text>
                <Flex color="#D3A82D" >
                {Rating({rating:Number(url.rating)})} 
                <Box as="span" color={'gray.600'} fontSize="lg">
                ({url.numReviews})
              </Box>
            </Flex>
            <Text fontSize="s" color="teal" textAlign="left">Free shipping with $99 orders</Text>
        </Box>
      </Box>
               
               
            
        ))}
      </Slider>
    </Box>
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