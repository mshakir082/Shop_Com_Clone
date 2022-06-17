import {Flex,Box,FormControl,FormLabel,Input,InputGroup,HStack,InputRightElement,Stack,Button,Heading,Text,useColorModeValue,Link,} from '@chakra-ui/react';
  import React,{ useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router';
  
  export default function SignupCard() {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({});

    const navigate=useNavigate();

      const handelChange=(e)=>{
          setFormData({...formData,[e.target.name]: e.target.value});
      }
    const onsubmit=(e)=>{
          e.preventDefault();
         localStorage.setItem("signup",JSON.stringify(formData));
         alert("Signup successful")
         navigate("/login")
    }
  
    return (
      <Flex minH={'100vh'} >
        <Stack spacing={8} mx={'auto'} maxW={'2xl'} py={12} px={6}>
          <Stack >
            <Heading fontSize={'4xl'} textAlign={'left'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'} textAlign={'left'}>
              * Indicates required filed
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={onsubmit}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder="First name here" name="name" onChange={handelChange} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder="Last name here" name="last" onChange={handelChange} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="yourname@example.com" name="email" onChange={handelChange}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password </FormLabel>
                <InputGroup>
                  <Input type="password" placeholder="Please enter a minumum of 7 characters" name="password" onChange={handelChange}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  background="#414467" color="white" borderRadius="15px"
                  _hover={{
                    bg: '#242830',
                  }}   type="submit" >
                  Sign up
                 
                </Button>

              </Stack>
              </form>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }